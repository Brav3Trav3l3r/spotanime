<script>
	import '../app.css';
	import {beforeNavigate, afterNavigate} from '$app/navigation'
	import Controls from '../components/Controls.svelte';
	import Navigation from '../components/Navigation.svelte';

</script>



<div class="main font-lato">
	<Navigation />
	<div class="slot bg-[#0D0D0D] fixed left-80 right-0 bottom-20 top-0 overflow-y-auto text-white">
		<slot />
	</div>
	<Controls/>
</div>

<style>
	.slot::-webkit-scrollbar {
		width: 0px;
		height: 12px;
	}
	.slot::-webkit-scrollbar-track {
		background: transparent;
	}
	.slot::-webkit-scrollbar-thumb {
		background: #545454;
		opacity: 0.5;
		visibility: hidden;
	}
	.slot:hover::-webkit-scrollbar-thumb {
		visibility: visible;
	}
</style>
