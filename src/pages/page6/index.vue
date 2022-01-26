<template>
  <div>
    <h1>组件</h1>
    <!-- <a1 :value="4" /> -->

    <!-- <b1 :value="score" :theme="`red`" @updateRate="updateRate" /> -->
    <br />
    <!-- <c1 v-model="score" /> -->
    <br />
    <d1 v-model="score">您的评分：{{ score }}</d1>
  </div>
</template>

<script setup>
import { ref } from "vue";

// import a1 from './components/a1.vue'
// import b1 from './components/b1.vue'
// import c1 from './components/c1.vue'
import d1 from "./components/d1.vue";

let score = ref(1);

function updateRate(e) {
  console.log("点击回调", e);
  score.value = e;
}
</script>

<style></style>
