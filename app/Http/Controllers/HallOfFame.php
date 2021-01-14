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

    function trainCertCreate(Request $request){
        $user=$request->input('username');
        $pass=$request->input('password');

        $type=$request->input('type');

        if($type == "t&c"){
            $title=$request->input('flexOne');
            $institute=$request->input('flexTwo');
            $instructor=$request->input('flexThree');

            $result=member_earn::insert(['userName'=> $user,'type'=> $type,'title'=> $title,'institution'=> $institute,'instructor'=> $instructor]);

            if($result == true){
                return "200";
            }else{
                return "304"; //Not Modified
            }

        }else if($type == "a&r"){
            $title=$request->input('flexOne');
            $position=$request->input('flexTwo');
            $event=$request->input('flexThree');

            $result=member_earn::insert(['userName'=> $user,'type'=> $type,'title'=> $title,'prizePosition'=> $position,'prizeCategory'=> $event]);

            if($result == true){
                return "200";
            }else{
                return "304";
            }

        }else if($type == "pub"){
            $title=$request->input('flexOne');
            $position=$request->input('flexTwo');
            $url=$request->input('flexThree');

            $result=member_earn::insert(['userName'=> $user,'type'=> $type,'title'=> $title,'institution'=> $position,'membership'=> $url]);

            if($result == true){
                return "200";
            }else{
                return "304";
            }

        }else if ($type == "member"){
            $membership=$request->input('flexOne');

            $result=member_earn::insert(['userName'=> $user,'type'=> $type,'membership'=> $membership]);

            if($result == true){
                return "200";
            }else{
                return "304";
            }
        }else{
            return "400";//Bad Request
        }




        return $result;
    }
}
