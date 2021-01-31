import xml2json from "../util/xml2json";
import type {
  Dish,
  DSNData,
  DSNResponse,
  Spacecraft,
  TargetEntry,
} from "../data/Models";
import {
  defaultDishList,
  dishToStationMap,
  spacecraftMap,
} from "../data/referenceData";
const parser = new DOMParser();

export function getStationByDishName(
  dishName: string
): "Goldstone" | "Canberra" | "Madrid" {
  return dishToStationMap[dishName] ? dishToStationMap[dishName] : undefined;
}

export function getSpacecraftDetails(target: TargetEntry): Spacecraft {
  const spacecraftDetails = spacecraftMap[removeAtSign(target["@id"])];
  if (!spacecraftDetails) {
    console.log(
      "%cNEW SPACECRAFT:",
      "background: lightseagreen; color: white;",
      target
    );
    return {
      id: target["@id"],
      shortName: target["@name"],
      longName: "UNKNOWN",
      sources: [],
    };
  }

  return spacecraftDetails;
}

export function removeAtSign(value: string): string {
  return value.replace("@", "");
}

export async function processDSNResponse(response: any): Promise<DSNData> {
  const textResponse = await response.text();
  const jsonResponse = parseDSNData(textResponse);

  // Merge data into Default Data (shows all dishes, even inactive)
  const DSNDataForDisplay: DSNData = generateDSNDataForUI(jsonResponse);
  console.log("DSNDataForDisplay", DSNDataForDisplay);
  return DSNDataForDisplay;
}

function parseDSNData(data): DSNResponse {
  const xmlDoc = parser.parseFromString(data, "text/xml");
  const { dsn } = JSON.parse(xml2json(xmlDoc, ""));
  console.log("DSN Response JSON:", dsn);
  return dsn;
}

function generateDSNDataForUI(
  jsonData: DSNResponse,
  defaultData: Dish[] = defaultDishList
): DSNData {
  // updat the dish list by mapping over the default data, and grabbing from the DSN data if present
  const { dish: dishes, station: stations, timestamp } = jsonData;
  let serializedDSNData: DSNData = {
    dishes,
    stations,
    timestamp,
  };

  // Loop over default dishes, and update with data from response
  const updatedDishes = defaultDishList.map((dish) => {
    const dishInResponse = jsonData["dish"].find(
      (responseDish) => responseDish["@name"] === dish["@name"]
    );
    if (dishInResponse) {
      return serializeResponseDish(dishInResponse);
    } else {
      return dish;
    }
  });

  const compareFn = (a, b) => {
    if (a["metadata"]["status"] < b["metadata"]["status"]) {
      return 1;
    } else {
      return -1;
    }
  };
  const sortedDishes = updatedDishes.sort(compareFn);

  return { ...serializedDSNData, dishes: sortedDishes };
}

function serializeResponseDish(dish: Partial<Dish>): any {
  const { downSignal, upSignal, target } = dish;
  const status = dish["@elevationAngle"] ? "ONLINE" : "OFFLINE";
  // TODO: convert all number strings into Number types?
  return {
    ...dish,
    downSignal: Array.isArray(downSignal) ? downSignal : [downSignal],
    upSignal: Array.isArray(upSignal) ? upSignal : [upSignal],
    target: Array.isArray(target) ? target : [target],
    metadata: {
      status,
      station: getStationByDishName(dish["@name"]),
    },
  };
}
