<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Bill;
use App\Models\Product;
use Illuminate\Http\JsonResponse;
use App\Http\Requests\StoreBillRequest;

class BillController extends Controller
{
    public function index(): JsonResponse
    {
        $bills = Bill::with('productBill.product')->get();
        return response()->json($bills, 200);
    }

    public function store(StoreBillRequest $request): JsonResponse
    {
        $validatedData = $request->validated();

        $product = Product::find($validatedData['id_product']);

        $bill = new Bill;
        $bill->units = $validatedData['units'];
        $bill->total_sale_price = $product->price * $validatedData['units'];
        $bill->sale_date = now();
        $bill->save();

        $productBill = $bill->productBill()->create([
            'id_product' => $validatedData['id_product'],
            'units' => $validatedData['units'],
            'price' => $product->price,
        ]);
        return response()->json([
            'bill' => $bill,
            'productBill' => $productBill,
        ], 201);
    }

    public function addToCart(Request $request): JsonResponse
    {
        $validatedData = $request->validate([
            'id_product' => 'required|exists:products,id',
            'units' => 'required|integer|min:1',
        ]);

        $product = Product::find($validatedData['id_product']);

        $cart = session()->get('cart', []);

        if (isset($cart[$validatedData['id_product']])) {
            $cart[$validatedData['id_product']]['units'] += $validatedData['units'];
        } else {
            $cart[$validatedData['id_product']] = [
                'id' => $product->id,
                'name' => $product->name,
                'price' => $product->price,
                'units' => $validatedData['units'],
            ];
        }

        session()->put('cart', $cart);

        return response()->json(['cart' => $cart], 200);
    }

    public function viewCart(): JsonResponse
    {
        $cart = session()->get('cart', []);

        return response()->json(['cart' => $cart], 200);
    }

    public function show(string $id): JsonResponse
    {
        $bill = Bill::with('productBill.product')->find($id);

        if (!$bill) {
            return response()->json(['error' => 'Bill not found'], 404);
        }

        return response()->json($bill, 200);
    }

    public function update(Request $request, string $id): JsonResponse
    {
        $validatedData = $request->validate([
            'id_product' => 'required|exists:products,id',
            'units' => 'required|integer|min:1',
        ]);

        $product = Product::find($validatedData['id_product']);

        $bill = Bill::find($id);
        $bill->units = $validatedData['units'];
        $bill->total_sale_price = $product->price * $validatedData['units'];
        $bill->save();

        $productBill = $bill->productBill()->where('id_product', $validatedData['id_product'])->first();
        $productBill->units = $validatedData['units'];
        $productBill->price = $product->price;
        $productBill->save();

        return response()->json([
            'bill' => $bill,
            'productBill' => $productBill,
        ], 200);
    }

    public function destroy(string $id): JsonResponse
    {
        $bill = Bill::find($id);
        if (!$bill) {
            return response()->json(['error' => 'Bill not found'], 404);
        }
        $bill->delete();
        return response()->json([
            'success' => true
        ], 200);
    }
}