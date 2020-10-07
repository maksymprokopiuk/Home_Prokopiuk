<template>
  <div id="app">
    <ticket/>
  </div>
</template>

<script>
import Ticket from '@/components/Ticket'

export default {
  name: 'App',
  components: {
    Ticket
  }
}
</script>

<style>
body {
    font-family: 'Roboto', sans-serif;
  }
</style>
