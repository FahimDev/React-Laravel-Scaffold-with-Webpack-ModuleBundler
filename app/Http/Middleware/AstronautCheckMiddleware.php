<?php

namespace App\Http\Middleware;

use Closure;

class AstronautCheckMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if($request->session()->has('userNameKey')){
            return $next($request);
        }
        else{
            return redirect('/astronaut');
        }
    }
}
