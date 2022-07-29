<script>
//         Imports
// ========================
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

//   External Variables
// ========================
  export let numberOfPages = 0;
  export let currentPage = 10;
  export let pagesToShowMiddle = 9; // we show two before, two after, first and last if 0 => show all

  const pagesBeforeAfter = Math.floor(pagesToShowMiddle / 2); // number of links before and after our current page
  pagesToShowMiddle = 2 * pagesBeforeAfter + 1                // this ensures that the value is odd

//        Functions
// ========================
  const filterInvalidPages = (pages) => {
    return pages.filter((page) => page >= 0 && page < numberOfPages);
  };

  const handleNavLinkClick = (pageClicked) => {
    dispatch("navlicked", {
      pageId: pageClicked,
    });
  };

  const createMiddleRange = (currPage) => {
    let result = [];

    for (let i = 0; i < pagesToShowMiddle; i++) {
      result.push(currPage + (i - pagesBeforeAfter));
    }

    return result;
  };

//     Pages to show
// ========================
  let start = [0, 1];
  $: middle = createMiddleRange(currentPage);
  let end = [numberOfPages - 2, numberOfPages - 1];

  $: pagesToShowAll = start.concat(middle, end);
  $: pagesToShowValid = filterInvalidPages(pagesToShowAll);
  $: pagesToShow = [...new Set(pagesToShowValid)]; // pagesToShow.sort((a, b) => {return a-b});  Not needed - could be added just in case

  console.log(`Number of pages: ${numberOfPages}`)
  // console.log(`pagesToShow[-1]: ${pagesToShow[-1]}`)
  // console.log(`pagesToShow[-2]: ${pagesToShow[-2]}`)
  // console.log(`pagesToShow[-3]: ${pagesToShow[-3]}`)
  // console.log(`pagesToShow[-4]: ${pagesToShow[-4]}`)
</script>

{#if numberOfPages > 0}
  <div class="tableNavContainer">
    {#each pagesToShow as i (i)}
      {#if i == pagesToShow[2] && currentPage > pagesBeforeAfter + 3}
        <span class="tableNavLink">...</span>
      {:else if currentPage == pagesBeforeAfter + 3 && i == 3}
        <span
          class="tableNavLink"
          on:click={() => handleNavLinkClick(2)}
        >
          {3}
        </span>
      {/if}

        <!-- i => Gdzie wyświetlamy -->
        <!-- currentPage => Dla jakiej strony aktywnej wyświetlamy -->

      {#if i == numberOfPages - 2 && currentPage < numberOfPages - pagesBeforeAfter - 4}
        <span class="tableNavLink">...</span>
      {:else if currentPage == (numberOfPages - pagesBeforeAfter - 4) && i == pagesToShow[pagesToShow.length - 2] }
      <!-- {console.log(`Odpalam`)} -->
        <span
          class="tableNavLink"
          on:click={() => handleNavLinkClick(numberOfPages - 3)}
        >
          {numberOfPages - 2}
        </span>
      {/if}
        <span
          class="tableNavLink"
          class:current={currentPage == i}
          on:click={() => handleNavLinkClick(i)}
        >
          {i + 1}
        </span>
    {/each}
  </div>
{/if}



<style>
  /* ===== Table Navigation ===== */
  .tableNavContainer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;

    margin: 10px 0;
  }

  .tableNavLink {
    cursor: pointer;
    padding: 0 10px;
  }

  .current {
    color: yellow;
    font-weight: 800;
  }

  .tableNavLink:hover {
    color: red;
  }
</style>
