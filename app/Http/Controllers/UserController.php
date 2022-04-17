<?php
 
namespace App\Http\Controllers;
 
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Organisation;
use App\Models\Role;
use DB;
 
class UserController extends Controller
{
 
    public function index()
    {   
        return DB::table('users')
        ->join('roles', 'users.role_id', '=', 'roles.id')
        ->join('organisations', 'users.organisation_id', '=', 'organisations.id')
        ->select('users.*', 'organisations.org', 'roles.role')
        ->get();
    }
 
    public function show(User $user)
    {
        return $user;
    }
 
    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required',
            'email' => 'required|unique:users|max:255',
            'password' => 'required',
            'role_id' => 'required:in:1,2',
            'organisation_id' => 'required:in:1,2'
        ]);

        $User = User::create($request->all());

        return response()->json($User, 201);
    }
}