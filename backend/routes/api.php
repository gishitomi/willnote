<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
// 会員登録
Route::post('/register', 'App\Http\Controllers\Auth\RegisterController@register')->name('register');

// ログイン
Route::post('/login', 'App\Http\Controllers\Auth\LoginController@login')->name('login');

// ログアウト
Route::post('/logout', 'App\Http\Controllers\Auth\LoginController@logout')->name('logout');

// ログイン状態を確認
Route::get('/user', fn() => Auth::user())->name('user');

// カテゴリーを設定
Route::post('/categorys', 'App\Http\Controllers\CategoryController@create')->name('category.create');

// ノートを投稿
Route::post('/notes', 'App\Http\Controllers\NoteController@create')->name('note.create');
