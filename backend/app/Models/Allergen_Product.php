<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Allergen_Product extends Model
{
    use HasFactory;
    protected $table = 'allergens_products';

    public function product(){
        return $this-> belongsToMany(Product::class); 
    }

    public function allergen(){
        return $this-> belongsToMany(Allergen::class); 
    }

}
