<template>
  <div id="note">
    <div class="article">
      <p class="article-title font-lg">ノート一覧</p>
      <div class="notes">
        <div class="note-box">
            <div class="note-img">
                <img v-bind:src="'/img/kakeibo-img.png'" alt="">
            </div>
            <p class="note-date font-sm">2021/2/1</p>
            <h2 class="note-title">サンプル記事</h2>
            <p class="note-abstract font-text">Lorem, ipsum dolor sit amet consectetur adipisicing</p>
        </div>
        <div class="note-box"></div>
        <div class="note-box"></div>
            <div class="note-box"></div>
      </div>
    </div>
    <div class="menu-bar"></div>
  </div>
</template>