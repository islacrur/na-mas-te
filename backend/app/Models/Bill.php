<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bill extends Model
{
    use HasFactory; 
    protected $guarded = [];
    public function productBill(){
    return $this->hasMany(Product_Bill::class, 'id_bill'); 
    }
}