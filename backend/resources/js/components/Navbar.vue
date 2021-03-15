<template>
  <nav class="navbar">
    <RouterLink class="navbar__brand" to="/"> Willnote </RouterLink>
    <div class="navbar__menu">
      <div class="post-btn">
        <button type="button" class="btn btn-outline-dark">投稿　<i class="bi bi-pencil-square"></i></button>
      </div>
      <span class="navbar__item nav-username"> username さん、ようこそ </span>
      <div class="navbar__item">
        <RouterLink class="button button--link" to="/login">
          ログイン / 新規登録
        </RouterLink>
      </div>
    </div>
  </nav>
</template>
