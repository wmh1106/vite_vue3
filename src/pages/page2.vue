<template>
  <div>
      <h1>page2</h1>
      <p> 封装公用 工具函数 </p>
      {{x}} | {{y}}
  </div>
</template>

<script setup>
import { useMouse } from "../utils/mouse";
let { x, y } = useMouse();
</script >

<style>

</style>