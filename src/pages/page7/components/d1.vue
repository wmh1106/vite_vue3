<template>
  <h2>transition-group</h2>
  <!-- 动画容器 -->
  <transition name="modal">
    <div class="info-wrapper" v-if="showModal">
      <div class="info">哥，你啥也没输入</div>
    </div>
  </transition>

  <input type="text" v-model="title" @keydown.enter="addTodo" />
  <button v-if="active < all" @click="clear">清理</button>
  <div v-if="todos.length">
    <transition-group name="flip" tag="ul">
      <li v-for="(todo, i) in todos" :key="todo.title">
        <input type="checkbox" v-model="todo.done" />
        <span :class="{ done: todo.done }"> {{ todo.title }}</span>

        <span @click="removeTodo($event, i)">❌</span>
      </li>
    </transition-group>
  </div>
  <div v-else>暂无数据</div>
  <div>
    全选<input type="checkbox" v-model="allDone" />
    <span> {{ active }} / {{ all }} </span>
  </div>
</template>
<script setup>
import { ref, computed } from "vue";
let count = ref(1);

let showModal = ref(false);
let title = ref("");
let todos = ref([{ title: "学习Vue", done: false }]);
function addTodo() {
  if (!title.value) {
    showModal.value = true;

    setTimeout(() => {
      showModal.value = false;
    }, 1500);
    return;
  }

  todos.value.push({ title: title.value, done: false });
  title.value = "";
}
function clear() {
  todos.value = todos.value.filter((v) => !v.done);
}
let active = computed(() => {
  return todos.value.filter((v) => !v.done).length;
});
let all = computed(() => todos.value.length);
let allDone = computed({
  get: function () {
    return active.value === 0;
  },
  set: function (value) {
    todos.value.forEach((todo) => {
      todo.done = value;
    });
  },
});

function removeTodo(e, i) {
  todos.value.splice(i, 1);
}
</script>

<style scoped>
.info-wrapper {
  position: fixed;
  top: 20px;
  width: 200px;
}

.info {
  padding: 20px;
  color: white;
  background: #d88986;
}

.modal-enter-from {
  opacity: 0;
  transform: translateY(-60px);
}
.modal-enter-active {
  transition: all 0.3s;
}

.modal-leave-to {
  opacity: 0;
  transform: translateY(-60px);
}
.modal-leave-active {
  transition: all 0.3s;
}

.flip-move {
  transition: transform 0.8s ease;
}
.flip-enter-active,
.flip-leave-active {
  transition: all 1s ease;
}

.flip-enter-from,
.flip-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
