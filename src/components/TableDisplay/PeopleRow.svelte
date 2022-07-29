<script>
    import { pick } from "lodash-es";

    export let person;
    export let i;
    export let displayOptions;

    const dataToShow = Object.values(pick(person, Object.keys(displayOptions)));

</script>

<!-- TODO: Add an edit icon next to each item -->
{#if person}
    <div class="item">
        <div class="itemText">
            { i + 1 }
        </div>
    </div>
    {#each dataToShow as dataItem }
        <div class="item">
            <div class="itemText">
                { dataItem }
            </div>
        </div>
    {/each}
{/if}

<style>
    .item{
        padding: 6px 12px;
        display: table-cell;
        text-align: center;
        justify-content: center;
    }
</style>
