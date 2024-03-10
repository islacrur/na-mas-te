<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function allergens_products(){
        return $this->hasMany(Allergen_Product::class);
    }
   
    public function category(){
        return $this->belongsTo(Category::class); 
    }


    public function productBills()
    {
        return $this->hasMany(Product_Bill::class, 'id_product');
    }
}