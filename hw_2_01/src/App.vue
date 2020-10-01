<template>
  <div id="app">
    <InfoBox
    logo="https://ppobzor.ru/wp-content/uploads/2018/06/recreativ-logo.jpg"
    imgSrc="https://golapravda.blog/wp-content/uploads/2019/12/103-9-1024x681.jpg"
    title="Соковита хурма"
    />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import InfoBox from "./components/InfoBox";

export default {
  name: 'App',
  components: {
    InfoBox
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
