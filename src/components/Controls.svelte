<script>
	import { currentEp, currentAnime } from '../store/store';
</script>

<div class="controls fixed inset-x-0 h-20 bottom-0 bg-[#181818] border-t border-zinc-700 ">
	<div class="items flex w-full h-full items-center ">
		<div class="title w-1/4 h-full px-4 items-center flex space-x-10">
			<div class="group flex w-4/5 flex-col justify-center h-full space-y-2">
				<h1 class=" font-mediun text-sm line-clamp-1">
					{$currentEp != null ? $currentEp.title : '--/--'}
				</h1>
				<h2
					class="currentanime hover:underline hover:text-white underline-offset-2 w-fit text-zinc-400 text-xs line-clamp-1 cursor-pointer "
				>
					{$currentAnime != null ? $currentAnime.title.english : '--/--'}
				</h2>
			</div>
			<div class="icons w-1/5 flex space-x-6">
				<div
					class="fullsecreen   text-zinc-400 aspect-square text-2xl flex items-center justify-center rounded-full  truncate overflow-hidden"
				>
					<iconify-icon icon="ph:corners-out" class="cursor-pointer  hover:text-white" />
				</div>
				<div
					class="fullsecreen   text-zinc-400 aspect-square text-2xl flex items-center justify-center rounded-full  truncate overflow-hidden"
				>
					<iconify-icon icon="ph:microphone" class="cursor-pointer  hover:text-white" />
				</div>
			</div>
		</div>

		<div class="controls w-1/2  h-full flex  px-4  justify-center space-x-4 text-4xl items-center ">
			<div
				class="prev text-2xl cursor-pointer active:text-zinc-400 text-zinc-400 hover:text-zinc-300 rounded-full aspect-square overflow-hidden "
			>
				<iconify-icon icon="ph:skip-back-fill" />
			</div>
			<div
				class="play cursor-pointer rounded-full active:scale-90 transition active:text-zinc-100 aspect-square overflow-hidden text-5xl"
			>
				<iconify-icon icon="ph:play-circle-fill" />
			</div>
			<div
				class="next text-2xl cursor-pointer active:text-zinc-400 text-zinc-400  hover:text-zinc-300 rounded-ful aspect-square overflow-hidden"
			>
				<iconify-icon icon="ph:skip-forward-fill" />
			</div>
		</div>

		<div
			class="interact w-1/4  h-full flex px-4 text-2xl space-x-6  items-center  text-zinc-400 justify-end"
		>
			<div
				class="fullsecreen hover:text-white aspect-square flex rounded-full  truncate overflow-hidden cursor-pointer"
			>
				<iconify-icon icon="ph:gear-six" />
			</div>
			<div
				class="camera  hover:text-white aspect-square rounded-full flex truncate overflow-hidden cursor-pointer"
			>
				<iconify-icon icon="ph:camera" />
			</div>
		</div>
	</div>
</div>

<!-- <style>
	.currentanime:hover {
		text-decoration: underline;
	}
</style> -->
