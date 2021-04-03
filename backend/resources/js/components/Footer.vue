<template>
  <div class="footer">
    <button class="button button--link" @click="logout()" v-if="isLogin">
      ログアウト
    </button>
    <RouterLink class="button button--link" to="/login" v-if="!isLogin">
      ログイン / 新規登録
    </RouterLink>
  </div>
</template>

<script>
export default {
  computed: {
    isLogin() {
      return this.$store.getters["auth/check"];
    },
    apiStatus() {
      return this.$store.state.auth.apiStatus;
    },
  },
  methods: {
    async logout() {
      await this.$store.dispatch("auth/logout");
      if (this.apiStatus) {
        this.$router.push("/login");
      }
    },
  },
};
</script>
