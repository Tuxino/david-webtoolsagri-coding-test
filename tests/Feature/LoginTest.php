<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class LoginTest extends TestCase
{
    use DatabaseTransactions;

    /**
     * @test
     */
    public function test_accept_user_valid_creds()
    {
        $user = User::factory()->create();

        $response = $this->post(
            route('login'),
            [
                'email' => $user->email,
                'password' => 'password',
            ],
        );

        $response->assertRedirect(route('home'));
    }

    /**
     * @test
     */
    public function test_reject_user_invalid_creds()
    {
        $user = User::factory()->create();

        $response = $this->post(
            route('login'),
            [
                'email' => $user->email,
                'password' => 'PASS',
            ],
        );

        $response->assertRedirect('/');
    }
}
