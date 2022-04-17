<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Organisation;

class OrganisationController extends Controller
{
    public function index()
    {
        return Organisation::all();
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'org' => 'required'
        ]);

        $Organisation = Organisation::create($request->all());

        return response()->json($Organisation, 201);
    }
}
