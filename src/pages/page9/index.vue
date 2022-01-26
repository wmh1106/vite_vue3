<template>
  <div>
      <h1>vue router</h1>

      <pre>
          2种模式：hash模式、history模式

          hash：URL中#后的东西改变，不会刷新页面，通过hashchange事件监听

          history：pushState、replaceState、事件popstate
      </pre>

      <pre>
        // 断点调试
        debugger

        // 浏览器扩展插件：Lighthouse 
      </pre>

        <div @click="add">{{a}}</div>
  </div>
</template>

<script setup>
let a = 1

function add (){
    // 断点调试
    debugger

    // 浏览器扩展插件：Lighthouse 
    a += 1
}
</script>

<style>

</style>