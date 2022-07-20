<script>
	import Button from "./components/shared/Button.svelte"
	import ItemsTable from "./components/TableDisplay/ItemsTable.svelte";

	import people from "./stores/PeopleStore";

	const handleClick = () => {
		console.log("Clicked");
	}

	const options = {
		dataset: people,
		maxItems: 25
	}

</script>

<main>
	<!-- <Card /> -->
	<ItemsTable {...options} />
	<Button primary = {false} on:click={ handleClick }>Siemasz ziooom!</Button>
</main>

<style>
	main{
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 100%;
		/* min-height: 600px; */
		height: 100%;
		
		background-color: var(--background-main);
	}

</style>