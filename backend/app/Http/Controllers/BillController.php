<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Bill;
use App\Models\Product;

class BillController extends Controller
{
public function addToCart(Request $request)
{
    $validatedData = $request->validate([
        'id_product' => 'required|exists:products,id',
        'units' => 'required|integer|min:1',
    ]);

    $product = Product::find($validatedData['id_product']);

    $bill = Bill::firstOrCreate(['status' => 'Processing']);

    $productBill = $bill->products_bills()->create([
        'id_product' => $product->id,
        'units' => $validatedData['units'],
        'total_sale_price' => $product->price * $validatedData['units'],
    ]);

    return response()->json($productBill, 201);
}
}