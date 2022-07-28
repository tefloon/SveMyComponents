<script>
	import Button from "./components/shared/Button.svelte"
	import Tag from "./components/shared/Tag.svelte";
	import ItemsTable from "./components/TableDisplay/ItemsTable.svelte";
	import PeopleTable from "./components/TableDisplay/PeopleTable.svelte";
	import PeopleTableBox from "./components/TableDisplay/PeopleTableGrid.svelte";
	import PeopleDetails from "./components/DetailsDisplay/PeopleDetails.svelte";

	import people from "./stores/PeopleStore";
	import { pick } from "lodash-es";

	const handleClick = () => {
		console.log("Clicked");
	}

	const options = {
		dataset: people,
		maxItems: 15,
		displayOptions: {
			// id: "Id",
			name: "Imię",
			surname: "Nazwisko",
			// gender: "Płeć",
			address: "Adres",
			city: "Miasto"
		}
	}
</script>

<main>
	<section>
		<!-- <Card /> -->
		<PeopleTableBox {...options} /> 
		<!-- <PeopleDetails dataset={ people }/> -->
		<!-- <Button primary = {false} on:click={ handleClick }>Siemasz ziooom!</Button> -->
	</section>
</main>


<style>
	main{
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 100%;
		height: 100%;
		min-height: 1200px;
		
		background-color: var(--background-main);
	}

</style>