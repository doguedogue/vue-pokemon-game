<template>
    <div class="hero__title">
        <h1><a href="https://doguedogue.github.io" class="hero">Dominic's Pokémon Quiz</a></h1>
    </div>
    <h1 v-if="!pokemon">Espere por favor ...</h1>
    <div v-else>
        <h1>¿Quién es este Pokémon?</h1>
        <pokemon-picture :pokemonId="pokemon.id" :showPokemon="showPokemon"/>
        <pokemon-options :pokemons="pokemonArr"/>
    </div>
</template>
<script>
import PokemonOptions from '@/components/PokemonOptions'
import PokemonPicture from '@/components/PokemonPicture'

import getPokemonOptions from '@/helpers/getPokemonOptions'

export default {
  components: {
    PokemonPicture,
    PokemonOptions,
  },
  data() {
      return {
          pokemonArr: [],
          pokemon: null,
          showPokemon: false
      }
  },
  methods: {
      async mixPokemonArray(){
          this.pokemonArr = await getPokemonOptions()

          const rndInt = Math.floor(Math.random() * 4)
          this.pokemon = this.pokemonArr[rndInt]

      }
  },
  mounted() {
      this.mixPokemonArray()
  }
}
</script>

<style scoped>
.hero__title{
    margin-top: 5px;
}
.hero{
    font-family: Avenir, Helvetica, Arial, sans-serif;
    background-image: linear-gradient(to right bottom, #e81c24, #f45413, #fc7c00, #ffa000, #ffc300);
    color: black;
    padding: 10px 40px;
    border-radius: 20px;
    text-decoration: none;
}

@media screen and (max-width:767px){
    .hero{
        font-size: 1.5rem;
        padding: 10px 30px;
    }
}

@media screen and (max-width:348px){
    .hero{
        font-size: 1.35rem;
        padding: 10px 20px;
    }
}

</style>
