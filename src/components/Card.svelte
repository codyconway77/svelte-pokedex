<script>
    export let pokemon
    $:pokemanURL = `/${pokemon.id}`
</script>

<a href={pokemanURL} class="card bg-slate-400 py-4 px-4 rounded">
    <p class="font-bold">{pokemon.id}.</p>
    <p class="font-bold">{pokemon.name}</p>
    <img src={pokemon.image} alt={pokemon.name}>
</a>

<style>

</style>