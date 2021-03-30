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
          <div v-if="loginErrors" class="errors">
            <ul v-if="loginErrors.email">
              <li v-for="msg in loginErrors.email" :key="msg">
                {{msg}}
              </li>
            </ul>
            <ul v-if="loginErrors.password">
              <li v-for="msg in loginError.password" :key="msg">
                {{msg}}
              </li>
            </ul>
          </div>
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
          <label for="name">ユーザーネーム</label>
          <input
            type="text"
            id="name"
            class="form_item"
            v-model="registerForm.name"
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
          <label for="password_confirmation">パスワード(確認)</label>
          <input
            type="password"
            id="password_confirmation"
            class="form_item"
            v-model="registerForm.password_confirmation"
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
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
      },
    };
  },
  methods: {
    async login() {
      await this.$store.dispatch("auth/login", this.loginForm);
      if (this.apiStatus) {
        this.$router.push("/");
      }
    },
    async register() {
      // authストアのresigterアクションを呼び出す
      await this.$store.dispatch("auth/register", this.registerForm);
      // トップページに移動する
      this.$router.push("/");
    },
    // エラーメッセージを出した後にページを切り替えて再び戻った時にエラ〜メッセージが出せれたままになっているのを防ぐ
    clearError() {
      this.$store.commit('auth/setLoginErrorMessages', null)
    },
  },
  computed: {
    apiStatus() {
      return this.$store.state.auth.apiStatus;
    },
    loginErrors() {
      return this.$store.state.auth.loginErrorMessages;
    },
  },
  created() {
    this.clearError()
  }
};
</script>