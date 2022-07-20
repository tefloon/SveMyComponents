<script>
    export let student;

    let genderText = student.gender == "M" ? "Mężczyzna" : "Kobieta"
</script>

{#if student} 
        <div class="item">{ student.name }</div>
        <div class="item">{ student.surname }</div>
        <div class="item">{ genderText }</div>
        <div class="item">{ student.address }</div>
        <div class="item">{ student.city }</div>
{/if}

<style>
    .item{
        padding: 6px 12px;
        display: table-cell;
    }
</style>
