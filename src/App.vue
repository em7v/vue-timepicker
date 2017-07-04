<template>
  <div id="app">
    <div style="margin: 0 auto; width: 50%">

        <timepicker v-model="time" :options="options">
          <div class="custom-block">{{ time.hours }} : {{ time.minutes }}</div>
        </timepicker>

    <br>
    <br>
        <timepicker v-model="time"></timepicker>

    </div>
  </div>
</template>

<script>
  import Timepicker from './components/timepicker';

  export default {
    name: 'app',
    data() {
      return {
        options: {
          headerShow: true,
          headerText: 'Time Picker',
        },
        time: {
          hours: 0,
          minutes: 0,
        },
      };
    },
    components: {
      Timepicker,
    },
  };
</script>


<style>
  .custom-block {
    width: 150px;
    height: 40px;
    background: #535353;
    color: white;
    box-shadow: #4c4c4c;
  }

</style>
