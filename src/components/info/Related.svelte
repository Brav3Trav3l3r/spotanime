<script>
    import Card from "../Home/Card.svelte";
    import {styles} from '../../index'
	export let info;
	let relations;
	$: relations = info.relations;
</script>

<div class="related mx-2">
	<h1 class="{styles.secTitle}">Related</h1>
	<div class="cards mt-4 flex flex-nowrap overflow-x-auto gap-4 scrollbar-hide">

		{#each relations as anime}
			<div class="card w-32 md:w-36 lg:w-44 shrink-0">
				<Card {anime} />
			</div>
		{/each}

</div>
</div>