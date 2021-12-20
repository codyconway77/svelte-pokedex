<script>
    export let pokemon
</script>

<div class="card bg-slate-400 py-4 px-4 rounded">
    <p class="font-bold">{pokemon.id}.</p>
    <p class="font-bold">{pokemon.name}</p>
    <img src={pokemon.image} alt={pokemon.name}>
</div>

<style>

</style>