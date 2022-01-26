import { ref, computed } from "vue";

export function useTodos() {
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
  return { title, showModal, todos, addTodo, clear, active, all, allDone };
}
