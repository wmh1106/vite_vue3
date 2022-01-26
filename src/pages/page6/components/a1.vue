<template>
  <p>1. 基础组件</p>
  <p>通过props传值</p>
  <div>{{ rate }}</div>
</template>

<script setup>
import { defineProps, computed } from "vue";
let props = defineProps({
  value: Number,
});
// rate 是1到5的整数
let rate = computed(() => {
  return "★★★★★☆☆☆☆☆".slice(5 - props.value, 10 - props.value);
});
</script>

<style scoped>

</style>
