<template>
    <!-- 질문 상세 정보 -->
    <div class="user-container">
        <div>
            <i class="fa-solid fa-user"></i>
        </div>
        <div class="user-description">
            <slot name="userId">
                <!-- 유저ID -->
            </slot>
            <div class="time">
                <slot name="time">
                    <!--  -->
                </slot>
            </div>
            <slot name="karma">
                <!--  -->
            </slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        info: Object
    }
}
</script>

<style scoped>
.user-container {
    display: flex;
    align-items: center;
    padding: 0.5rem;
}

.fa-user {
    font-size: 2.5rem;
}

.user-description {
    padding-left: 8px;
}

.time {
    font-size: 0.7rem;
}
</style>