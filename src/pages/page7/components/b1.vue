<template>
  <p>动画</p>
  <div class="box"></div>
</template>

<style scoped>
.box {
  position: relative;
  width: 100px;
  height: 100px;
  border: 1px solid red;
  animation: move 2s linear infinite;
}

@keyframes move {
  0% {
    left: 0;
  }
  50% {
    left: 200px;
  }
  100% {
    left: 0;
  }
}
</style>
