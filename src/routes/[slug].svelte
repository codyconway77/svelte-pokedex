<script>
    import { page } from '$app/stores'
    let slug = $page.params.slug
    const getPokeman = async (slug) => {
        let url = `https://pokeapi.co/api/v2/pokemon/${slug}/`
        let res = await fetch(url)
        let data = await res.json()
        const index = slug
        return {
            name: data.name,
            id: data.id,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                index
            }.png`,
            types: data.types,
            height: data.height,
            weight: data.weight,
        }
    }
    const currentPokeman = getPokeman(slug)
</script>
<div class="flex h-screen w-full justify-center py-4 items-center bg-indigo-900">
    {#await currentPokeman}
        Loading...
    {:then currentPokeman} 
        <div class="grid grid-cols-2 gap-2 py-4 content-center justify-center h-max bg-slate-400 rounded">
            <div class="flex flex-col pl-8 content-between gap-6">
                <p class="font-bold text-3xl capitalize">Name: {currentPokeman.name}</p>
                <p class="font-bold mt-[-15px]">ID: {currentPokeman.id}</p>
                {#each currentPokeman.types as type}
                    <p class="mx-1 capitalize text-xl">Type: {type.type.name}</p>    
                {/each}
                <p class="text-xl">Height: {currentPokeman.height}</p>
                <p class="text-xl">Weight: {currentPokeman.weight}</p>
            </div>
            <img class="justify-self-center self-center w-4/6" src={currentPokeman.image} alt={currentPokeman.name}>
        </div>
    {/await}
</div>