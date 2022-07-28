<!-- 
    Component for showing tabulated content.
    Pass a reference to dataset to display
 -->
<script>
//       Imports
// =====================
    import Button from "../shared/Button.svelte";
    import Tags from "../shared/Tags.svelte";
    import PeopleDetails from "../DetailsDisplay/PeopleDetails.svelte";
    import PeopleRowGrid from "./PeopleRowGrid.svelte";

    import {
        capitalize,
        cssVariables,
        changeCssVariable,
    } from "../../scripts/MyUtilityFunctions";
    import { pick } from "lodash-es";

//         Props
// =====================
    export let dataset; // Dataset to display - writable store
    export let maxItems = 50; // Maximum number of items on a page
    export let displayOptions = {
        // id: "Id",
        name: "Imię",
        // surname: "Nazwisko",
        // gender: "Płeć",
        address: "Adres",
        // city: "Miasto"
    };

//     Hooking Data
// =====================
    let items = [];

    dataset.subscribe((data) => {
        // Subscribe to the store to receive updates
        items = data; // whenever the data changes
    });

//    Dividing into pages
// ========================
    $: numberOfPages = Math.ceil(items.length / maxItems);
    let currentPage = 0;

    $: currentGroup = items.slice(
        maxItems * currentPage,
        maxItems * (currentPage + 1)
        );
        
//   Dividing into columns
// ========================
    const numberOfColumns = Object.keys(displayOptions).length + 1;
    changeCssVariable("num-of-col", numberOfColumns);
    changeCssVariable("num-of-eq-col", numberOfColumns - 1);

//        Variables
// ========================
    $: totalItems = items.length;
    $: totalMales = items.filter((i) => i["gender"] == "M").length;
    $: totalFemales = items.filter((i) => {
        return i["gender"] == "F";
    }).length;

//         Events
// =====================

    // On clicked event we receive which row (item) has been clicked
    // So we can do update it as needed it
    const handleRowClick2 = (person) => {
        let tempItems = items;
        tempItems[person.id - 1]["gender"] = "F";
        items = tempItems;
    };

    // Delete a row (item)
    const handleRowClick = (person) => {
        console.log(person);
        // items = items.filter( i => i != person);
        selected = person;
        showDetails = true;
    };

    const handleNavLinkClick = (page) => {
        currentPage = page;
    };

    const handleButtonClick = () => {
        // items = [];
        kasia = "red";
    };

    const handleFilterClicked = (tag) => {
        let filtersCopy = filters2;
        filtersCopy[tag.id - 1].state =
            filtersCopy[tag.id - 1].state == "active" ? "inactive" : "active";

        filters2 = filtersCopy;
    };

//        Filters
// =====================
    let filters = [
        "Lokalizajca: Ursynów ",
        "Wiek: 8-10 lat",
        "Finanse: OK",
        "Przedmiot: programowanie",
    ];

    let filters2 = [
        { id: 1, type: "Lokalizacja", value: "Ursynów", state: "active" },
        { id: 2, type: "Finanse", value: "brak zaległości", state: "active" },
        { id: 3, type: "Wiek", value: "8-10 lat", state: "active" },
        { id: 4, type: "Przedmiot", value: "Programowanie", state: "active" },
    ];

//        Details
// =====================
    let showDetails = false;
    let selected = 0;

    //   Zmiana CSS
    // ==============
    // 1. Tworzymy JS-ową zmienną o jakiejś nazwie                       np: let wielkosc = "20px";
    // 2. Tworzymy CSS-ową zmienną o tej samej nazwie                    np: :root   { --wielkosc: 20px;      }
    // 3. Używamy tej zmiennej, gdzie chcemy w CSS-ie                    np: .mojDiv { width: var(--wielkosc) } 
    // 3. Gdzie chcemy w kodzie zmieniamy wartość JS-owej zmiennej       np: const zmianaWlk = () => { wielkosc = `${wielkosc} + 10px` }
    // 4. Na obiekcie, który ma korzystać z tej zmiennej używamy         np: <div class="mojDiv" use:cssVariables={{ wielkosc }}

    let left = 0;
    let top = 0;
    let kasia = "#ff0";

    const handleMouseMove = (event) => {
        left = `${event.clientX + 20}px`;
        top  = `${event.clientY + 20}px`;
    };
</script>

