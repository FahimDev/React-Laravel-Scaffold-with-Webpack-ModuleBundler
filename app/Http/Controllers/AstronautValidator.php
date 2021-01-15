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
        if($userLogin){
            $hashedPassword = $userLogin->password ;
            if (Hash::check($pass, $hashedPassword)) {
                $request->session()->put('userNameKey',$user);
                return "200";
            }else{
                return "401";
            }
        }else{
            return "404";
        }

    }

    function onLogout(Request $request){
        $request->session()->flash('userNameKey');
        return redirect('/astronaut');
    }
}
