import type { Dish, Spacecraft } from "./Models";

export const dishToStationMap = {
  DSS26: "Goldstone",
  DSS25: "Goldstone",
  DSS24: "Goldstone",
  DSS14: "Goldstone",
  DSS34: "Canberra",
  DSS35: "Canberra",
  DSS36: "Canberra",
  DSS43: "Canberra",
  DSS54: "Madrid",
  DSS55: "Madrid",
  DSS56: "Madrid",
  DSS65: "Madrid",
  DSS63: "Madrid",
};

export const spacecraftMap = {
  96: {
    id: "96",
    shortName: "SPP",
    longName: "Parker Solar Probe",
    sources: [
      {
        title: "Parker Solar Probe, Wikipedia",
        url: "https://en.wikipedia.org/wiki/Parker_Solar_Probe",
      },
    ],
  } as Spacecraft,
  234: {
    id: "234",
    shortName: "STA",
    longName: "STEREO A",
    sources: [
      {
        title: "STEREO, Wikipedia",
        url: "https://en.wikipedia.org/wiki/STEREO",
      },
    ],
  } as Spacecraft,
  64: {
    id: "64",
    shortName: "ORX",
    longName: "OSIRIS-REx",
    sources: [
      {
        title: "OSIRIS-REx, Wikipedia",
        url: "https://en.wikipedia.org/wiki/OSIRIS-REx",
      },
    ],
  } as Spacecraft,
  168: {
    id: "168",
    shortName: "M20",
    longName: "Mars 2020 (Perseverance)",
    sources: [
      {
        title: "Perseverance (rover), Wikipedia",
        url: "https://en.wikipedia.org/wiki/Perseverance_(rover)",
      },
    ],
  } as Spacecraft,
  62: {
    id: "62",
    shortName: "EMM",
    longName: "Emirates Mars Mission (Hope)",
    sources: [
      {
        title: "Emirates Mars Mission (Hope), Wikipedia",
        url: "https://en.wikipedia.org/wiki/Emirates_Mars_Mission",
      },
    ],
  } as Spacecraft,
  202: {
    id: "202",
    shortName: "MVN",
    longName: "Mars Atmosphere and Volatile EvolutioN (MAVEN)",
    sources: [
      {
        title: "MAVEN, Wikipedia",
        url: "https://en.wikipedia.org/wiki/MAVEN",
      },
    ],
  } as Spacecraft,
  53: {
    id: "53",
    shortName: "M01O",
    longName: "Mars Odyssey",
    sources: [
      {
        title: "Mars Odyssey, Wikipedia",
        url: "https://en.wikipedia.org/wiki/2001_Mars_Odyssey",
      },
    ],
  } as Spacecraft,
  76: {
    id: "76",
    shortName: "MSL",
    longName: "Mars Science Laboratory (Curiosity)",
    sources: [
      {
        title: "Curiosity (rover), Wikipedia",
        url: "https://en.wikipedia.org/wiki/Curiosity_(rover)",
      },
    ],
  } as Spacecraft,
  143: {
    id: "143",
    shortName: "TGO",
    longName: "Trace Gas Orbiter",
    sources: [
      {
        title: "Trace Gas Orbiter, Wikipedia",
        url: "https://en.wikipedia.org/wiki/Trace_Gas_Orbiter",
      },
    ],
  } as Spacecraft,
  74: {
    id: "74",
    shortName: "MRO",
    longName: "Mars Reconnaissance Orbiter",
    sources: [
      {
        title: "Mars Reconnaissance Orbiter, Wikipedia",
        url: "https://en.wikipedia.org/wiki/Mars_Reconnaissance_Orbiter",
      },
    ],
  } as Spacecraft,
  32: {
    id: "32",
    shortName: "VGR2",
    longName: "Voyager 2",
    sources: [
      {
        title: "Voyager 2, Wikipedia",
        url: "https://en.wikipedia.org/wiki/Voyager_2",
      },
    ],
  } as Spacecraft,
  151: {
    id: "151",
    shortName: "CHDR",
    longName: "Chandra X-ray Observatory",
    sources: [
      {
        title: "Chandra X-ray Observatory, Wikipedia",
        url: "https://en.wikipedia.org/wiki/Chandra_X-ray_Observatory",
      },
    ],
  } as Spacecraft,
  85: {
    id: "85",
    shortName: "LRO",
    longName: "Lunar Reconnaissance Orbiter",
    sources: [
      {
        title: "Lunar Reconnaissance Orbiter, Wikipedia",
        url: "https://en.wikipedia.org/wiki/Lunar_Reconnaissance_Orbiter",
      },
    ],
  } as Spacecraft,
  21: {
    id: "21",
    shortName: "SOHO",
    longName: "Solar and Heliospheric Observatory",
    sources: [
      {
        title: "Solar and Heliospheric Observatory, Wikipedia",
        url: "https://en.wikipedia.org/wiki/Solar_and_Heliospheric_Observatory",
      },
    ],
  } as Spacecraft,
  31: {
    id: "31",
    shortName: "VGR1",
    longName: "Voyager 1",
    sources: [
      {
        title: "Voyager 1, Wikipedia",
        url: "https://en.wikipedia.org/wiki/Voyager_1",
      },
    ],
  } as Spacecraft,
  1: {
    id: "1",
    shortName: "GTL",
    longName: "Geotail",
    sources: [
      {
        title: "Geotail, Wikipedia",
        url: "https://en.wikipedia.org/wiki/Geotail",
      },
    ],
  } as Spacecraft,
  50: {
    id: "50",
    shortName: "DSN",
    longName: "Testing",
    sources: [],
  } as Spacecraft,
  99: {
    id: "99",
    shortName: "TEST",
    longName: "Testing",
    sources: [],
  } as Spacecraft,
  61: {
    id: "61",
    shortName: "JNO",
    longName: "Juno",
    sources: [
      {
        title: "Juno, Wikipedia",
        url: "https://en.wikipedia.org/wiki/Juno_(spacecraft)",
      },
    ],
  } as Spacecraft,
  78: {
    id: "78",
    shortName: "DSCO",
    longName: "Deep Space Climate Observatory",
    sources: [
      {
        title: "Deep Space Climate Observatory, Wikipedia",
        url: "https://en.wikipedia.org/wiki/Deep_Space_Climate_Observatory",
      },
    ],
  } as Spacecraft,
  217: {
    id: "217",
    shortName: "GBRA",
    longName: "Ground Based Radio Astronomy",
    sources: [
      {
        title: "Radio Telescope, Wikipedia",
        url: "https://en.wikipedia.org/wiki/Radio_telescope",
      },
    ],
  } as Spacecraft,
  108: {
    id: "108",
    shortName: "MMS1",
    longName: "Magnetospheric Multiscale Mission 1",
    sources: [
      {
        title: "Magnetospheric Multiscale Mission, Wikipedia",
        url: "https://en.wikipedia.org/wiki/Magnetospheric_Multiscale_Mission",
      },
    ],
  } as Spacecraft,
  109: {
    id: "109",
    shortName: "MMS2",
    longName: "Magnetospheric Multiscale Mission 2",
    sources: [
      {
        title: "Magnetospheric Multiscale Mission, Wikipedia",
        url: "https://en.wikipedia.org/wiki/Magnetospheric_Multiscale_Mission",
      },
    ],
  } as Spacecraft,
  110: {
    id: "110",
    shortName: "MMS3",
    longName: "Magnetospheric Multiscale Mission 3",
    sources: [
      {
        title: "Magnetospheric Multiscale Mission, Wikipedia",
        url: "https://en.wikipedia.org/wiki/Magnetospheric_Multiscale_Mission",
      },
    ],
  } as Spacecraft,
  113: {
    id: "113",
    shortName: "MMS4",
    longName: "Magnetospheric Multiscale Mission 4",
    sources: [
      {
        title: "Magnetospheric Multiscale Mission, Wikipedia",
        url: "https://en.wikipedia.org/wiki/Magnetospheric_Multiscale_Mission",
      },
    ],
  } as Spacecraft,
  192: {
    id: "192",
    shortName: "THB",
    longName: "THEMIS B",
    sources: [
      {
        title: "THEMIS, Wikipedia",
        url: "https://en.wikipedia.org/wiki/THEMIS",
      },
    ],
  } as Spacecraft,
  189: {
    id: "189",
    shortName: "NYST",
    longName: "InSight",
    sources: [
      {
        title: "InSight, Wikipedia",
        url: "https://en.wikipedia.org/wiki/InSight",
      },
    ],
  } as Spacecraft,
  41: {
    id: "41",
    shortName: "MEX",
    longName: "Mars Express",
    sources: [
      {
        title: "Mars Express, Wikipedia",
        url: "https://en.wikipedia.org/wiki/Mars_Express",
      },
    ],
  } as Spacecraft,
  92: {
    id: "92",
    shortName: "ACE",
    longName: "Advanced Composition Explorer",
    sources: [
      {
        title: "Advanced Composition Explorer, Wikipedia",
        url: "https://en.wikipedia.org/wiki/Advanced_Composition_Explorer",
      },
    ],
  } as Spacecraft,
  98: {
    id: "98",
    shortName: "NHPC",
    longName: "New Horizons",
    sources: [
      {
        title: "New Horizons, Wikipedia",
        url: "https://en.wikipedia.org/wiki/New_Horizons",
      },
    ],
  } as Spacecraft,
};

