<script>
	import Cardgroup from '../components/Home/Cardgroup.svelte';
	import Featured from '../components/Home/Featured.svelte';
	export let data;
</script>

<div class="home py-4 px-10">
	<Featured />
	<div class="cards mt-10 space-y-10">
		<Cardgroup title={'Trending'} animes={data.data1.results} />
		<Cardgroup title={'Recent Episodes'} animes={data.data2.results} />
		<Cardgroup title={'Popular'} animes={data.data3.results} />
	</div>
</div>
