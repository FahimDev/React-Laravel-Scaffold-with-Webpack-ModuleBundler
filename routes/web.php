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

//--------------------HALL_OF_FAME------------------------------------------
Route::get('/get-tnc','HallOfFame@trainCertList')->middleware('astronautCheck');//astronautCheck is created at Kernel

Route::get('/get-anr','HallOfFame@awardList')->middleware('astronautCheck');

Route::get('/get-member','HallOfFame@membershipList')->middleware('astronautCheck');

Route::get('/get-pub','HallOfFame@publication')->middleware('astronautCheck');

Route::get('/get-by-id/{id}','HallOfFame@getByID')->middleware('astronautCheck');

Route::post('/add-fame','HallOfFame@trainCertCreate')->middleware('astronautCheck');

Route::post('/update-fame','HallOfFame@updateFame')->middleware('astronautCheck');

Route::post('/del-fame','HallOfFame@trainCertDelete')->middleware('astronautCheck');
//---------------------------------------------------------------------------

//--------------------SKILLS------------------------------------------

Route::get('/get-pe','Qualification@projectExperience')->middleware('astronautCheck');//astronautCheck is created at Kernel

Route::get('/get-s&t','Qualification@softNtool')->middleware('astronautCheck');

Route::get('/get-skill','Qualification@skills')->middleware('astronautCheck');

Route::get('/get-exp-summery','Qualification@expSummery')->middleware('astronautCheck');

Route::get('/get-skills-by-id/{id}','Qualification@getByID')->middleware('astronautCheck');

Route::post('/del-skill','Qualification@skillDelete')->middleware('astronautCheck');

Route::post('/add-skill','Qualification@createSkill')->middleware('astronautCheck');

Route::post('/update-skill','Qualification@updateSkill')->middleware('astronautCheck');

//---------------------------------------------------------------------------
//when we send parameters through the link we should use GET [unless we are updating]
//------------------------------MAIL--------------------------------------
Route::get('/recover-mail/{user}/{key}','recoverPassControl@resetPassWindow');
Route::post('/recover-mail/{user}/{key}','recoverPassControl@resetPass');
//----------------------------------------------------------------------------
//*********TEMP LINK*********
Route::post('/pass-recover','recoverPassControl@getPrKey');
//Route::post('/reset-this-pass','recoverPassControl@resetPass');
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

