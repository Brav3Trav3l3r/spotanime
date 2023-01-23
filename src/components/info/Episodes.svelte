<script>
	import { styles } from '../../index';
	export let info;
	import { currentAnime, currentEp } from '../../store/store';

	let topep;
	$: topep = info.episodes.slice(0, 5);
</script>

<div class="episodes w-3/5 h-full space-y-4">
	<h1 class={styles.secTitle}>Episodes</h1>
	<div class="w-full flex flex-col space-y-2 cursor-pointer">
		{#each topep as ep}
			<div
				class="flex h-16 group hover:bg-zinc-800 rounded"
				on:keydown
				on:click={() => currentEp.set(ep)}
				on:click={() => currentAnime.set(info)}
			>
				<div class="index w-[10%] flex justify-center items-center">
					<h1 class="text-sm text-zinc-400 fron-mediun">{ep.number}</h1>
				</div>
				<div class="index flex items-center flex-1 space-x-3 ">
					<div class="image w-24 aspect-video truncate  shrink-0">
						<img src={ep.image} alt="" class="h-full w-full object-cover " />
					</div>
					<div class="title ">
						<h1 class="line-clamp-2">{ep.title}</h1>
					</div>
				</div>
				<div class="index w-[10%] flex items-center justify-center">
					<iconify-icon
						icon="material-symbols:play-arrow-rounded"
						class="  text-3xl text-transparent group-hover:text-purple-400"
						aria-hidden="true"
					/>
				</div>
			</div>
		{/each}
	</div>

	{#if info.episodes.length > 5}
		<h1
			class="epcount text-xs ml-2 font-semibold text-zinc-400 hover:underline underline-offset-4 hover:text-zinc-300 cursor-pointer w-fit"
		>
			<span class="text-zinc-200 text-base hover:text-zinc-50">{info.episodes.length}</span> EPISODES
		</h1>
	{/if}
</div>

<style>
	.epcount:hover {
		text-decoration: underline;
		text-decoration-color: rgb(154, 69, 232);
	}
</style>
