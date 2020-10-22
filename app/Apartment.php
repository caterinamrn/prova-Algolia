<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;
class Apartment extends Model
{
  use Searchable;

    protected $fillable = [
      'title',
      'lat',
      'lng'
    ];
}
