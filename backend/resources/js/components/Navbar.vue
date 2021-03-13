<template>
  <nav class="navbar">
    <RouterLink class="navbar__brand" to="/"> Willnote </RouterLink>
    <div class="navbar__menu">
      <span class="navbar__item nav_username"> username さん、ようこそ </span>
      <div class="navbar__item">
        <RouterLink class="button button--link" to="/login">
          ログイン / 新規登録
        </RouterLink>
      </div>
    </div>
  </nav>
</template>
