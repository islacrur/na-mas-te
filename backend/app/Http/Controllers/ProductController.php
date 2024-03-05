<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Http\Requests\ProductRequest;
use Illuminate\Http\JsonResponse;

class ProductController extends Controller
{
    public function index():JsonResponse
    {
        $products = Product::all();
        return response()->json($products, 200);

    }

    public function store(ProductRequest $request): JsonResponse
    {
        $product = Product::create($request->except('allergens'));
        $product->allergens()->sync($request->allergens);

        return response()->json([
            'success' => true,
            'data' => $product
        ], 201);
    }

    public function show(string $id):JsonResponse
    {
        $product = Product::find($id);
        return response()->json($product, 200);
    }

    public function update(ProductRequest $request, string $id): JsonResponse
{
    $product = Product::find($id);
    $product->update($request->except('allergens'));
    $product->allergens()->sync($request->allergens);

    return response()->json([
        'success' => true,
        'data' => $product
    ], 200);
}

    public function destroy(string $id):JsonResponse
    {
        Product::find($id)->delete();
        return response()->json([
            'success' => true
        ], 200);
    }

}