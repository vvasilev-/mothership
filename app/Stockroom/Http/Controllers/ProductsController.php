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

    /**
     * Update a product.
     *
     * @param  \App\Core\Http\Requests\CreateProductRequest  $request
     * @param  \App\Stockroom\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
        $product->load('variations');

        $inputVariations = collect($request->input('variations'));
        $storedVariations = $product->getRelation('variations');

        $inputVariationsIds = $inputVariations->map->id;
        $storedVariationsIds = $storedVariations->map->id;

        $variationsToCreate = $inputVariations->filter(function($variation) {
            return !isset($variation['id']);
        });


        dd($inputVariationsIds->toArray());
    }
}
