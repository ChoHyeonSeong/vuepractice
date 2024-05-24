<template>
  <TodoHeader :appTitle="title"></TodoHeader>
  <TodoInput @addTodoItem="addTodoItem"></TodoInput>
  <TodoList :todoItems="todoItems" @removeTodoItem="removeTodoItem"></TodoList>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import { ref } from 'vue';


export default {
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
  },
  data() {
    return {
      title: '할일 앱'
    }
  },
  setup() {
    const todoItems = ref([]);
    function fetchTodos() {
      const result = [];
      for (let i = 0; i < localStorage.length; i++) {
        const todoItem = localStorage.key(i);
        result.push(todoItem);
      }
      return result;
    }
    todoItems.value = fetchTodos();

    function addTodoItem(todo) {
      todoItems.value.push(todo);
      localStorage.setItem(todo, todo);
    }

    function removeTodoItem(item, index) {
      todoItems.value.splice(index, 1);
      localStorage.removeItem(item, item);
    }
    return { todoItems, addTodoItem, removeTodoItem };
  }
}
</script>

<style scoped></style>