{#if showDetails == true}
    <div class="modal" use:cssVariables={{ left, top }}>
        <PeopleDetails person={selected} />
    </div>
{/if}

<div class="container" on:mousemove={handleMouseMove}>
    <div class="tableTopNav">
        <Button primary={false} on:click={handleButtonClick}>
            Siemasz ziooom!
        </Button>
    </div>

    <!--  If the dataset _IS_ empty  -->
    {#if items.length < 1}
        <div class="emptyListContainer">
            <div class="emptyListText">Brak rekordów</div>
        </div>

        <!-- If the dataset _IS NOT_ empty -->
    {:else}
        <div class="table">
            <!-- We first display the header with labels -->
            <div id={`headerRow`} class="row header">
                <div class="cell header">&nbsp;L.p.</div>
                {#each Object.values(displayOptions) as label}
                    <div class="cell header">{capitalize(label)}</div>
                {/each}
            </div>

            <!-- Then the items -->
            {#each currentGroup as person, i (person.id)}
                <div
                    id={`row_${person.id}`}
                    class="row"
                    on:click={() => handleRowClick(person)}
                >
                    <PeopleRowGrid
                        {person}
                        i={i + currentPage * maxItems}
                        {displayOptions}
                        on:click={() => handleRowClick(person)}
                    />
                </div>
            {/each}

            <!-- Lastly we display a footer just for estetic reasons -->
            <div class="tableFooter">
                {#each Array(numberOfColumns) as _, i (i)}
                    <div id={`footerRow_${i}`} class="footerItem" />
                {/each}
            </div>
        </div>

        <!-- If there is more than one page of records, we display page navigation -->
        {#if numberOfPages != 0}
            <div class="tableNavContainer">
                <div class="tableNav">
                    {#each Array(numberOfPages) as _, i (i)}
                        <span
                            class="tableNavLink"
                            on:click={() => handleNavLinkClick(i)}>{i + 1}</span
                        >
                    {/each}
                </div>
            </div>
        {/if}
    {/if}
    {#if filters.length > 0}
        <Tags callback={handleFilterClicked} tags={filters2} />
    {/if}
    <div class="summary" use:cssVariables={{ kasia }}>
        {totalMales}
        {totalFemales}
        {totalItems}
    </div>
</div>

<style>
    :root {
        --kasia: #ff0;
        --left: 0;
        --top: 0;
        --num-of-col: 6;
        --num-of-eq-col: calc(--num-of-col - 1);
    }

    .summary {
        color: var(--kasia);
    }

/* ===== General ======= */
    .container {
        color: #ccc;
        display: flex;
        flex-direction: column;
        /* width: 960px; */
    }

/* ===== Table Body ====== */
    .table {
        flex-shrink: 1;
        display: grid;
        grid-template-columns: 0.15fr repeat(var(--num-of-eq-col), 1fr);
        /* grid-template-columns: auto minmax(0, 1fr); */
        /* align-items: center; */
        /* gap: 5px; */
        /* width: 100%; */
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    }

    .row {
        display: grid;
        grid-column: span var(--num-of-col);
        cursor: pointer;
        grid-template-columns: subgrid;
    }

    .row:nth-of-type(odd) {
        background-color: var(--table-row-odd-bg);
    }

    .row:hover {
        background-color: var(--table-row-hover-bg);
    }

/* ===== Table Header ====== */
    .header {
        font-weight: 900;
        color: white;
        text-align: center;
    }

    .header .cell {
        text-align: center;
        color: var(--table-header-text);
        background-color: var(--table-header-bg);
    }

    .header .cell:first-child {
        border-top-left-radius: var(--table-border-radius);
    }

    .header .cell:last-child {
        border-top-right-radius: var(--table-border-radius);
    }

    .cell {
        padding: 6px 12px;
        /* display: table-cell; */
    }

/* ===== Table Footer ====== */
    .tableFooter {
        display: grid;
        grid-column: span 6;
        /* cursor: pointer; */
        grid-template-columns: subgrid;
    }

    .footerItem {
        /* display: table-cell; */
        height: 10px;
        background-color: var(--table-header-bg);
    }

    .footerItem:last-child {
        border-bottom-right-radius: var(--table-border-radius);
    }

    .footerItem:first-child {
        border-bottom-left-radius: var(--table-border-radius);
    }

/* ===== Table Navigation ===== */
    .tableNavContainer {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin: 10px 0;
    }
    
    .tableNav {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }

    .tableNavLink {
        cursor: pointer;
        padding: 0 10px;
    }

    .tableNavLink:hover {
        color: red;
    }

/* ===== Table Top Nav ===== */
    .tableTopNav {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

/* ===== No Content ====== */
    .emptyListContainer {
        display: flex;
        width: 100%;
        min-height: 150px;
        background-color: var(--background-accent);
        justify-content: center;
        align-items: center;
        border-radius: var(--table-border-radius);
        margin: 10px 0;
    }

    .emptyListText {
        color: var(--text-main-disabled);
        transform: rotate(5deg);
        font-size: 26px;
    }

/* ===== Details ====== */
    .modal {
        position: absolute;
        top: var(--top);
        left: var(--left);
        z-index: 20;
    }
</style>
