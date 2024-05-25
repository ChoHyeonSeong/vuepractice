<template>
  <TodoHeader :appTitle="title"></TodoHeader>
  <TodoInput @addTodoItem="addTodoItem"></TodoInput>
  <TodoList :todoItems="todoItems" @removeTodoItem="removeTodoItem"></TodoList>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import { useTodo } from "./hooks/useTodo";

export default {
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
  },
  data() {
    return {
      title: "할일 앱",
    };
  },
  setup() {
    // 라이프 사이클 API가 적용된 구간

    const { todoItems, addTodoItem } = useTodo();

    return { todoItems, addTodoItem };
  },
  methods: {
    removeTodoItem(item, index) {
      this.todoItems.value.splice(index, 1);
      localStorage.removeItem(item, item);
    },
  },
};
</script>

<style scoped></style>
