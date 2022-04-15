<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\User;
use App\Models\Organisation;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\OrganisationsController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::get('/users', [UsersController::class, 'index']);

Route::post('/user', [UsersController::class, 'store']);

Route::get('/organisations', [OrganisationsController::class, 'index']);


