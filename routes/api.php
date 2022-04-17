<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\User;
use App\Models\Organisation;
use App\Http\Controllers\UserController;
use App\Http\Controllers\OrganisationController;
use App\Http\Controllers\RoleController;

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
Route::get('/users', [UserController::class, 'index']);

Route::post('/user', [UserController::class, 'store']);

Route::get('/organisations', [OrganisationController::class, 'index']);

Route::post('/organisation', [OrganisationController::class, 'store']);

Route::get('/roles', [RoleController::class, 'index']);


