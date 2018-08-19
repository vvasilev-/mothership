<?php

namespace App\Core\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Laracasts\Utilities\JavaScript\JavaScriptFacade;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    /**
     * Send a response back to the browser with correct JS chunk.
     *
     * @param  string $chunk
     * @return \Illuminate\Http\Response
     */
    protected function respondWithChunk($chunk)
    {
        JavaScriptFacade::put([
            'chunk' => $chunk,
        ]);

        return view('layouts.app');
    }
}
