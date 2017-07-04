const defaultOptions = {
  headerShow: true,
  headerText: 'Friday Time Picker',
};

export default {
  props: ['options', 'value'],
  mounted(){

    if (this.$slots.default) {
      this.$slots.default.forEach(vnode => {
        vnode.elm.addEventListener('click', this.togglePicker, true);
      });
    }
    document.onclick = (e) => {
      if (e.path[0].querySelector('.fridaypicker')) {
        this.togglePicker();
      }
    };

    this.config = {...defaultOptions, ...this.options}
  },
  data(){
    return {
      config: null,
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
      if (this.value.minutes > 0)
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
