<?php

namespace App\Http\Controllers;
use App\Model\member_earn;
use App\Model\admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash; //The HASH Algo -> Argon2
use phpDocumentor\Reflection\Types\String_;
use Session;


class HallOfFame extends Controller
{
    function trainCertList(){
        $username = Session::get('userNameKey');
        $result  = member_earn::where('userName',$username)->where('type','t&c')->get();
        return $result;
    }

    function awardList(){
        $username = Session::get('userNameKey');
        $result  = member_earn::where('userName',$username)->where('type','a&r')->get();
        return $result;
    }

    function membershipList(){
        $username = Session::get('userNameKey');
        $result  = member_earn::where('userName',$username)->where('type','member')->get();
        return $result;
    }

    function trainCertDelete( $id){
        //$id=$request->input('id');
        $result=member_earn::where('id','=',$id)->delete();

        if($result == true){
            return "200";
        }else{
            return "304"; //Not Modified
        }
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
                    return "200"; //Success
                }else{
                    return "304";//Not Modified
                }
            }else{
                return "400";//Bad Request
            }
    }

    function authUser($user,$pass){
        $userLogin  = admin::where('user_name',$user)->first('password');
        $hashedPassword = $userLogin->password ;
        if (Hash::check($pass, $hashedPassword)) {
            //ACTION
        }else{
            return "401";
        }
        return $hashedPassword;
    }
}
