<template>
  <div class="options-container">
    <ul>
      <li class="lipokemon" v-for="pokemon in pokemons" :key="pokemon.id">
        {{pokemon.name}}
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  props: {
    pokemons: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
ul {
    list-style-type: none;
    padding-inline-start: 0px;
}
li {
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
}

li:hover {
  background-image: linear-gradient(to left top, #e81c24, #f45413, #fc7c00, #ffa000, #ffc300);
}

.options-container {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    text-align: center;
}
</style>