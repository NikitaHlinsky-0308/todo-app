<template>
  <div id="app">
    <div id="nav">
      
      <router-link to="/about">ToDo</router-link>
    </div>
    <router-view />
  </div>
</template>

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
}

h1, span {
    font-size: 1.5rem;
}

body {
    background-color: #d1cece;
    color: #6d6d6d;
    font-family: 'Raleway', sans-serif;
}

.task-list {
    margin: 0 auto;
    height: auto;
    width: 30vw;
    line-height: 1.8;
    background-color: #fff;
    box-shadow: 0 3px 10px #36363680;
}

</style>
