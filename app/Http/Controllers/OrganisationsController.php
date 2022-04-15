<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Organisation;

class OrganisationsController extends Controller
{
    public function index()
    {
        return Organisation::all();
    }
}
