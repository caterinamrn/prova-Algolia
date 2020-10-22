<?php

use Illuminate\Support\Facades\Route;



Route::get('/', function () {
    return view('search-bar');
});
Route::get('/2', function () {
    return view('apart-index');
});
Route::get('/3', function () {
    return view('apart-index');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::get('/api/apartments/results', 'ApartmentController@index') -> name('apart-api-index');