export const defaultDishList: Dish[] = [
  {
    "@name": "DSS26",
    "@azimuthAngle": null,
    "@elevationAngle": null,
    "@windSpeed": null,
    "@isMSPA": null,
    "@isArray": null,
    "@isDDOR": null,
    "@created": null,
    "@updated": null,
    target: [],
    downSignal: [],
    upSignal: [],
    metadata: { status: "OFFLINE", station: "Goldstone" },
  },
  {
    "@name": "DSS25",
    "@azimuthAngle": null,
    "@elevationAngle": null,
    "@windSpeed": null,
    "@isMSPA": null,
    "@isArray": null,
    "@isDDOR": null,
    "@created": null,
    "@updated": null,
    target: [],
    downSignal: [],
    upSignal: [],
    metadata: { status: "OFFLINE", station: "Goldstone" },
  },
  {
    "@name": "DSS24",
    "@azimuthAngle": null,
    "@elevationAngle": null,
    "@windSpeed": null,
    "@isMSPA": null,
    "@isArray": null,
    "@isDDOR": null,
    "@created": null,
    "@updated": null,
    target: [],
    downSignal: [],
    upSignal: [],
    metadata: { status: "OFFLINE", station: "Goldstone" },
  },
  {
    "@name": "DSS14",
    "@azimuthAngle": null,
    "@elevationAngle": null,
    "@windSpeed": null,
    "@isMSPA": null,
    "@isArray": null,
    "@isDDOR": null,
    "@created": null,
    "@updated": null,
    target: [],
    downSignal: [],
    upSignal: [],
    metadata: { status: "OFFLINE", station: "Goldstone" },
  },
  {
    "@name": "DSS34",
    "@azimuthAngle": null,
    "@elevationAngle": null,
    "@windSpeed": null,
    "@isMSPA": null,
    "@isArray": null,
    "@isDDOR": null,
    "@created": null,
    "@updated": null,
    target: [],
    downSignal: [],
    upSignal: [],
    metadata: { status: "OFFLINE", station: "Canberra" },
  },
  {
    "@name": "DSS35",
    "@azimuthAngle": null,
    "@elevationAngle": null,
    "@windSpeed": null,
    "@isMSPA": null,
    "@isArray": null,
    "@isDDOR": null,
    "@created": null,
    "@updated": null,
    target: [],
    downSignal: [],
    upSignal: [],
    metadata: { status: "OFFLINE", station: "Canberra" },
  },
  {
    "@name": "DSS36",
    "@azimuthAngle": null,
    "@elevationAngle": null,
    "@windSpeed": null,
    "@isMSPA": null,
    "@isArray": null,
    "@isDDOR": null,
    "@created": null,
    "@updated": null,
    target: [],
    downSignal: [],
    upSignal: [],
    metadata: { status: "OFFLINE", station: "Canberra" },
  },
  {
    "@name": "DSS43",
    "@azimuthAngle": null,
    "@elevationAngle": null,
    "@windSpeed": null,
    "@isMSPA": null,
    "@isArray": null,
    "@isDDOR": null,
    "@created": null,
    "@updated": null,
    target: [],
    downSignal: [],
    upSignal: [],
    metadata: { status: "OFFLINE", station: "Canberra" },
  },
  {
    "@name": "DSS54",
    "@azimuthAngle": null,
    "@elevationAngle": null,
    "@windSpeed": null,
    "@isMSPA": null,
    "@isArray": null,
    "@isDDOR": null,
    "@created": null,
    "@updated": null,
    target: [],
    downSignal: [],
    upSignal: [],
    metadata: { status: "OFFLINE", station: "Madrid" },
  },
  {
    "@name": "DSS55",
    "@azimuthAngle": null,
    "@elevationAngle": null,
    "@windSpeed": null,
    "@isMSPA": null,
    "@isArray": null,
    "@isDDOR": null,
    "@created": null,
    "@updated": null,
    target: [],
    downSignal: [],
    upSignal: [],
    metadata: { status: "OFFLINE", station: "Madrid" },
  },
  {
    "@name": "DSS56",
    "@azimuthAngle": null,
    "@elevationAngle": null,
    "@windSpeed": null,
    "@isMSPA": null,
    "@isArray": null,
    "@isDDOR": null,
    "@created": null,
    "@updated": null,
    target: [],
    downSignal: [],
    upSignal: [],
    metadata: { status: "OFFLINE", station: "Madrid" },
  },
  {
    "@name": "DSS65",
    "@azimuthAngle": null,
    "@elevationAngle": null,
    "@windSpeed": null,
    "@isMSPA": null,
    "@isArray": null,
    "@isDDOR": null,
    "@created": null,
    "@updated": null,
    target: [],
    downSignal: [],
    upSignal: [],
    metadata: { status: "OFFLINE", station: "Madrid" },
  },
  {
    "@name": "DSS63",
    "@azimuthAngle": null,
    "@elevationAngle": null,
    "@windSpeed": null,
    "@isMSPA": null,
    "@isArray": null,
    "@isDDOR": null,
    "@created": null,
    "@updated": null,
    target: [],
    downSignal: [],
    upSignal: [],
    metadata: { status: "OFFLINE", station: "Madrid" },
  },
];

