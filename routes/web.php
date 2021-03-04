<?php
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Mail;
use App\Mail\RecoverMail;
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
//------------------------------MAIL--------------------------------------

Route::get('/recover-mail/{key}',function ($key){
    
});

//----------------------------------------------------------------------------
//--------------------HALL_OF_FAME------------------------------------------
Route::get('/get-tnc','HallOfFame@trainCertList')->middleware('astronautCheck');//astronautCheck is created at Kernel

Route::get('/get-anr','HallOfFame@awardList')->middleware('astronautCheck');

Route::get('/get-member','HallOfFame@membershipList')->middleware('astronautCheck');

Route::post('/add-fame','HallOfFame@trainCertCreate')->middleware('astronautCheck');

Route::get('/del-fame/{id}','HallOfFame@trainCertDelete')->middleware('astronautCheck');  //when we send parameters through the link we should use GET [unless we are updating]
//---------------------------------------------------------------------------

//*********TEMP LINK*********

Route::post('/pass-recover','recoverPassControl@getPrKey');
//Route::post('/pass-recover/{token}','HallOfFame@membershipList');
//****************************


//--------------------LOGIN/LOGOUT REQUEST-----------------------------------
Route::post('/access-request','AstronautValidator@login');
Route::get('/exit-request','AstronautValidator@onLogout');
//---------------------------------------------------------------------------

Route::get('/research','ResearchControl@researchList')->middleware('astronautCheck');

//---------------------------------------------------------------------------
Route::get('/', function () {
    return view('index');
});

Route::get('{AnyRoute}', function () {
    return view('index');
})->where('AnyRoute','.*');

