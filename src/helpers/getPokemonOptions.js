import pokemonApi from "@/api/pokemonApi"

const getPokemons = () => {
    const pokemonsArray = Array.from(Array(649))
    return pokemonsArray.map((_, index) => index +1) 
}

const getPokemonOptions = async () => {
    const mixPokemons = getPokemons().sort( () => Math.random() - 0.5)
    const pokemones = await getPokemonsNames( mixPokemons.splice(0, 4))
    // console.table(pokemones) //beautiful
    return pokemones
}

const getPokemonsNames = async ([a, b, c, d] = []) => {
    // console.log(a, b, c, d)
    // const resp = await pokemonApi.get('/25')
    // console.log(resp.data.name, resp.data.id)

    const promiseArr = [
        pokemonApi.get(`/${a}`),
        pokemonApi.get(`/${b}`),
        pokemonApi.get(`/${c}`),
        pokemonApi.get(`/${d}`),
    ]    
    const [p1, p2, p3, p4] = await Promise.all( promiseArr)
    return [
        {name: p1.data.name, id: p1.data.id},
        {name: p2.data.name, id: p2.data.id},
        {name: p3.data.name, id: p3.data.id},
        {name: p4.data.name, id: p4.data.id},
    ]
}

export default getPokemonOptions