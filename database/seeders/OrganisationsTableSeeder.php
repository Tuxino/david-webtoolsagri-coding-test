<?php

namespace Database\Seeders;

use App\Models\Organisation;
use Illuminate\Database\Seeder;

class OrganisationsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = \Faker\Factory::create();
 
        // Create some Orgs
        for ($i = 0; $i < 5; $i++) {
            Organisation::create([
                'name' => $faker->company
            ]);
        }
    }
}
