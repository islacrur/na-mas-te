<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Bill;
use App\Models\Product;

class BillController extends Controller
{
public function addToCart(Request $request)
{
    // Valida la solicitud.
    $validatedData = $request->validate([
        'id_product' => 'required|exists:products,id',
        'units' => 'required|integer|min:1',
    ]);

    // Busca el producto.
    $product = Product::find($validatedData['id_product']);

    // Crea una nueva factura o encuentra la última factura creada.
    $bill = Bill::latest()->firstOrCreate([
        'units' => $validatedData['units'],
        'total_sale_price' => $product->price * $validatedData['units'],
        'sale_date' => now(),
    ]);

    // Crea una nueva Product_Bill.
    $productBill = $bill->product_bill()->create([
        'id_product' => $product->id,
        'units' => $validatedData['units'],
        'price' => $product->price,
    ]);

    return response()->json($productBill, 201);
}


public function confirmCart(Request $request)
{
    // Valida la solicitud.
    $validatedData = $request->validate([
        'id_bill' => 'required|exists:bills,id',
        // Aquí puedes agregar validaciones para los datos del usuario.
    ]);

    // Busca la factura.
    $bill = Bill::find($validatedData['id_bill']);

    // Actualiza la factura con los datos del usuario.
    $bill->update([
        // Aquí puedes actualizar los campos de la factura con los datos del usuario.
    ]);

    return response()->json($bill, 200);
}
}