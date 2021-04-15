<?php

namespace App\Http\Controllers;
use App\Model\member_exp;
use App\Model\member_info;
use App\Model\admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash; //The HASH Algo -> Argon2
use phpDocumentor\Reflection\Types\String_;
use Session;

class Qualification extends Controller{

    function projectExperience(){
        $username = Session::get('userNameKey');
        $result  = member_exp::where('userName',$username)->where('type','PE')->get();
        return $result;
    }

    function softNtool(){
        $username = Session::get('userNameKey');
        $result  = member_exp::where('userName',$username)->where('type','S&T')->get();
        return $result;
    }

    function skills(){
        $username = Session::get('userNameKey');
        $result  = member_exp::where('userName',$username)->where('type','Skill')->get();
        return $result;
    }

    function expSummery(){
        $username = Session::get('userNameKey');
        $result  = member_info::where('userName',$username)->first('expSummary');
        return $result;
    }

}
