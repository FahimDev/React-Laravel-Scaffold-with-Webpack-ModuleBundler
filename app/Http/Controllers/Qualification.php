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

    function skillDelete(Request $request){
        $id =$request->input('id');
        $result=member_exp::where('id','=',$id)->delete();

        if($result == true){
            return "200"; //Success
        }else{
            return "304"; //Not Modified
        }
    }

    function createSkill(Request $request){

        $user = Session::get('userNameKey');

        $type=$request->input('type');


        if($type == "PE"){
            $title=$request->input('flexOne');
            $institute=$request->input('flexTwo');
            $start=$request->input('flexThree');
            $end=$request->input('flexFour');

            $result=member_exp::insert(['userName'=> $user,'type'=> $type,'experience'=> $title,'institution'=> $institute,'startYear'=> $start,'endYear'=> $end]);

            if($result == true){
                return "200";
            }else{
                return "304"; //Not Modified
            }

        }else if($type == "S&T"){
            $soft = $request->input('flexOne');

            $result=member_exp::insert(['userName'=> $user,'type'=> $type,'softwareAndTools'=> $soft]);

            if($result == true){
                return "200";
            }else{
                return "304";
            }

        }else if($type == "expSum"){
            $expSum = $request->input('flexOne');

            $result=member_info::where('userName',$user)->update(['expSummary'=> $expSum]);

            if($result == true){
                return "200";
            }else{
                return "304";
            }

        }else if ($type == "Skill"){

            $title = $request->input('flexOne');

            $skillSet = $request->input('flexTwo');

            $result=member_exp::insert(['userName'=> $user,'type'=> $type,'skillTitle'=> $title,'skillList'=> $skillSet]);

            if($result == true){
                return "200"; //Success
            }else{
                return "304";//Not Modified
            }
        }else{
            return "400";//Bad Request
        }
    }

}
