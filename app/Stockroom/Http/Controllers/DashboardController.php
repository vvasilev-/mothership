<?php

namespace App\Stockroom\Http\Controllers;

use Illuminate\Http\Request;
use App\Core\Http\Controllers\Controller;
use App\Stockroom\Http\Resources\ProductResource;
use App\Stockroom\Models\Product;

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
    public function show(Request $request)
    {
        $products = Product::with('variations')->paginate();
        $products = ProductResource::collection($products)->response()->getData();

        return $this->respondWithChunk('stockroom/views/dashboard', [
            'stockroom' => [
                'products' => $products,
            ],
        ]);
    }
}
