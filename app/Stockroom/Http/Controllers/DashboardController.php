<?php

namespace App\Stockroom\Http\Controllers;

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
     * Show the stockroom's dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
        return $this->respondWithChunk('stockroom/dashboard');
    }
}
