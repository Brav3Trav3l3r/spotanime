export async function load() {
   
    const fdata1 = async()=>{
        const res = await fetch('https://api.consumet.org/meta/anilist/trending')
        return await res.json()
    }
    const fdata2 = async()=>{
        const res = await fetch('https://api.consumet.org/meta/anilist/recent-episodes')
        return await res.json()
    }
    const fdata3 = async()=>{
        const res = await fetch('https://api.consumet.org/meta/anilist/popular')
        return await res.json()
    }

return{
    
    data1: fdata1(),
    data2: fdata2(),
    data3: fdata3()
}
}

