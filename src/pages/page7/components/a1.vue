<template>
  <p>简单的过渡</p>
  <p>transition ： 只能包裹一个元素，注释都不能有。</p>

  <button @click="change">按钮</button>
  <br />
  <transition name="fade">
    <div class="box" v-if="show"></div>
  </transition>
</template>

<script setup>
import { ref } from "vue";

let show = ref(true);

function change() {
  console.log(show.value);
  show.value = !show.value;
}
</script>

<style scoped>
.box {
  width: 100px;
  height: 100px;
  border: 1px solid red;
}

.fade-enter-active {
  transition: 1s;
}
.fade-enter-from {
  width: 0px;
}

.fade-leave-active {
  transition: 1s;
}
.fade-leave-to {
  width: 0px;
}
</style>
