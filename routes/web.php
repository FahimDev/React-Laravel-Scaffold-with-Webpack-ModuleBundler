<?php
use Illuminate\Support\Facades\Route;
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
//--------------------HALL_OF_FAME------------------------------------------
Route::get('/get-tnc','HallOfFame@trainCertList');

Route::get('/get-anr','HallOfFame@awardList');

Route::get('/get-member','HallOfFame@membershipList');

Route::post('/add-fame','HallOfFame@trainCertCreate');
//---------------------------------------------------------------------------

//--------------------LOGIN/LOGOUT REQUEST-----------------------------------
Route::post('/access-request','AstronautValidator@login');
//---------------------------------------------------------------------------

Route::get('/research','ResearchControl@researchList');


Route::get('/', function () {
    return view('index');
});

Route::get('{AnyRoute}', function () {
    return view('index');
})->where('AnyRoute','.*');

