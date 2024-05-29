<template>
    <div>
        <user-profile :info="userInfo">
            <template v-slot:userId>
                <div>{{ userInfo.id }}</div>
            </template>
            <template v-slot:time>
                <span>
                    {{ 'Joined ' + userInfo.created }}, 
                </span>
            </template>
            <template v-slot:karma>
                <span>
                    {{ userInfo.karma }}
                </span>
            </template>
        </user-profile>
    </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue'

export default {
    components: {
        UserProfile
    },
    computed: {
        userInfo() {
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