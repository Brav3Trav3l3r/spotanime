<script>
	import Characters from '../../components/info/Characters.svelte';
	import Cover from '../../components/info/Cover.svelte';
	import Episodes from '../../components/info/Episodes.svelte';
	import Info from '../../components/info/Info.svelte';
	import Interact from '../../components/info/Interact.svelte';
	import Related from '../../components/info/Related.svelte';

	export let data;
	let info;
	$: info = data.info;


	import ColorThief from 'color-thief-ts';
	const colorThief = new ColorThief();

	let color;
	$: getColor(info.cover).then((result) => {
		color = result;
	});


	async function getColor(image) {
		const dominantColor = await colorThief.getColorAsync(image);
		return dominantColor;
	}
</script>

<div class="info relative">
	<Cover {info} />
	<div class="main z-50 relative bg-[#0D0D0D] py-4 ">
		<div id="gradient" class={` brightness-50 absolute top-0 inset-x-0 h-48 z-[-1]`} />
		<Interact />
		<div class="flex w-full px-8 mt-6 gap-8">
			<Episodes {info} />
			<Info {info} />
		</div>
		<div class="related mt-16 px-8 space-y-16">
			<Characters {info} />
			<Related {info} />
		</div>
	</div>

	<!-- <div class="bg-gradient-to-b w-full h-48 from-black to-transparent "></div> -->
</div>
