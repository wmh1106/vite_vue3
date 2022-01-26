<template>
  <div>
    <h1>h函数</h1>
    <p>h函数就是render函数，是渲染函数，返回虚拟DOM</p>

    <heading1 :level="1">hello world!</heading1>

    <heading2 :level="2">hello world!</heading2>

    <Todo/>
  </div>
</template>

<script setup>
import heading1 from "./heading1.jsx";
import heading2 from "./heading2.jsx";

import Todo from "./Todo.jsx";
</script>

<style></style>
