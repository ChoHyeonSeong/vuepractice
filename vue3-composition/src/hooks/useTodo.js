import { onBeforeMount, ref } from "vue";

function useTodo(){
    
    const todoItems = ref([]);
    function fetchTodos() {
            const result = [];
            for (let i = 0; i < localStorage.length; i++) {
            const todoItem = localStorage.key(i);
            result.push(todoItem);
            }
            return result;
    }
    onBeforeMount(() => {
        todoItems.value = fetchTodos();
    });

    function addTodoItem(todo) {
        todoItems.value.push(todo);
        localStorage.setItem(todo, todo);
    }

    return {todoItems,fetchTodos,addTodoItem};
    
}