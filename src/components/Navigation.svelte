<script>
    import {styles} from '..'
	import Video from './Video.svelte';
</script>

<nav class="w-80 fixed top-0 bottom-20 left-0 bg-black text-white">
    <main class="border-b border-zinc-700 p-4 ">
        <a href="/"><div class="home flex space-x-4 items-center  cursor-pointer">
            <div class="icon {styles.navIcons} text-zinc-50">
                <iconify-icon icon="mingcute:home-5-fill"></iconify-icon>
            </div>
            <h1 class="{styles.navTitle} text-zinc-50">Home</h1>
        </div></a> 
        <div class="search flex space-x-4 items-center cursor-pointer">
            <div class="icon {styles.navIcons}">
                <iconify-icon icon="majesticons:search-line"></iconify-icon>
            </div>
            <h1 class="{styles.navTitle}">Search</h1>
        </div>
        <div class="Liked flex space-x-4 items-center cursor-pointer">
            <div class="icon {styles.navIcons}">
                <iconify-icon icon="icon-park-outline:like"></iconify-icon>
            </div>
            <h1 class="{styles.navTitle}">Liked</h1>
        </div>
    </main>

    <Video/>

</nav>