<template>
  <nav class="navbar">
    <RouterLink class="navbar__brand" to="/"> Willnote </RouterLink>
    <div class="navbar__menu">
      <div class="post-btn" v-if="isLogin">
        <button type="button" class="btn btn-outline-dark">投稿　<i class="bi bi-pencil-square"></i></button>
      </div>
      <span class="navbar__item nav-username" v-if="isLogin"> {{username}} さん、ようこそ </span>
      <span class="navbar_item nav-username" v-else>
        ログインしましょう
      </span>
      <div class="navbar__item" v-if="!isLogin">
        <RouterLink class="button button--link" to="/login">
          ログイン / 新規登録
        </RouterLink>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    isLogin() {
      return this.$store.getters['auth/check']
    },
    username() {
      return this.$store.getters['auth/username']
    }
  }
}
</script>
