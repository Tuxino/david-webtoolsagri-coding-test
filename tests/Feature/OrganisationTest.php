<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Str;
use Tests\TestCase;

class OrganisationTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_org_created()
    {
        $response = $this->postJson('/api/organisation', [
            'org' => Str::random(20),
        ]);
        $response->assertStatus(201);
    }

    public function test_org_missing_name_not_created()
    {
        $response = $this->postJson('/api/organisation', [
            'org' => null,
        ]);
        $response->assertStatus(422);
    }
}
