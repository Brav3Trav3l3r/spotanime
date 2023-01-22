<script>
    export let info
    import {styles} from '../../index'
</script>

<div class="image sticky top-0 h-80 z-[-1]">       
    <img src={info.cover} alt="" class="object-cover h-full w-full brightness-90" />
</div>

<div class="cover w-full relative ">
    <div class="absolute bottom-10 left-4 z-10">
        <h1 class={styles.infoTitle}>
            {info.title.english ? info.title.english : info.title.romaji}
        </h1>
    </div>
    <div class="bg-gradient-to-t absolute bottom-0 inset-x-0 from-black/30 to-transparent h-40" />
</div>