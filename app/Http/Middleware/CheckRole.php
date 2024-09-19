<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CheckRole
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string  $role
     * @return mixed
     */
public function handle($request, Closure $next, $role)
{
    if (Auth::check() && Auth::user()->role === $role) {
        return $next($request);
    }

    // Redirect jika role tidak sesuai
    return redirect('/');
}

}
