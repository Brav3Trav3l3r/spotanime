<script>
	import { styles } from '..';
	import Video from './Video.svelte';
</script>

<nav class="w-80 fixed top-0 bottom-20 left-0 bg-black text-white">
	<div class="sitename flex space-x-4 items-center pl-6  pt-6 pb-4">
		<div class="logo text-4xl flex items-center">
			<iconify-icon icon="fa6-brands:twitch" />
		</div>
        <h1 class="text-2xl font-semibold">Spotanime</h1>
	</div>

	<main class="border-b border-zinc-700 px-4 py-2">
		<a href="/"
			><div class="home flex space-x-2 items-center cursor-pointer group">
				<div class="icon {styles.navIcons} text-zinc-50 ">
					<iconify-icon icon="ph:house-fill" />
				</div>
				<h1 class="{styles.navTitle} text-zinc-50">Home</h1>
			</div></a
		>
		<div class="search flex space-x-2 items-center cursor-pointer group">
			<div class="icon {styles.navIcons}">
				<iconify-icon icon="ph:magnifying-glass-bold" />
			</div>
			<h1 class={styles.navTitle}>Search</h1>
		</div>
		<div class="Liked flex space-x-2 items-center cursor-pointer group">
			<div class="icon {styles.navIcons}">
				<iconify-icon icon="ph:heart-bold" />
			</div>
			<h1 class={styles.navTitle}>Liked</h1>
		</div>
	</main>

	<Video />
</nav>
