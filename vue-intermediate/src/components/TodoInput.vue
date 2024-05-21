<template>
    <div class="inputBox shadow">
        <input type="text" v-model="newTodoItem" @keyup.enter="addTodo">
        <span class="addContainer" @click="addTodo">
            <i class="fa-solid fa-plus" style="color: #ffffff;"></i>
        </span>

        <AlertModal :show="showModal" @close="showModal = false">
            <template #header>
                <h3>경고!
                    <span @click="showModal = false">
                        <i class="closeModalBtn fa-solid fa-square-xmark"></i>
                    </span>
                </h3>
            </template>
            <template #body>
                <h3>무언가를 입력하세요.</h3>
            </template>
        </AlertModal>
    </div>
</template>

<script>
import AlertModal from './common/AlertModal.vue';

export default {
    data() {
        return {
            newTodoItem: "",
            showModal: false
        }
    },
    methods: {
        addTodo() {
            if (this.newTodoItem !== '') {
                this.$emit('addTodoItem', this.newTodoItem);
                this.clearInput();
            } else {
                this.showModal = !this.showModal;
            }
        },
        clearInput() {
            this.newTodoItem = '';
        }
    },
    components: {
        AlertModal: AlertModal
    }
}
</script>

<style scoped>
input:focus {
    outline: none;
}

.inputBox {
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
}

.inputBox input {
    border-style: none;
    font-size: 0.9rem;
}

.addContainer {
    float: right;
    background: linear-gradient(to right, #6478FB, #8763FB);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
}

.addBtn {
    color: white;
    vertical-align: middle;
}

.closeModalBtn {
    color: #42b983;
}
</style>