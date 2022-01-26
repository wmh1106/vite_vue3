<template>
  <div>
    <h1>vuex</h1>
    <button @click="add">同步：点击+1</button>
    <button @click="asyncAdd">异步：点击+1</button>
    <p>vuex state：{{ store.state.count }}</p>
    <p>使用计算属性：{{ double }}</p>
    <p>直接用vuex getters里的方法：{{ store.getters.double }}</p>
  </div>
</template>

<script setup>
import { computed } from "vue";
import store from "../../store";

let double = computed(() => store.getters.double);

function add(){
    store.commit('add', 1)
}

function asyncAdd(){
    store.dispatch('asyncAdd', 1)
}
</script>

<style></style>
