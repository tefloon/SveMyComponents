<!-- 
    Component for showing tabulated content.
    Pass a reference to dataset to display
 -->

<script>
//       Imports 
// =====================
    import ItemRow from "./ItemRow.svelte";
    import people from "../../stores/PeopleStore";
    import { capitalize, createGroups } from "../../scripts/MyUtilityFunctions"

//         Props 
// =====================
    export let dataset;             // Dataset to display - writable store
    export let items = [];          // Array holding items to list
    export let maxItems = 50;       // Maximum number of items on a page
    
//     Hooking Data 
// =====================
    dataset.subscribe((data) => {   // Subscribe to the store to receive updates
        items = data;               // whenever the data changes
    });
    
    let labels = [];                // List of labels of the objects in the dataset
    if (items.length > 0) {                 // If list of items is not empty...
        labels = Object.keys(items[0]);     // ...read labels from the first item
    }

//    Dividing into pages 
// ========================
    const numberOfPages = Math.ceil(items.length / maxItems);
    let itemGroups = createGroups(items, numberOfPages);

    let currentPage = 0;
    let currentGroup = itemGroups[currentPage]


//         Events 
// =====================

    // On clicked event we receive which row (item) has been clicked
    // So we can do update it as needed it
    const handleRowClick = (item) => {
        let tempItems = items;
        tempItems[item.id - 1]["płeć"] = "K"

        // items = tempItems;
        currentGroup = itemGroups[currentPage];
    }

    const handleNavLinkClick = (page) =>{
        currentPage = page;
        currentGroup = itemGroups[currentPage];
    }

</script>

<div class="container">
    {#if items.length < 1 }
        <div class="emptyListContainer">
            <div class="emptyListText">Brak rekordów</div>
        </div>
    {:else}
        <div class="table">
            <div class="header">
                {#each labels as label}
                    <div class="cell">{ capitalize(label) }</div>
                {/each}
            </div>
            {#each currentGroup as item (item[labels[0]]) }
                <div id={`row_${item.id}`} class="row" on:click={ () => handleRowClick(item) }>
                    <ItemRow {item} />
                </div>
            {/each}
            <div class="tableFooter">
                {#each Array(6) as _, i (i)}
                    <div id={ `footerRow_${i}` } class="footerItem"></div>
                {/each}
            </div>
        </div>
        {#if numberOfPages != 0 }
            <div class="tableNavContainer">
                <div class="tableNav">
                    {#each Array(numberOfPages) as _, i (i)}
                        <span class="tableNavLink" on:click={() => handleNavLinkClick(i)}>{ i + 1 }</span>
                    {/each}
                </div>
            </div>
        {/if}
    {/if}
</div>

<style>
/* ===== General ======= */
    .container {
        width: 960px;
    }

/* ===== Table Body ====== */
    .table {
         display: table;
        width: 100%;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    }

    .row {
        display: table-row;
        background: var(--table-row-even-bg);
        cursor: pointer;
    }

    .row:nth-of-type(odd) {
        background-color: var(--table-row-odd-bg);
    }

    .row:hover{
        background-color: var(--table-row-hover-bg);
    }

/* ===== Table Header ====== */
    .header{
        display: table-row;
        font-weight: 900;
        color: white;
    }
    
    .header .cell {
        text-align: center;
        color: var(--table-header-text);
        background-color: var(--table-header-bg);
    }
    
    .header .cell:first-child{
        border-top-left-radius: var(--table-border-radius);
    }
    
    .header .cell:last-child{
        border-top-right-radius: var(--table-border-radius);
    }
    
    .cell {
        padding: 6px 12px;
        display: table-cell;
    }

/* ===== Table Footer ====== */
    .tableFooter{
        width: 100%;
        display: table-row;
    }
    
    .footerItem{
        display: table-cell;
        height: 10px;
        background-color: var(--table-header-bg);
    }

    .footerItem:last-child{
        border-bottom-right-radius: var(--table-border-radius);
    }

    .footerItem:first-child{
        border-bottom-left-radius: var(--table-border-radius);
    }

/* ===== Table Navigation ===== */
    .tableNavContainer{
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin: 10px 0;
    }

    .tableNav{
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .tableNavLink{
        cursor: pointer;
        padding: 0 10px;
    }

    .tableNavLink:hover{
        color: red;
    }

/* ===== No Content ====== */
    .emptyListContainer{
        display: flex;
        width: 100%;
        min-height: 150px;
        background-color: #e9e9e9;
        justify-content: center;
        align-items: center;
        border-radius: var(--table-border-radius);
    }

    .emptyListText{
        color: rgb(94, 94, 94);
        transform: rotate(10deg);
        font-size: 26px;
    }
        

</style>
