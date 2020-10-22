<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Apartment;
use App\Model;
use Faker\Generator as Faker;

$factory->define(Apartment::class, function (Faker $faker) {
    return [
      'title'  => $faker -> sentence(),
      'lat'    => $faker -> latitude($min = 41.8, $max = 41.9),
      'lng'    => $faker -> longitude($min = 12.4, $max = 12.5)
    ];
});
