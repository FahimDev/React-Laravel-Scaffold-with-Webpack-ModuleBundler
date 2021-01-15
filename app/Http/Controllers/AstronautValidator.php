<?php

namespace App\Http\Controllers;
use App\Model\admin;
use Illuminate\Support\Facades\Hash; //The HASH Algo -> Argon2
use Illuminate\Http\Request;

class AstronautValidator extends Controller
{
    function login(Request $request){
        $user = $request->username;
        $pass = $request->password;

        $userLogin  = admin::where('user_name',$user)->first('password');
        $hashedPassword = $userLogin->password ;
        if (Hash::check($pass, $hashedPassword)) {
            return "8054";
        }else{
            return "401";
        }
    }
}
