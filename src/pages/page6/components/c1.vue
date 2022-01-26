<template>
  <p>3. v-model</p>
  <pre>
      props: modelValue
      事件：update:modelValue
  </pre>
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
</template>

<script setup>
import { defineProps, defineEmits, computed, ref, watchEffect } from "vue";
let props = defineProps({
  modelValue: Number,
});

let emits = defineEmits(["update:modelValue"]);

let width = ref(props.modelValue);

watchEffect(()=>{
    width.value = props.modelValue;
})
const fontwidth = computed(() => {
  return `width:${width.value}em;`;
});

function mouseOver(i) {
  console.log(i);
  width.value = i;
}

function mouseOut() {
  width.value = props.modelValue;
}

function onRate(num) {
  console.log("点击", num);
  emits("update:modelValue", num);
}
</script>

<style scoped>
.rate {
  position: relative;
  margin-top: 20px;
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
