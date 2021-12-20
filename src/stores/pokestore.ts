import { writable } from 'svelte/store'

export const pokestore = writable([])

const getPokemon = async (num) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${num}`)
    const data = await res.json()
    const loadedPokemon = data.results.map((data, index) => {
        return {
            name: data.name,
            id: index + 1,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                index + 1
            }.png`
        }
    })
    pokestore.set(loadedPokemon)
}

getPokemon(150)