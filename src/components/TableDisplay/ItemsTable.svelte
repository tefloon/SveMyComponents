<!-- 
    Component for showing tabulated content.
    Pass a reference to dataset to display
 -->

<script>
//       Imports 
// =====================
    import ItemRow from "./ItemRow.svelte";
    import Button from "../shared/Button.svelte";
    import Tags from "../shared/Tags.svelte";
    
    import { capitalize } from "../../scripts/MyUtilityFunctions"
    import { pick } from "lodash-es";

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
    
    let currentPage = 0;
    $: currentGroup = items.slice( maxItems * currentPage, maxItems * (currentPage + 1));
    
//        Variables 
// ========================
    $: totalItems = items.length;
    $: totalMales = items.filter( i => i["płeć"] == "M").length;
    $: totalFemales = items.filter( (i) => { return i["płeć"] == "F"}).length;
    
//         Events 
// =====================

    // On clicked event we receive which row (item) has been clicked
    // So we can do update it as needed it
    const handleRowClick2 = (item) => {
        let tempItems = items;
        tempItems[item.id - 1]["płeć"] = "K";
        items = tempItems;
    }

    // Delete a row (item)
    const handleRowClick = (item) => {
        items = items.filter( i => i != item);
        // currentGroup = currentGroup.filter( i => i != item);

        console.log(totalMales);
    }

    const handleNavLinkClick = (page) =>{
        currentPage = page;
    }

    const handleButtonClick = () =>{
        items = [];
    }

    const handleFilterClicked = (tag) =>{
        let filtersCopy = filters2;
        filtersCopy[tag.id - 1].state =  filtersCopy[tag.id - 1].state == 'active' ? 'inactive' : 'active';

        filters2 = filtersCopy;       
    }
    const ob = { 
        'imie': "Antek",
        'naz': "Gawlikowski",
        "wiek": 35
    };

//        Filters 
// =====================
    let filters = [
        "Lokalizajca: Ursynów ",
        "Wiek: 8-10 lat",
        "Finanse: OK",
        "Przedmiot: programowanie"
    ];

    let filters2 = [
        { id: 1, type: "Lokalizacja", value: "Ursynów", state: "active" },
        { id: 2, type: "Finanse", value: "brak zaległości", state: "active" },
        { id: 3, type: "Wiek", value: "8-10 lat", state: "active" },
        { id: 4, type: "Przedmiot", value: "Programowanie", state: "active" },
    ]

</script>

<div class="container">
    <div class="tableTopNav">
        <Button primary = {false} on:click={ handleButtonClick }>Siemasz ziooom!</Button>
    </div>

    <!--  If the dataset IS empty  -->
    {#if items.length < 1 }
        <div class="emptyListContainer">
            <div class="emptyListText">Brak rekordów</div>
        </div>

    <!-- If the dataset IS NOT empty -->
    {:else}
        <div class="table">

            <!-- We first display the header with labels -->
            <div class="header">
                {#each labels as label}     
                    <div class="cell">{ capitalize(label) }</div>
                {/each}
            </div>

            <!-- Then the items -->
            {#each currentGroup as item (item[labels[0]]) }
                <div id={`row_${item.id}`} class="row" on:click={ () => handleRowClick(item) }>
                    <ItemRow {item} />
                </div>
            {/each}

            <!-- Lastly we display a footer just for estetic reasons -->
            <div class="tableFooter">
                {#each Array(6) as _, i (i)}
                    <div id={ `footerRow_${i}` } class="footerItem"></div>
                {/each}
            </div>
        </div>

        <!-- If there is more than one page of records, we display page navigation -->
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
    {#if filters.length > 0 }
        <Tags callback={ handleFilterClicked } tags={ filters2 }/>
    {/if}
    { totalMales   }
    { totalFemales }
    { totalItems }
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

/* ===== Table Top Nav ===== */
    .tableTopNav{
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

/* ===== No Content ====== */
    .emptyListContainer{
        display: flex;
        width: 100%;
        min-height: 150px;
        background-color: var(--background-accent);
        justify-content: center;
        align-items: center;
        border-radius: var(--table-border-radius);
        margin: 10px 0;
    }

    .emptyListText{
        color: var(--text-main-disabled);
        transform: rotate(5deg);
        font-size: 26px;
    }
        

</style>
