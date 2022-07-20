<script>
    import PersonRow from "./PersonRow.svelte";
    import people from "../../stores/PeopleStore";

    export let students = [];

    people.subscribe((data) => {
        students = data;
    });

    

    console.log(Object.keys(students[0]));

</script>

<div class="container">
    <div class="table">
        <div class="header">
            <div class="cell">Imię</div>
            <div class="cell">Nazwisko</div>
            <div class="cell">Płeć</div>
            <div class="cell">Adres</div>
            <div class="cell">Miasto</div>
        </div>
        {#each students as student}
            <div class="row">
                <PersonRow {student} />
            </div>
        {/each}
    </div>
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
</style>
