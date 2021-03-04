<?php

namespace App\Http\Controllers;
use App\Mail\RecoverMail;
use App\Model\admin;
use App\Model\member_info;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class recoverPassControl extends Controller
{
    function getPrKey(Request $request){
        $user = $request -> username;
        $mail = $request -> mail;
        $eMail = member_info::where('userName',$user)->first('eMail');
        if($eMail == true){
            $eMail = $eMail -> eMail ;
            if($eMail == $mail){
                $key  = admin::where('user_name',$user)->first('token_element');
                if($key == true){
                    $key = $key -> token_element;
                    $url = url("recover-mail/$key") ;
                    Mail::to($mail)->send(new RecoverMail($url));

                    return '200';
                }else{
                    return '204';  //No content
                }
            }else{
                return '401';
            }
        }else{
            return '404';
        }

    }
}
