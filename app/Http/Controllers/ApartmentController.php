<?php

namespace App\Http\Controllers;

use App\Apartment;
use Illuminate\Http\Request;

class ApartmentController extends Controller
{
  public function index() {

    $aparts = Apartment::all();
    return response()->json($aparts);
  }
}
