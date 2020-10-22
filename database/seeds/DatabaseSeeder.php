<?php

use Illuminate\Database\Seeder;
use App\Apartment;
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(ApartmentSeeder::class);
    }
}
