<script>
	import Card from "./components/Card.svelte"
	import Button from "./components/shared/Button.svelte"
	import PeopleTable from "./components/TableDisplay/PeopleTable.svelte";

	const handleClick = () => {
		console.log("Clicked");
	}
</script>

<main>
	<!-- <Card /> -->
	<Button primary = {false} on:click={ handleClick }>Siemasz ziooom!</Button>
	<PeopleTable />
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