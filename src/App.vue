<template>
  <div id="app">
    <chat-wrapper/>
  </div>
</template>

<script>
import ChatWrapper from '@/components/ChatWrapper.vue'

export default {
  name: 'App',
  components: {
    ChatWrapper,
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

button {
  border: none;
  background: transparent;
}
</style>
