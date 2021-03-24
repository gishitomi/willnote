<template>
    <div class="footer">
            <button class="button button--link" @click="logout()" v-if="isLogin">ログアウト</button>
    <RouterLink class="button button--link" to="/login">
      ログイン / 新規登録
    </RouterLink>
    </div>
</template>

<script>
export default {
    methods: {
        async logout() {
            await this.$store.dispatch('auth/logout');
            this.$router.push('/login');
        }
    },
    computed: {
        isLogin() {
            return this.$store.getters['auth/check']
        }
    }
}
</script>
