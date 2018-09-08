<?php

namespace App\Core\Http\Controllers;

use App\Core\Http\Controllers\Controller;

class DashboardController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application's dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
        return $this->respondWithChunk('core/views/dashboard');
    }
}
