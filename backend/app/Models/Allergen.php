<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\Allergen_Product;


class Allergen extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function allergens_products(){
        return $this->hasMany(Allergen_Product::class);
    }

}