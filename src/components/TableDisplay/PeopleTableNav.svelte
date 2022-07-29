<script>
//     Display Settings
// =======================
   let firstLast = 4;
   let inTheMiddle = 9;
   let collapse = true;

   const pagesBeforeAfter = Math.floor(inTheMiddle / 2); // number of links before and after our current page
   inTheMiddle = 2 * pagesBeforeAfter + 1; // this ensures that the value is odd

//         Imports
// ========================
   import { createEventDispatcher } from "svelte";
   const dispatch = createEventDispatcher();

//   External Variables
// ========================
   export let numberOfPages = 0;
   export let currentPage = 10;

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

      for (let i = 0; i < inTheMiddle; i++) {
         result.push(currPage + (i - pagesBeforeAfter));
      }

      return result;
   };

//     Pages to show
// ========================
   let start = Array.from(Array(firstLast).keys());    // [0, 1, 2, ..., n]
   
   $: middle = createMiddleRange(currentPage);
   let end = (Array.from(Array(firstLast).keys())).map( (i) => { return numberOfPages - i - 1 } ).reverse();   // for 34 pages [ 33, 32, 31, ... 34-n]
   
   $: pagesToShowAll = start.concat(middle, end);
   $: pagesToShowValid = filterInvalidPages(pagesToShowAll);
   $: pagesToShow = [...new Set(pagesToShowValid)]; 
</script>

{#if numberOfPages > 0}
   <div class="tableNavContainer">
      
      <!-- if we DON'T COLLAPSE, show all -->
      {#if !collapse}
         {#each Array(numberOfPages) as _, i (i)}
            <span class="tableNavLink" class:current={ currentPage == i } on:click={ () => handleNavLinkClick(i) } >
               {i + 1}
            </span>
         {/each}

      <!-- if DO COLLAPSE show parts -->
      {:else}

         <!-- Go through all the pages to show -->
         {#each pagesToShow as i (i)}

            <!-- If we're NOT CLOSE TO THE BEGINNING, show '...'     -->
            {#if currentPage > (pagesBeforeAfter + firstLast + 1) && i == pagesToShow[firstLast] }
               <span class="tableNavLink">...</span>
            
            <!-- If we're a the breaking point, switch '...' to the appropriate number -->
            {:else if currentPage == pagesBeforeAfter + firstLast + 1 && i == firstLast + 1 }
               <span class="tableNavLink" on:click={ () => handleNavLinkClick(firstLast) } >
                  { firstLast + 1 }
               </span>
            {/if}
            
            <!-- If we're NOT CLOSE TO THE END, show '...' -->
            {#if i == numberOfPages - firstLast  && currentPage <  numberOfPages - pagesBeforeAfter - firstLast - 2}
               <span class="tableNavLink">...</span>

            <!-- If we're a the breaking point, switch '...' to the appropriate number -->
            {:else if currentPage == numberOfPages - pagesBeforeAfter - firstLast - 2 && i == pagesToShow[pagesToShow.length - firstLast]}
               <span class="tableNavLink" on:click={ () => handleNavLinkClick(numberOfPages - firstLast - 1) } >
                  {numberOfPages - firstLast }
               </span>
            {/if}

            <!-- Show all the page numbers -->
            <span class="tableNavLink" class:current={ currentPage == i } on:click={ () => handleNavLinkClick(i) } >
               {i + 1}
            </span>
         {/each} <!-- end of EVERY PAGE loop -->
      {/if}  <!-- end of DON't COLLAPSE if -->
   </div>
{/if} <!-- end of PAGES EXIST if -->

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
