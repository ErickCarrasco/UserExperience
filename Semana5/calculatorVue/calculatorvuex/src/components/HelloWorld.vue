<template>
  <div class="hello">
    <input class="input" v-model="current">

    <ul>
    <button class="button" v-on:click="press">7</button>
    <button class="button" v-on:click="press">8</button>
    <button class="button" v-on:click="press">9</button>
    <button class="button" v-on:click="press">4</button>
    <button class="button" v-on:click="press">5</button>
    <button class="button" v-on:click="press">6</button>
    <button class="button" v-on:click="press">1</button>
    <button class="button" v-on:click="press">2</button>
    <button class="button" v-on:click="press">3</button>
    <button class="button equal-sign" v-on:click="press">=</button>
    <button class="button" v-on:click="press">C</button>
    <button class="button" v-on:click="press">*</button>
    <button class="button" v-on:click="press">/</button>
    <button class="button" v-on:click="press">√</button>
    <button class="button" v-on:click="press">x ²</button>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
