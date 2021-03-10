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

    function publication(){
        $username = Session::get('userNameKey');
        $result  = member_earn::where('userName',$username)->where('type','pub')->get();
        return $result;
    }

    function membershipList(){
        $username = Session::get('userNameKey');
        $result  = member_earn::where('userName',$username)->where('type','member')->get();
        return $result;
    }

    function getByID($id){
        $username = Session::get('userNameKey');
        $result  = member_earn::where('id',$id)->get();
        //where('userName',$username)->
        return $result;
    }

    function trainCertDelete(Request $request){
        $id =$request->input('id');
        $result=member_earn::where('id','=',$id)->delete();

        if($result == true){
            return "200"; //Success
        }else{
            return "304"; //Not Modified
        }
    }

    function updateFame(Request $request){
        $user = Session::get('userNameKey');
        $id =$request->input('id');
        $type=$request->input('type');
        //return "200";

        if($type == "member"){
            $title=$request->input('flexOne');
            $updateStatus = member_earn::where('userName',$user)->where('id',$id)->update(['membership' =>$title]);
            if($updateStatus){
                return "200";
            }else{
                return "304";
            }
        }
        elseif ($type == "pub"){
            $title=$request->input('flexOne');
            $institute=$request->input('flexTwo');
            $instructor=$request->input('flexThree');
            $updateStatus = member_earn::where('userName',$user)->where('id',$id)->update(['title' =>$title,'institution' =>$institute,'membership' =>$instructor]);
            if($updateStatus){
                return "200";
            }else{
                return "304";
            }
        }else{
            $title=$request->input('flexOne');
            $institute=$request->input('flexTwo');
            $instructor=$request->input('flexThree');
            $year=$request->input('flexFour');
            if($type == "t&c"){
                $updateStatus = member_earn::where('userName',$user)->where('id',$id)->update(['title' =>$title,'institution' =>$institute,'instructor' =>$instructor,'year' =>$year]);
                if($updateStatus){
                    return "200";
                }else{
                    return "304";
                }
            }else{
                $updateStatus = member_earn::where('userName',$user)->where('id',$id)->update(['title' =>$title,'prizePosition' =>$institute,'prizeCategory' =>$instructor,'year' =>$year]);
                if($updateStatus){
                    return "200";
                }else{
                    return "304";
                }
            }
        }

    }

    function trainCertCreate(Request $request){
        $user = Session::get('userNameKey');

        $type=$request->input('type');

            if($type == "t&c"){
                $title=$request->input('flexOne');
                $institute=$request->input('flexTwo');
                $instructor=$request->input('flexThree');
                $year=$request->input('flexFour');

                $result=member_earn::insert(['userName'=> $user,'type'=> $type,'title'=> $title,'institution'=> $institute,'instructor'=> $instructor,'year'=> $year]);

                if($result == true){
                    return "200";
                }else{
                    return "304"; //Not Modified
                }

            }else if($type == "a&r"){
                $title=$request->input('flexOne');
                $position=$request->input('flexTwo');
                $event=$request->input('flexThree');
                $year=$request->input('flexFour');

                $result=member_earn::insert(['userName'=> $user,'type'=> $type,'title'=> $title,'prizePosition'=> $position,'prizeCategory'=> $event,'year'=> $year]);

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
