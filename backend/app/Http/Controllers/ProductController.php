<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Http\Requests\ProductRequest;
use Illuminate\Http\JsonResponse;

class ProductController extends Controller
{
    public function index():JsonResponse
    {
       //$products = Product::all();
        return response()->json(Product::all(), 200);

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

    // public function store(ProductRequest $request):JsonResponse
    // {
    //     $product = new Product;
    //     $product -> name = $request -> name;
    //     $product ->save();

    //     return response()->json([
    //         'success' => true,
    //         'data' => $product
    //     ], 201);
    // }

    public function show(string $id):JsonResponse
    {
        $product = Product::find($id);
        return response()->json($product, 200);
    }

    public function update(ProductRequest $request, string $id):JsonResponse
    {
        $product = Product::find($id);
        $product->name = $request->name;
        $product->description = $request->description;
        $product->price = $request->price;
        $product->image = $request->image;
        $product->allergen = $request->allergen;
        $product->status = $request->status;
        $product->category = $request->category;
        $product->stock = $request->stock;
        $product->save();

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