<?php

namespace App\Core\Http\Controllers;

use Illuminate\Foundation\Auth\ThrottlesLogins;
use Illuminate\Validation\ValidationException;
use App\Core\Http\Controllers\Controller;
use App\Core\Http\Requests\LoginRequest;

class LoginController extends Controller
{
    use ThrottlesLogins;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    /**
     * Show the application's login form.
     *
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
        return $this->respondWithChunk('core/login');
    }

    /**
     * Handle a login request to the application.
     *
     * @param  \App\Core\Http\Requests\LoginRequest  $request
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Http\Response|\Illuminate\Http\JsonResponse
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(LoginRequest $request)
    {
        // If the class is using the ThrottlesLogins trait, we can automatically throttle
        // the login attempts for this application. We'll key this by the username and
        // the IP address of the client making these requests into this application.
        if ($this->hasTooManyLoginAttempts($request)) {
            $this->fireLockoutEvent($request);

            return $this->sendLockoutResponse($request);
        }

        if ($this->attemptLogin($request)) {
            return $this->sendLoginResponse($request);
        }

         // If the login attempt was unsuccessful we will increment the number of attempts
        // to login and redirect the user back to the login form. Of course, when this
        // user surpasses their maximum number of attempts they will get locked out.
        $this->incrementLoginAttempts($request);

        return $this->sendFailedLoginResponse($request);
    }

     /**
     * Get the login username to be used by the controller.
     *
     * @return string
     */
    public function username()
    {
        return 'username';
    }

    /**
     * Attempt to log the user into the application.
     *
     * @param  \App\Core\Http\Requests\LoginRequest $request
     * @return bool
     */
    protected function attemptLogin(LoginRequest $request)
    {
        return auth()->attempt($request->only([
            'username',
            'password',
        ]));
    }

    /**
     * Send the response after the user was authenticated.
     *
     * @param  \App\Core\Http\Requests\LoginRequest $request
     * @return \Illuminate\Http\Response
     */
    protected function sendLoginResponse(LoginRequest $request)
    {
        $request->session()->regenerate();

        $this->clearLoginAttempts($request);

        return response()->json([
            'redirect_url' => '/'
        ]);
    }

    /**
     * Get the failed login response instance.
     *
     * @param  \App\Core\Http\Requests\LoginRequest  $request
     * @return \Symfony\Component\HttpFoundation\Response
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    protected function sendFailedLoginResponse(LoginRequest $request)
    {
        throw ValidationException::withMessages([
            $this->username() => [trans('auth.failed')],
        ]);
    }
}
