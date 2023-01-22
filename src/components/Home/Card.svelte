<script>
    export let anime;
    import { styles } from "../../index";
</script>

<a href={`/${anime.id}`}><div class="card bg-zinc-800/50 hover:bg-zinc-800  p-3 pb-4 rounded-md flex flex-col space-y-3 ">
    <div class="image relative overflow-hidden rounded-md truncate aspect-[2/3] ">
        <img src={anime.image} alt="" class="w-full h-full object-cover opacity-90">
    </div>
    <h1 class="{`${styles.triTitle}`}">{anime.title.romaji?anime.title.romaji: anime.title.english }</h1>
    
</div></a>