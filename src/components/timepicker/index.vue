<template>
  <div class="main-panel-picker">
    <input type="text" @click="togglePicker" :value="formatTime()">
    <template v-if="isShowPicker">
      <div class="fridaypicker" id="fridaypicker">
        <div class="fridaypicker__title">Friday Time Picker</div>
        <div class="fridaypicker__content">
          <div class="fridaypicker__topline">
            <label @mousedown="longMouseDownStart(addHour)" @mouseup="longMouseDownStop">
              <div class="fridaypicker__column"><i class="arrow up"></i></div>
            </label><label @mousedown="longMouseDownStart(addMinute)" @mouseup="longMouseDownStop">
            <div class="fridaypicker__column"><i class="arrow up"></i></div>
          </label></div>
          <div class="fridaypicker__middleline">

            <div class="fridaypicker__column">{{ formatNumber(value.hours) }}</div>
            <span class="fridaypicker__separator">:</span>
            <div class="fridaypicker__column">{{ formatNumber(value.minutes) }}</div>
          </div>
          <div class="fridaypicker_downline">
            <label @mousedown="longMouseDownStart(subHour)" @mouseup="longMouseDownStop">
              <div class="fridaypicker__column"><i
                class="arrow down"></i></div>
            </label><label @mousedown="longMouseDownStart(subMinute)" @mouseup="longMouseDownStop">
            <div class="fridaypicker__column"><i
              class="arrow down"></i></div>
          </label>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>


<style>
  .main-panel-picker {
    width: 40%;
    position: relative;
  }

  .panel {
    position: absolute;
    left: 0;
    width: 200px;
    height: 70px;
    background: #000;
  }
</style>
<script src="./timepicker.js"></script>
<style lang="scss" src="./timepicker.scss"></style>

