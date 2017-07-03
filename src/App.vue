<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div style="margin: 0 auto; width: 50%">
      <Timepicker></Timepicker>
    </div>
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
