<script>
	import Card from "./Card.svelte";
	import {styles} from '../../index'
	export let animes;
	export let title;
</script>



<div class="cardgroup text-white">
	<div class="title mb-8 pl-2">
		<h1 class='{`${styles.secTitle}`} '>{title}</h1>
	</div>
	<div class="card-group grid grid-cols-2 min-[550px]:grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-5 gap-y-8">
		{#each animes as anime}
			<Card {anime}/>
		{/each}
	</div>
</div>

<!-- <style>
@font-face {
    font-family: 'Albra';
    src: url('.fonts/Albra-Regular') format('truetype');
  }

  .title{
	font-family: Albra;
  }
</style> -->
