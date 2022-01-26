// 安装插件：作用是jsx => VNode 过程中，转义用的
// npm i @vitejs/plugin-vue-jsx -D

import { defineComponent, h } from "vue";

export default defineComponent({
  props: {
    level: {
      type: Number,
      required: true,
    },
  },

  setup(props, { slots }) {
    let tag = `h${props.level}`;

    return () => <tag>{slots.default()}</tag>;
  },
});
