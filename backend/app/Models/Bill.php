<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bill extends Model
{
    use HasFactory; 
    protected $guarded = [];

    public function user(){
        return $this-> belongsTo(User::class); 
    }
    public function product_bill(){
        return $this-> hasOne(Product_Bill::class); 
    }
}
