<template></template>

<script setup>
// ==================================================
// defineProperty
let getDouble = (n) => n * 2;
let obj = {};
let count = 1;
let double = getDouble(count);
Object.defineProperty(obj, "count", {
  get() {
    return count;
  },
  set(val) {
    count = val;
    double = getDouble(val);
  },
});
console.log(double); // 打印2
obj.count = 2;
console.log(double); // 打印4 // 有种自动变化的感觉;

delete obj.count
console.log(double) // double还是4

// ==================================================
// Proxy
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
console.log(obj.count, double);
proxy.count = 2;
console.log(obj.count, double);
delete proxy.count;
// 删除属性后，我们打印log时，输出的结果就会是 undefined NaN
console.log(obj.count, double);

// ==================================================
import { reactive, computed, watchEffect } from "vue";
let obj = reactive({
  count: 1,
});
let double = computed(() => obj.count * 2);
obj.count = 2;
watchEffect(() => {
  console.log("数据修改了", obj.count, double.value);
});

// ==================================================
// 利用对象的get set方法
let getDouble = (n) => n * 2;
let _value = 1;
double = getDouble(_value);

let count = {
  get value() {
    return _value;
  },
  set value(val) {
    _value = val;
    double = getDouble(_value);
  },
};
console.log(count.value, double);
count.value = 2;
console.log(count.value, double);
</script>
