<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FoodsController extends Controller
{
    protected function show() {
        return view('grid', ['foods' => \App\Models\Foods::all()]);
    }
}