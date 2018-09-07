<?php

namespace App\Stockroom\Http\Controllers;

use Illuminate\Http\Request;
use App\Core\Http\Controllers\Controller;
use App\Stockroom\Http\Requests\CreateProductRequest;
use App\Stockroom\Models\Product;
use App\Stockroom\Models\ProductVariation;

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
     * @param  \App\Core\Http\Requests\CreateProductRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function create(CreateProductRequest $request)
    {
        $product = Product::create([
            'title' => $request->input('title'),
        ]);

        $product->variations()->createMany(
            $request->input('variations')
        );

        return response()->json([
            'redirect_url' => route('stockroom.dashboard'),
        ]);
    }
}
