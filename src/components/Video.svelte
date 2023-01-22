<script>
	import { currentId } from '../store/store';
	let url;

	$: if ($currentId !== null) {
		getUrl($currentId).then((result) => {
			url = result;
		});
	}

	$: console.log(url);

	function search(key, array) {
		for (let n of array) {
			if (n.quality === key) {
				return n.url;
			}
		}
	}

	async function getUrl(id) {
		console.log('**RAN**');
		const res = await fetch(`https://api.consumet.org/anime/gogoanime/watch/${id}`);
		const data = await res.json();
		const sources = data.sources;
		const promise = await search('default', sources);
		return promise;
	}
</script>

<div class="absolute bottom-0 inset-x-0 aspect-video truncate bg-neutral-800">
	<vds-media class=" h-full w-full object-contain">
		<vds-hls class="h-full w-full " controls>
			<video class="" controls src={url} preload="none" />
		</vds-hls>
	</vds-media>
</div>
