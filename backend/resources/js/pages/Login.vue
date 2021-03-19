<template>
  <div class="container--small" id="login-form">
    <ul class="tab">
      <li
        class="tab__item"
        :class="{ 'tab_item--active': tab === 1 }"
        @click="tab = 1"
      >
        ログイン
      </li>
      <li
        class="tab__item"
        :class="{ 'tab_item--active': tab === 2 }"
        @click="tab = 2"
      >
        新規登録
      </li>
    </ul>
    <div class="form-box">
      <div class="panel" v-show="tab === 1">
        <form action="" class="form" @submit.prevent="login()">
          <label for="login-email">メールアドレス</label>
          <input
            type="text"
            class="form_item"
            id="login-email"
            v-model="loginForm.email"
          />
          <br />
          <label for="login-password">パスワード</label>
          <input
            type="password"
            id="login-password"
            class="form_item"
            v-model="loginForm.password"
          />
          <div class="form_button form-submit">
            <button type="submit" class="btn btn-dark btn-block">
              ログイン
            </button>
          </div>
        </form>
      </div>
      <div class="panel" v-show="tab === 2">
        <form action="" class="form" @submit.prevent="register()">
          <label for="username">ユーザーネーム</label>
          <input
            type="text"
            id="username"
            class="form_item"
            v-model="registerForm.username"
          />
          <br />
          <label for="email">メールアドレス</label>
          <input
            type="text"
            id="email"
            class="form_item"
            v-model="registerForm.email"
          />
          <br />
          <label for="password">パスワード</label>
          <input
            type="password"
            id="password"
            class="form_item"
            v-model="registerForm.password"
          />
          <br />
          <label for="password_confirm">パスワード(確認)</label>
          <input
            type="password"
            id="password_confirm"
            class="form_item"
            v-model="registerForm.password_confirm"
          />

          <div class="form_button form-submit">
            <button type="submit" class="btn btn-dark btn-block">
              登録する
            </button>
          </div>
        </form>
      </div>
    </div>
    {{ $data }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: 1,
      loginForm: {
        email: "",
        password: "",
      },
      registerForm: {
        username: "",
        email: "",
        password: "",
        password_confirm: "",
      },
    };
  },
  methods: {
    login() {
      console.log(this.loginForm);
    },
    async register() {
      // authストアのresigterアクションを呼び出す
      await this.$store.dispatch("auth/register", this.registerForm);
      // トップページに移動する
      this.$router.push("/");
    },
  },
};
</script>