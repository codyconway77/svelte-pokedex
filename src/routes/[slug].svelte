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
<div class="flex h-screen w-full justify-center py-4 content-center bg-indigo-900">
    {#await currentPokeman}
        Loading...
    {:then currentPokeman} 
        <div class="grid grid-cols-2 content-center justify-center w-8/12 bg-slate-400 rounded">
            <div class="flex flex-col pl-8 content-between gap-6">
                <p class="font-bold">ID: {currentPokeman.id}</p>
                <p class="font-bold text-xl">Name: {currentPokeman.name}</p>
                {#each currentPokeman.types as type}
                    <p class="mx-1">
                        Type: {type.type.name}
                    </p>    
                {/each}
                <p>Height: {currentPokeman.height}</p>
                <p>Weight: {currentPokeman.weight}</p>
            </div>
            <img class="justify-self-center w-4/6" src={currentPokeman.image} alt={currentPokeman.name}>
        </div>
    {/await}
</div>