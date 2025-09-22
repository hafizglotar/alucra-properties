<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Property extends Model
{
    protected $fillable = [
        'title', 'image', 'price', 'location', 'category', 'description'
    ];

}
