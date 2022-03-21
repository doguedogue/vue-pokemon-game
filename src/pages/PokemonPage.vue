<template>
    <div class="hero__title">
        <h1><a href="https://doguedogue.github.io" class="hero">Dominic's Pokémon Quiz</a></h1>
    </div>
    <h1>¿Quién es este Pokémon?</h1>

    <pokemon-picture :pokemonId="28" :showPokemon="true"></pokemon-picture>

    <!-- TODO Opciones -->
    <pokemon-options></pokemon-options>

</template>
<script>
import PokemonOptions from '@/components/PokemonOptions'
import PokemonPicture from '@/components/PokemonPicture'
import getPokemonOptions from '@/helpers/getPokemonOptions'

console.log(getPokemonOptions())

export default {
  name: 'App',
  components: {
    PokemonPicture,
    PokemonOptions,
  }
}
</script>

<style scoped>
.hero__title{
    margin-top: 5px;
}
.hero{
    font-family: Avenir, Helvetica, Arial, sans-serif;
    background: white;
    color: black;
    padding: 10px 40px;
    border-radius: 20px;
    text-decoration: none;
}

@media screen and (max-width:767px){
    .hero{
        font-size: 1.2rem;
    }
    h1{
        font-size: 1.2rem;
    }
}

</style>
