<script>
	export let info;
	let characters;
	$: characters = info.characters;
	import {styles} from '../../index'
</script>

<div class="related mx-2 ">
	<h1 class="{styles.secTitle}">Characters</h1>
	<div class="cards mt-8 flex flex-nowrap overflow-x-auto gap-4 scrollbar-hide">

			{#each characters as person}
				<div class="card w-28 shrink-0 text-center space-y-4">
					<div class="image rounded-full truncate aspect-square  transtion duration-200 hover:brightness-90">
						<img src={person.image} alt="" class="hover:scale-110  transtion duration-200">
					</div>
					<div class="name"><h1 class="text-sm text-zinc-300"> {person.name.userPreferred}</h1></div>
				</div>
				
			{/each}

	</div>
</div>