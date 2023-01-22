export async function load({fetch, params}){

    const res = await fetch(`https://api.consumet.org/meta/anilist/info/${params.id}`)
    const info = await res.json()
    
    return{
        info
    }
}