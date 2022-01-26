<template>
  <div>
    <h1>体验 vueuse插件</h1>
    <button @click="toggle">click</button>
  </div>
</template>

<script setup>
import { useFullscreen } from "@vueuse/core";

const { isFullscreen, enter, exit, toggle } = useFullscreen();
</script>

<style></style>
