<?php

namespace App\Http\Controllers;
use App\Mail\RecoverMail;
use App\Model\admin;
use App\Model\member_info;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;

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
                    $url = url("recover-mail/$user/$key") ;
                    Mail::to($eMail)->send(new RecoverMail($url));

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

    function resetPassWindow($user,$personalKey){
        $prvKey  = admin::where('user_name',$user)->first('token_element');
        if($prvKey){
            $prvKey = $prvKey -> token_element;
            if ($personalKey == $prvKey){
                return view('reset');
            }else{
                return 'Wrong Private key!';
            }
        }else{
            return 'Wrong user!';
        }
    }

    function resetPass(Request $request, $user, $key){

        $data = request()->validate([
            'newPassword' => 'required|max:10|min:6|confirmed',
        ]);

        $newPassword = $request -> newPassword;

        $result  = admin::where('user_name',$user)->first('token_element');
        if($result){
            $prvKey = $result->token_element;
            if($prvKey == $key){
                $hashed = Hash::make($newPassword, [
                    'memory' => 1024,
                    'time' => 2,
                    'threads' => 2,
                ]);

                $privateKey = Str::random(40);

                $updateStatus = admin::where('user_name',$user)->update(['password' =>$hashed,'token_element' =>$privateKey]);
                if($updateStatus){
                    return redirect('/astronaut');
                }else{
                    return 'NOT MODIFIED!';
                }

            }else{
                return 'Key Expired!';
            }
        }else{
            return 'User Unknown!';
        }
    }

}
