<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product_Bill extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function product(){
        return $this-> hasMany(Product::class); 
    }

    public function bill(){
        return $this-> hasOne(Bill::class); 
    }

}
