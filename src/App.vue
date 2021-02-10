<template>
  <div id="app">
    <h1>TODO.</h1>
    <todoApp />
  </div>
</template>

<script>
import todoApp from "@/views/Home.vue"

export default {
  components: {
    todoApp
  },
  mounted(){
    this.$store.commit('initTasks')
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,200;1,200&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

* {
  margin: 0;
  padding: 0;
  
  h1, span {
    font-size: 1.5rem;
  }

  body {
    background-color: #d1cece;
    color: #6d6d6d;
    font-family: 'Raleway', sans-serif;
  }
}





</style>
