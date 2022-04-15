<?php
 
namespace App\Http\Controllers;
 
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\User;
 
class UsersController extends Controller
{
 
    public function index()
    {
        return User::all();
    }
 
    public function show(User $user)
    {
        return $user;
    }
 
    public function store(Request $request)
    {
        return response()->json(['message' => 'Create success'], 201);
    }
}