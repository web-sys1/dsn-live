<script lang="ts">
  import { Loading, InlineLoading } from "carbon-components-svelte";
  import { fly } from "svelte/transition";

  import Summary from "../Summary.svelte";
  import DishCard from "../DishCard.svelte";
  import { processDSNResponse } from "../../util/utils";
  import type { DSNData } from "../../data/Models";
  import { onMount } from "svelte";
  import { generateMockData } from "../../data/mockData";
  const dsnURL: string = "https://eyes.nasa.gov/dsn/data/dsn.xml";
  let latestRequest: string = "";
  let requestIntervalUnits = 15;
  let nextRequest: number = 0;

  let DSNData: DSNData = null;
  let error = null;

  // Start making requests based on interval
  onMount(() => {
    let requestInterval = setInterval(async () => {
      if (nextRequest <= 0) {
        nextRequest = requestIntervalUnits;
        DSNData = await getDSNData();
		console.log('Undefined? ', DSNData === undefined)
      } else {
        nextRequest -= 1;
        // console.log(genRds(1000, 20000, 100))
      }
    }, 1000);

    // Clear interval
    return () => {
      clearInterval(requestInterval);
    };
  });

  async function getDSNData(): Promise<DSNData> {
    latestRequest = new Date().toLocaleString();
    try {
      // Request DSN Data
      const res = await fetch(dsnURL);

      // Async process the XML response
      return await processDSNResponse(res);
    } catch (err) {
      console.error("Error fetching data.");
    }
  }
  
  function generateRandom(min, max, step) {
    const randomNum = min + Math.random() * (max - min);
    return Math.round(randomNum / step) * step;
    }

  function genRds(MIN_RANDOM, MAX_RANDOM, RANDOM_STEP) {
     return generateRandom(MIN_RANDOM, MAX_RANDOM, RANDOM_STEP);
  }
  
 //  const getNewData = () => {
 //    DSNData = generateMockData();
 //  };
   
   const reloadDSN = () => {
     return requestInterval()
   }
</script>


{#if DSNData}
  <!-- <button
    style="position:fixed;right:0; top:200px;"
    on:click={() => getNewData()}>update</button
  > -->
  <Summary {DSNData} {latestRequest} {nextRequest} />
  <div class="dish-grid">
    {#each DSNData["dishes"] as dish (dish["@name"])}
      <DishCard {dish} updating={nextRequest <= 0} />
    {/each}
  </div>
{:else if DSNData === null}
  <Loading />
{/if}

{#if DSNData === undefined}
  <div class='error-message'>Couldn't fetch results. Check your internet connection. Please wait a moment for the data to retrieve after reconnecting.
              {#if nextRequest}
			  <p class="abs-exception right ewl reload"
                in:fly={{ x: -10, duration: 250 }}
                out:fly={{ x: 10, duration: 250 }}
              >
                Reconnecting: {nextRequest + "s"}
              </p> 
			  {:else}
              <span
                class="abs right"
                in:fly={{ x: -10, duration: 250 }}
                out:fly={{ x: 10, duration: 250 }}
              >
                <InlineLoading description="Reconnecting..." />
              </span>
			  {/if}
  </div>
{/if}

<style>
  .dish-grid {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    margin: 20px;
  }
  
  .error-message {
    margin: 0 auto;
    color: lightcoral;
    padding: 14px;
    width: 100%;
    max-width: 59%;
    background-color: var(--black-alpha);
    border-radius: 2px;
    box-shadow: 0px 1px 2px 3px #dddddd29;
    text-align: center;
    font: message-box;
    position: relative;
    top: 11px;
}

   p.abs-exception.right.ewl.reload {
    margin: -4px auto;
    padding: 10px;
    position: relative;
    top: 8px;
}

</style>
