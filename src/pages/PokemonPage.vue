<template>
    <div class="hero__title">
        <h1><a href="https://doguedogue.github.io" class="hero">Dominic's Pokémon Quiz</a></h1>
    </div>
    <h1>¿Quién es este Pokémon?</h1>

    <pokemon-picture :pokemonId="4" :showPokemon="true"></pokemon-picture>

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
/* Title */
.hero__title{
    margin-top: 70px;
}
.hero{
    background: white;
    color: black;
    padding: 10px 40px;
    border-radius: 20px;
    text-decoration: none;
}

</style>
