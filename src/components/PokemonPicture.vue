<template>
  <div class="pokemon-container" v-bind:class="{ visible: showPokemon }">
    <img
      v-if="!showPokemon"
      class="hidden-pokemon"
      :src="imgSrc"
      alt="pokemon">

    <img
      v-else
      class="fade-in"
      :src="imgSrc"
      alt="pokemon">
  </div>
</template>

<script>
export default {
  props: {
    pokemonId: {
      type: Number,
      required: true,
    },
    showPokemon: {
      type: Boolean,
      required: true,
      default: false,
    }
  },
  computed: {
    imgSrc(){
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ this.pokemonId }.svg`
    }
  }
}
</script>

<style scoped>
.pokemon-container {
    height: 300px;
    display: flex;
    justify-content: center;
    align-content: center;
    filter: drop-shadow(0 0 40px gold);
}

img {    
    height: 300px;
    position: absolute;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
}

.visible {
  filter: drop-shadow(0 0 40px rgb(53, 24, 14));
}

.hidden-pokemon {

    filter: brightness(0);
    
}

</style>