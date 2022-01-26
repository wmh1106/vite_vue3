<template></template>

<script setup>
// ==================================================
// Proxy
let getDouble = (n) => n * 2;
let obj = {
  // count: 1
};
let count = 1;
let double = getDouble(count);

let proxy = new Proxy(obj, {
  get: function (target, prop) {
    return target[prop];
  },
  set: function (target, prop, value) {
    target[prop] = value;
    if (prop === "count") {
      double = getDouble(value);
    }
  },
  deleteProperty(target, prop) {
    delete target[prop];
    if (prop === "count") {
      double = NaN;
    }
  },
});
console.log("page4 b", obj.count, double);
proxy.count = 2;
console.log("page4 b", obj.count, double);

// 删除属性后，我们打印log时，输出的结果就会是 undefined NaN
// delete proxy.count;
// console.log("page4 b", obj.count, double);
</script>

<style></style>
