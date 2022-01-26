<template></template>

<script setup>
// ==================================================
import { reactive, computed, watchEffect } from "vue";
let obj = reactive({
  count: 1,
});
let double = computed(() => obj.count * 2);
obj.count = 2;
watchEffect(() => {
  console.log("page4 c", "数据修改了", obj.count, double.value);
});
</script>
