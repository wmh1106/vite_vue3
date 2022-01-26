<template>
  <div>组件a1</div>
</template>

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
console.log("page4 组件a-double ", double); // 打印2
obj.count = 2;
console.log("page4 组件a-double", double); // 打印4 // 有种自动变化的感觉;

// TODO 报错：未解决
// delete obj.count; 
// console.log("page4 组件a-double", double); // double还是4
</script>
