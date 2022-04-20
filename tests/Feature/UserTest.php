<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Str;
use Tests\TestCase;
use App\Models\User;
// use WithFaker;

class UserTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    

    public function test_user_created()
    {
        $user = [
            'name' => Str::random(20),
            'email' => Str::random(20) . '@blah.com',
            'password' => '1234',
            'role_id' => 1,
            'organisation_id' => 1
        ];
        $response = $this->postJson('/api/user', $user);
        $response->assertStatus(201);
    }

    public function test_user_missing_name_not_created()
    {
        $user = [
            'name' => '',
            'email' => 'a@b.com',
            'password' => '1234',
            'role_id' => 1,
            'organisation_id' => 1
        ];
        $response = $this->postJson('/api/user', $user);
        $response->assertStatus(422);
    }

    public function test_user_missing_email_not_created()
    {
        $user = [
            'name' => 'new user',
            'email' => '',
            'password' => '1234',
            'role_id' => 1,
            'organisation_id' => 1
        ];
        $response = $this->postJson('/api/user', $user);
        $response->assertStatus(422);
    }

    public function test_user_missing_password_not_created()
    {
        $user = [
            'name' => 'Jim Bob',
            'email' => 'a@b.com',
            'password' => null,
            'role_id' => 1,
            'organisation_id' => 1
        ];
        $response = $this->postJson('/api/user', $user);
        $response->assertStatus(422);
    }

    public function test_user_missing_role_id_not_created()
    {
        $user = [
            'name' => 'Jim Bob',
            'email' => 'a@b.com',
            'password' => '1234',
            'role_id' => null,
            'organisation_id' => 1
        ];
        $response = $this->postJson('/api/user', $user);
        $response->assertStatus(422);
    }

    public function test_user_missing_organisation_id_not_created()
    {
        $user = [
            'name' => 'Jim Bob',
            'email' => 'a@b.com',
            'password' => '1234',
            'role_id' => 1,
            'organisation_id' => null 
        ];
        $response = $this->postJson('/api/user', $user);
        $response->assertStatus(422);
    }

    public function test_user_missing_everything_not_created()
    {
        $user = [
            'name' => null,
            'email' => null,
            'password' => null,
            'role_id' => null,
            'organisation_id' => null 
        ];
        $response = $this->postJson('/api/user', $user);
        $response->assertStatus(422);
    }


}
