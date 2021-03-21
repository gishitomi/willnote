<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// 会員登録
Route::post('/register', 'App\Http\Controllers\Auth\RegisterController@register')->name('register');

// ログイン
Route::post('/login', 'Auth\LoginController@login')->name('login');

// ログアウト
Route::post('/logout', 'Auth\LoginController@logout')->name('logout');
