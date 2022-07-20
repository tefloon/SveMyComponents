<!-- 
    Component for showing tabulated content.
    Pass a reference to dataset to display
 -->

<script>
    import ItemRow from "./ItemRow.svelte";
    import people from "../../stores/PeopleStore";

    import { capitalize } from "../../scripts/MyUtilityFunctions"

    export let items = [];
    export let dataset;

    dataset.subscribe((data) => {
        items = data;
    });

    let labels;

    if (items.length > 0) {
        labels = Object.keys(items[0]);     
    }

    const handleRowClick = (e) => {
        console.log("Kliknięto w rząd ", e)
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
            {#each items as item (item[labels[0]]) }
                <div id={item.id} class="row" on:click={ handleRowClick }>
                    <ItemRow {item} />
                </div>
            {/each}
        </div>
    {/if}
</div>

<style>
    .container {
        width: 960px;
    }

    .table {
        display: table;
        width: 100%;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    }

    .row {
        display: table-row;
        background: #f6f6f6;
    }


    .row:nth-of-type(odd) {
        background-color: #e9e9e9;
    }

    .row:hover{
        background-color: #a9a9a9;
    }

    .header{
        display: table-row;
        font-weight: 900;
        color: white;
    }
    
    .header .cell {
        text-align: center;
        background-color: #11AD11;
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
