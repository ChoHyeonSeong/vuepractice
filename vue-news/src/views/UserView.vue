<template>
    <div>
        <p>id : {{ userInfo.id }}</p>
        <p>karma : {{ userInfo.karma }}</p>
        <p>created : {{ userInfo.created }}</p>
        <p>about : {{ userInfo.about }}</p>
    </div>
</template>

<script>

export default {
    computed: {
        userInfo(){
            return this.$store.state.user;
        }
    },
    created() {
        const userId = this.$route.params.id;
        this.$store.dispatch('FETCH_USER', userId);
    },
}
</script>

<style scoped></style>