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

    $bill = Bill::create([
        'units' => $validatedData['units'],
        'total_sale_price' => $product->price * $validatedData['units'],
        'sale_date' => now(),
    ]);

    $productBill = $bill->productBill()->create([
        'id_product' => $product->id,
        'units' => $validatedData['units'],
        'price' => $product->price,
    ]);

    return response()->json($productBill, 201);
}


public function confirmCart(Request $request)
{
    $validatedData = $request->validate([
        'id_bill' => 'required|exists:bills,id',
    ]);

    $bill = Bill::find($validatedData['id_bill']);

    $bill->update([
    ]);

    return response()->json($bill, 200);
}
public function viewCart()
{
    $bill = Bill::latest()->first();

    if (!$bill) {
        return response()->json('El carrito de compras está vacío');
    }

    $products = $bill->productBill()->with('product')->get();

    return response()->json($products);
}
}