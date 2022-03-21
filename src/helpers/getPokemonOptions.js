import pokemonApi from "@/api/pokemonApi"

const getPokemons = () => {
    const pokemonsArray = Array.from(Array(649))
    return pokemonsArray.map((_, index) => index +1) 
}

const getPokemonOptions = () => {
    const mixPokemons = getPokemons().sort( () => Math.random() - 0.5)
    return getPokemonsNames( mixPokemons.splice(0, 4))
}

const getPokemonsNames = async ([a, b, c, d] = []) => {
    console.log(a, b, c, d)

    const resp = await pokemonApi.get('/1')
    console.log(resp)

    

    return "names"
}

export default getPokemonOptions