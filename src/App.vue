<template>
  <div>
    <div>
      <router-link to="/">page1</router-link>
      |
      <router-link to="/page2">page2</router-link>
      |
      <router-link to="/page3">page3</router-link>
      |
      <router-link to="/page4">page4</router-link>
      |
      <router-link to="/page5">page5</router-link>
      |
      <router-link to="/page6">page6</router-link>
      |
      <router-link to="/page7">page7</router-link>
      |
      <router-link to="/page8">page8</router-link>
      |
      <router-link to="/page9">page9</router-link>
      |
      <router-link to="/page10">page10</router-link>
    </div>

    <router-view v-slot="{ Component }">
      <transition name="route" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup></script>

<style>
.route-enter-active,
.route-leave-active {
  transition: all 1s ease;
}

.route-enter-from,
.route-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
