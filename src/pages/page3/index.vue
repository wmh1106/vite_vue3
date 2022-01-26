<template>
  <div>
      <h3>style 样式使用变量</h3>
      <button @click="changeBtn">按钮</button>
  </div>
</template>

<script setup>

import {ref} from 'vue'

let color = ref('red')
function changeBtn(){
    color.value = Math.random() > 0.5 ? 'blue' : 'red'
}
</script>

<style scoped>
button{
    background: v-bind(color);;
}
</style>