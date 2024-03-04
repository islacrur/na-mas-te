<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function stock(){
        return $this-> hasOne(Stock::class); 
    }

    public function allergen(){
        return $this-> hasMany(Allergen::class); 
    }

    public function category(){
        return $this-> belongsTo(Category::class); 
    }
}