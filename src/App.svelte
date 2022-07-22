<script>
	import Button from "./components/shared/Button.svelte"
	import Tag from "./components/shared/Tag.svelte";
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
	<section>
		<!-- <Card /> -->
		<ItemsTable {...options} />
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