<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Timepicker></Timepicker>
  </div>
</template>

<script>
import Timepicker from './components/timepicker';

export default {
  name: 'app',
  components: {
    Timepicker,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
