<?php

namespace App\Http\Controllers;
use App\Model\research;
use Illuminate\Http\Request;

class ResearchControl extends Controller{

    function researchList(){
        $result=research::all();
        return $result;
    }
}
