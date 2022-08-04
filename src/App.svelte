<script>
	import PeopleTable from "./components/TableDisplay/PeopleTable.svelte";

	import people from "./stores/PeopleStore";
	import { pick } from "lodash-es";

	const handleClick = () => {
		console.log("Clicked");
	}

	const options = {
		dataset: people,
		maxItems: 15,
		displayOptions: {
			// hash: "Id",
			name: "Imię",
			surname: "Nazwisko",
			// gender: "Płeć",
			address: "Adres",
			city: "Miasto"
		}
	}
</script>

<main>
		<PeopleTable {...options} /> 
</main>


<style>
	main{
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-direction: column;
		width: 100%;
		height: 100%;
		
		background-color: var(--background-main);
	}

</style>