<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product_Bill extends Model
{
      use HasFactory;
    protected $guarded = [];
    protected $table = 'product_bills'; 

    public function product(){
        return $this->belongsTo(Product::class); 
    }

    public function bill(){
        return $this->belongsTo(Bill::class); 
    }

}