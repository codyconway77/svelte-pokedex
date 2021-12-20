<script>
    import { pokestore } from '../stores/pokestore'
    import Card from '../components/Card.svelte'
</script>

<h1 class="text-center font-bold text-xl">Pokedex</h1>
<div class="flex w-full flex-wrap justify-around gap-3 bg-indigo-900 py-4">
    {#each $pokestore as pokemon}
        <Card {pokemon}>
            
        </Card>
    {/each}
</div>

<style>

</style>