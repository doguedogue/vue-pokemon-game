

const getPokemons = () => {
    const pokemonsArray = Array.from(Array(649))
    return pokemonsArray.map((_, index) => index +1) 
}

const getPokemonOptions = () => {
    const mixPokemons = getPokemons().sort( () => Math.random() - 0.5)
    return getPokemonsNames( mixPokemons.splice(0, 4))
}

const getPokemonsNames = ([a, b, c, d] = []) => {

    console.log(a, b, c, d)

    return "names"
}

export default getPokemonOptions