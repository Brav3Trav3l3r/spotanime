<script>
    import {styles} from '../../index'
    export let info
</script>

<div class="info w-2/5 h-full p-2 space-y-4">
    <h1 class={styles.secTitle}>Info</h1>
    <div class="main ">
        <div class="flex gap-4 ">
            <div class="image aspect-[2/3] grow-0 w-40  rounded-md truncate shrink-0">
                <img src={info.image} alt="" class="h-full w-full ovject-cover brightness-95 " />
            </div>
            <div class="info flex flex-col space-y-3 item justify-end max-w-80 shrink overflow-hidden">
                <div class="group1 flex flex-col space-y-2">
                    <h1 class="text-xl font-semibold">
                        {info.title.english ? info.title.english : info.title.romaji}
                    </h1>
                    <h1 class="text-sm text-zinc-400 font-medium">{info.releaseDate}</h1>
                </div>
                <div class="status">
                    <h1 class={`${info.status === 'Ongoing' ? 'text-green-400' : 'text-red-400'}  text-sm`}>
                        {info.status}
                    </h1>
                </div>
                <div class="group2  ">
                    <div class="studios flex space-x-4">
                        <h1 class="text-zinc-500 font-semibold">Sudios</h1>
                        <h1 class="text-zinc-200 font-light">{@html info.studios}</h1>
                    </div>
                    <div class="genres flex space-x-4 ">
                        <h1 class="text-zinc-500 font-semibold">Genres</h1>
                        <p class="line-clamp-1 font-light text-zinc-200 ">{@html info.genres}</p>
                    </div>
                </div>
                <div class="group3 flex gap-8">
                    <div class="popular flex gap-2 items-center">
                        <div class="icon w-fit font-bold text-xl flex text-yellow-400">
                            <iconify-icon icon="lucide:arrow-up-down" />
                        </div>
                        <h1 class="text-xl font-semibold">{info.popularity}</h1>
                    </div>
                    <div class="rating flex gap-2 items-center ">
                        <div class="icon w-fit font-bold text-xl text-blue-400 flex ">
                            <iconify-icon icon="simple-icons:anilist" />
                        </div>
                        <h1 class="text-xl  font-semibold">{info.rating}%</h1>
                    </div>
                </div>
            </div>
        </div>
        <div class="discription mt-6 ">
            <p class="line-clamp-4 text-sm text-zinc-400">{@html info.description}</p>
        </div>
    </div>
</div>