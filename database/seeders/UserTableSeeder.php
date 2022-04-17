<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Faker\Provider\Internet;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $faker = \Faker\Factory::create();
 
        // Make myself an Admin user
        User::create([
            'name' => 'David Aspden',
            'email' => 'daspden@gmail.com',
            'password' => Hash::make('P@ssw0rd'),
            'role_id' => 1,
            'organisation_id' => 1
        ]);


        // Create some Contractor users
        for ($i = 0; $i < 2; $i++) {
            User::create([
                'name' => $faker->name,
                'email' => $faker->email,
                'password' => Hash::make('P@ssw0rd'),
                'role_id' => $i+1,
                'organisation_id' => $i+1
            ]);
        }
    }
}
