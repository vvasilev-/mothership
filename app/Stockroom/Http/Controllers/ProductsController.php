<?php

namespace App\Stockroom\Http\Controllers;

use App\Core\Http\Controllers\Controller;

class ProductsController extends Controller
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
     * Create a new product.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        abort(501);
    }
}
