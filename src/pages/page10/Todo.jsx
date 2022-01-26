// 安装插件：作用是jsx => VNode 过程中，转义用的
// npm i @vitejs/plugin-vue-jsx -D

import { defineComponent, ref } from "vue";

export default defineComponent({
    // vModel 代替：v-model
    // {todo.title} 代替赋值
    // onClick 代替：@click
    // 循环用map 代替 v-for
    // 三元表达式 代替 v-if

    // jsx 与 template 的性能比较
  setup(props) {
    let title = ref("");
    let todos = ref([{ title: "学习Vue" }]);

    function addTodo() {
        console.log(title.value);
      todos.value.push({ title: title.value });
      title.value = "";
    }

    return () => (
      <div>
        <input type="text" vModel={title.value} />
        <button onClick={addTodo}>清理</button>
        <ul>
          {todos.value.length ? (
            todos.value.map((todo) => {
              return <li>{todo.title}</li>;
            })
          ) : (
            <li>no data</li>
          )}
        </ul>
      </div>
    );
  },
});