export const mockData = {
  station: [
    {
      "@name": "gdscc",
      "@friendlyName": "Goldstone",
      "@timeUTC": "1612036782118",
      "@timeZoneOffset": "-28800000",
    },
    {
      "@name": "mdscc",
      "@friendlyName": "Madrid",
      "@timeUTC": "1612036782119",
      "@timeZoneOffset": "3600000",
    },
    {
      "@name": "cdscc",
      "@friendlyName": "Canberra",
      "@timeUTC": "1612036782119",
      "@timeZoneOffset": "39600000",
    },
  ],
  dish: [
    {
      "@name": "DSS24",
      "@azimuthAngle": "191.36",
      "@elevationAngle": "48.01",
      "@windSpeed": "6.17",
      "@isMSPA": "false",
      "@isArray": "false",
      "@isDDOR": "false",
      "@created": "2021-01-30T18:55:07.084Z",
      "@updated": "2021-01-30T18:55:12.394Z",
      downSignal: {
        "@signalType": "data",
        "@signalTypeDebug": "IN LOCK OFF 1 MCD2",
        "@dataRate": "1249984.500000",
        "@frequency": "2281891163.241689",
        "@power": "-107.856010",
        "@spacecraft": "MMS3",
        "@spacecraftId": "110",
      },
      upSignal: {
        "@signalType": "data",
        "@signalTypeDebug": "ON 1 ",
        "@power": "0.236957",
        "@frequency": "2101",
        "@dataRate": "",
        "@spacecraft": "MMS3",
        "@spacecraftId": "110",
      },
      target: {
        "@name": "MMS3",
        "@id": "110",
        "@uplegRange": "96268.137",
        "@downlegRange": "96263.887",
        "@rtlt": "0.642215",
      },
    },
    {
      "@name": "DSS26",
      "@azimuthAngle": "",
      "@elevationAngle": "",
      "@windSpeed": "",
      "@isMSPA": "false",
      "@isArray": "false",
      "@isDDOR": "false",
      "@created": "2021-01-30T18:08:39.011Z",
      "@updated": "2021-01-30T18:08:39.011Z",
      downSignal: {
        "@signalType": "none",
        "@signalTypeDebug": "  -1 ",
        "@dataRate": "",
        "@frequency": "",
        "@power": "",
        "@spacecraft": "SPP",
        "@spacecraftId": "96",
      },
      upSignal: {
        "@signalType": "none",
        "@signalTypeDebug": "  ",
        "@power": "",
        "@frequency": "",
        "@dataRate": "",
        "@spacecraft": "SPP",
        "@spacecraftId": "96",
      },
      target: [
        {
          "@name": "MMS3",
          "@id": "110",
          "@uplegRange": "96268.137",
          "@downlegRange": "96263.887",
          "@rtlt": "0.642215",
        },
        {
          "@name": "SPP",
          "@id": "96",
          "@uplegRange": "2.08203695877E8",
          "@downlegRange": "2.08143562961E8",
          "@rtlt": "1388.602106",
        },
      ],
    },
  ],
  timestamp: "1612036782117",
};
