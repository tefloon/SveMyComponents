<script>
    export let item;

    let genderText = item.gender == "M" ? "Mężczyzna" : "Kobieta"
    const labels = Object.keys(item);

</script>

<!-- TODO: Add an edit icon next to each item -->

{#if item}
    {#each labels as label }
        <div class="item"><div class="itemText">{ item[label] }</div> </div>
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
