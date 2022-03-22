<template>
    <div class="hero__title">
        <h1><a href="https://doguedogue.github.io" class="hero">Dominic's Pokémon Quiz</a></h1>
    </div>
    <h1 v-if="!pokemon">Espere por favor ...</h1>
    <div v-else>
        <h1>¿Quién es este Pokémon?</h1>
        <pokemon-picture
          :pokemonId="pokemon.id"
          :showPokemon="showPokemon" />
        <pokemon-options v-if="!showAnswer" 
          :pokemons="pokemonArr" 
          @pokemon-selection="checkAnswer"/>
        <template v-if="showAnswer">
            <h2 class="fade-in answer" v-bind:class="{ fail: !responseOK }"> {{ message}}</h2>
            <a @click="newGame" class="button">Nuevo Juego</a>
        </template>
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
          showPokemon: false,
          showAnswer: false,
          responseOK: false,
          message: null
      }
  },
  methods: {
      async mixPokemonArray(){
          this.pokemonArr = await getPokemonOptions()

          const rndInt = Math.floor(Math.random() * 4)
          this.pokemon = this.pokemonArr[rndInt]

      },
      checkAnswer (selectedId){
        //   console.log("PokemonPage checkAnswer", pokemonId)
          this.showPokemon = true
          this.showAnswer = true

          if (selectedId === this.pokemon.id){
              this.message = `Correcto, es ${ this.pokemon.name}`
              this.responseOK = true
          }else{
              this.message = `Oops, era ${ this.pokemon.name}`
              this.responseOK = false
          }

      },
      newGame(){
          this.showPokemon = false
          this.showAnswer = false
          this.pokemonArr = []
          this.pokemon = null
          this.responseOK = false
          this.mixPokemonArray()
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

.button {
    display: block;
    background-color: white;
    border-radius: 15px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
    margin-bottom: 10px;
    padding: 5px;
    width: 250px;
    color: black;
    font-size: 1.5rem;
    font-weight: 700;
    font: bold;
    margin: 0 auto;
}


.button:hover {
  background-image: linear-gradient(to left top, #e81c24, #f45413, #fc7c00, #ffa000, #ffc300);
}

.answer {
    width: 350px;
    padding: 10px 10px;
    margin: 30px auto;
    border-radius: 20px 0 20px 0;
    color: black;
    background-image: linear-gradient(to left top, #49da3e, #ffc300);
}

.fail{
    border-radius: 20px 20px 20px 20px;
    background-image: linear-gradient(to left top, #e81c24, #e81c24);
    color: white;
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
