<?php
 
namespace App\Http\Controllers;
 
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
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
        // set up the required fields and restrictions
        $Data = $this->validate($request, [
            'name' => 'required',
            'email' => 'required|unique:users|max:255|email',
            'password' => 'required',
            'role_id' => 'required',
            'organisation_id' => 'required'
        ]);

        $User = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role_id' => $request->role_id,
            'organisation_id' => $request->organisation_id
        ]);

        // return the user to the requester - in this case the view with other needed data such as organisation
        $Data =  DB::table('users')
        ->join('roles', 'users.role_id', '=', 'roles.id')
        ->join('organisations', 'users.organisation_id', '=', 'organisations.id')
        ->select('users.*', 'organisations.org', 'roles.role')
        ->where('users.id', '=', $User->id) // get the user id of the last inserted record
        ->get();

        return response()->json($Data, 201);
    }
}