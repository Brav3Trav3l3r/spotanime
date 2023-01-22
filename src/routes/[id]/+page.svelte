<script>
	import { onMount } from 'svelte';
	import Characters from '../../components/info/Characters.svelte';
	import Cover from '../../components/info/Cover.svelte';
	import Episodes from '../../components/info/Episodes.svelte';
	import Info from '../../components/info/Info.svelte';
	import Interact from '../../components/info/Interact.svelte';
	import Related from '../../components/info/Related.svelte';
	import { styles } from '../../index';
	export let data;
	let info;
	$: info = data.info;

</script>

<div class="info relative">
	<Cover {info} />
	<div class="main z-50 relative bg-[#0D0D0D] py-4 ">
		<div
			class="gradeient brightness-50 bg-gradient-to-b from-red-800 to-trasnparent absolute top-0 inset-x-0 h-48 z-[-1]"
		/>
		<Interact />
		<div class="flex w-full px-8 mt-6 gap-8">
			<Episodes {info} />
			<Info {info} />
		</div>
		<div class="related mt-16 px-8 space-y-16">
			<Related {info} />
			<Characters {info}/>
		</div>
	</div>

	<!-- <div class="bg-gradient-to-b w-full h-48 from-black to-transparent "></div> -->
</div>
