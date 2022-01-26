<template>
  <div>
      <h1>封装公用 工具函数</h1>

      <p>page5，引入工具函数库</p>
      {{x}} | {{y}}
  </div>
</template>

<script setup>
import { useMouse } from "../../utils/mouse";
let { x, y } = useMouse();
</script >

<style>

</style>