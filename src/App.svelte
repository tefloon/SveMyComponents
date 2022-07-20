<script>
	import Card from "./components/Card.svelte"
	import Button from "./components/shared/Button.svelte"
	import ItemsTable from "./components/TableDisplay/ItemsTable.svelte";

	import people from "./stores/PeopleStore";

	const handleClick = () => {
		console.log("Clicked");
	}


</script>

<main>
	<!-- <Card /> -->
	<Button primary = {false} on:click={ handleClick }>Siemasz ziooom!</Button>
	<ItemsTable dataset={people} />
</main>

<style>
	main{
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 100%;
		height: 100%;
		background-color: #2E3440;
	}
</style>