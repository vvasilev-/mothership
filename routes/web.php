<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/**
 * Core
 */
Route::namespace('Core\Http\Controllers')->group(function() {
    Route::redirect('/', '/dashboard');

    Route::get('/login', 'LoginController@showLoginForm')->name('core.login');
    Route::post('/login', 'LoginController@login');
    Route::post('/logout', 'LoginController@logout')->name('core.logout');

    Route::get('/dashboard', 'DashboardController@show')->name('core.dashboard');
});

/**
 * Stockroom
 */
Route::namespace('Stockroom\Http\Controllers')
    ->prefix('stockroom')
    ->name('stockroom.')
    ->group(function() {
        Route::get('/', 'DashboardController@show')->name('dashboard');

        Route::prefix('products')->group(function() {
            Route::post('/', 'ProductsController@create')->name('products.create');
            Route::put('/{product}', 'ProductsController@update')->name('products.update');
        });
    });
