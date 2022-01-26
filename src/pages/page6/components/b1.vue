<template>
  <p>2. 添加事件、数据传递</p>
  <div :style="fontstyle">
    <div class="rate" @mouseout="mouseOut">
      <div class="star">
        <span
          class="star-item"
          @mouseover="mouseOver(num)"
          v-for="num in 5"
          :key="num"
        >
          ☆
        </span>
      </div>
      <div class="star" :style="fontwidth">
        <span
          class="star-item"
          @click="onRate(num)"
          @mouseover="mouseOver(num)"
          v-for="num in 5"
          :key="num"
        >
          ★
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, computed, ref } from "vue";
let themeObj = {
  block: "#000",
  white: "#fff",
  red: "#f5222d",
  yellow: "#fadb14",
};

let props = defineProps({
  value: Number,
  theme: {
    type: String,
    default: "block",
  },
});

let width = ref(props.value);

let fontstyle = computed(() => {
  return `color: ${themeObj[props.theme]}`;
});

const fontwidth = computed(() => `width:${width.value}em;`);

function mouseOver(i) {
  width.value = i;
}

function mouseOut() {
  width.value = props.value;
}

let emits = defineEmits(["updateRate"]);

function onRate(num) {
  console.log("点击", num);
  emits("updateRate", num);
}
</script>

<style scoped>
.rate {
  position: relative;
}
.star {
  position: absolute;
  left: 50px;
  top: 0px;
  display: flex;
  overflow: hidden;
}
.star-item {
  display: block;
}
</style>
