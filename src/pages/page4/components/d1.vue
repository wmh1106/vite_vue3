<template></template>

<script setup>
// ==================================================
// 利用对象的get set方法
let getDouble = (n) => n * 2;
let _value = 1;
let double = getDouble(_value);

let count = {
  get value() {
    return _value;
  },
  set value(val) {
    _value = val;
    double = getDouble(_value);
  },
};
console.log("page4 d", count.value, double);
count.value = 2;
console.log("page4 d", count.value, double);
</script>

<style></style>
