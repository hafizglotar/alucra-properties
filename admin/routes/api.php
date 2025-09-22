<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\PropertyController;
use App\Http\Controllers\ContactController;

Route::get('/properties', [PropertyController::class, 'apiListing']);

Route::post('/contacts', [ContactController::class, 'store']);
