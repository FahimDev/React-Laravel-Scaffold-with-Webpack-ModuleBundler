<?php

namespace App\Http\Controllers;
use App\Model\member_earn;
use Illuminate\Http\Request;

class HallOfFame extends Controller
{
    function trainCertList(){
        $result  = member_earn::where('userName','fahim0373')->where('type','t&c')->get();
        return $result;
    }

    function awardList(){
        $result  = member_earn::where('userName','fahim0373')->where('type','a&r')->get();
        return $result;
    }

    function membershipList(){
        $result  = member_earn::where('userName','fahim0373')->where('type','member')->get();
        return $result;
    }

    function trainCertDelete(Request $request){
        $id=$request->input('id');
        $result=member_earn::where('id','=',$id)->delete();
        return $result;
    }
}
