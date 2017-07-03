export default {
  props: ['options'],
  mounted(){
    document.onclick = (e) => {
      if (e.path[0].querySelector('#fridaypicker')) {
        this.togglePicker();
      }
    }
  },
  data(){
    return {
      value: {
        hours: 0,
        minutes: 0
      },

      isShowPicker: false,
      interval: false,
    }
  },
  methods: {
    togglePicker(){
      this.isShowPicker = !this.isShowPicker;
    },
    longMouseDownStart(method){
      method();
      this.interval = setInterval(() => {
        method();
      }, 200)
    },
    longMouseDownStop(){
      clearInterval(this.interval);
    },
    addHour(){
      if (this.value.hours < 23)
        this.value.hours += 1;
      else
        this.value.hours = 0;
    },
    subHour(){
      if (this.value.hours > 0)
        this.value.hours -= 1;
      else
        this.value.hours = 23;
    },
    addMinute(){
      if (this.value.minutes < 59)
        this.value.minutes += 1;
      else {
        this.value.minutes = 0;
        this.addHour();
      }
    },
    subMinute(){
      if(this.value.minutes > 0)
        this.value.minutes -= 1;
    },
    formatNumber(number){
      if (number < 10)
        return "0" + number;
      return number;
    },
    formatTime() {
      return this.formatNumber(this.value.hours) + ":" + this.formatNumber(this.value.minutes);
    }
  },
}
