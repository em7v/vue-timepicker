<template>
  <div class="main-panel-picker">
    <slot>
      <input type="text" @click="togglePicker" :value="formatTime()">
    </slot>
    <!--<input type="text" @click="togglePicker" :value="formatTime()">-->
    <template v-if="isShowPicker">
      <div class="fridaypicker">
        <template v-if="config.headerShow">
          <div class="fridaypicker__title">{{ config.headerText }}</div>
        </template>

        <div class="fridaypicker__content">

          <div class="fridaypicker__topline">

            <div class="fridaypicker__column" @mousedown="longMouseDownStart(addHour)" @mouseup="longMouseDownStop">
              <i class="arrow up"></i>
            </div>

            <div class="fridaypicker__column" @mousedown="longMouseDownStart(addMinute)" @mouseup="longMouseDownStop">
              <i class="arrow up"></i>
            </div>
          </div>

          <div class="fridaypicker__middleline">
            <div class="fridaypicker__column">{{ formatNumber(value.hours) }}</div>
            <span class="fridaypicker__separator">:</span>
            <div class="fridaypicker__column">{{ formatNumber(value.minutes) }}</div>
          </div>

          <div class="fridaypicker_downline">
            <div class="fridaypicker__column" @mousedown="longMouseDownStart(subHour)" @mouseup="longMouseDownStop">
              <i class="arrow down"></i>
            </div>
            <div class="fridaypicker__column" @mousedown="longMouseDownStart(subMinute)" @mouseup="longMouseDownStop">
              <i class="arrow down"></i>
            </div>
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

