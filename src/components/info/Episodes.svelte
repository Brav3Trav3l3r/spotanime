<script>
	import { styles } from '../../index';
	export let info;
	import {currentId} from '../../store/store'
</script> 

<div class="episodes w-3/5 h-full space-y-4">
	<h1 class={styles.secTitle}>Episodes</h1>

	<div class="relative overflow-x-auto shadow-md ">
		<table class="w-full text-left text-gray-50 ">
			<tbody>
				{#each info.episodes.slice(0, 5) as ep}
					<tr class=" hover:bg-zinc-800 group border-separate rounded-lg cursor-pointer" on:click={()=> currentId.set(ep.id)}>
						<th scope="row" class="pl-6 py-2 font-medium text-gray-400 whitespace-nowrap">
							{ep.number}
						</th>
						<td class="px-2 py-2">
							<img src={ep.image} alt="poster" class="w-24 aspect-video rounded" />
						</td>
						<td class="px-2 py-2">
							{ep.title}
						</td>

						<td class="px-2 py-2 text-right">
							<iconify-icon
								icon="material-symbols:play-arrow-rounded"
								class="  text-3xl text-transparent group-hover:text-purple-400"
								aria-hidden="true"
							/>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>

	{#if info.episodes.length > 5}
		<h1
			class="text-xs ml-2 font-semibold text-zinc-400 hover:underline underline-offset-4 hover:text-zinc-300 cursor-pointer w-fit"
		>
			<span class="text-zinc-200 text-base hover:text-zinc-50">{info.episodes.length}</span> EPISODES
		</h1>
	{/if}
</div>
