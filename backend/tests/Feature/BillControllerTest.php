<?php

namespace Tests\Feature;

// use App\Http\Controllers\ProductController;
use Tests\TestCase;
use App\Models\Bill;
use App\Models\Product;

use Faker\Factory as Faker;
use Illuminate\Support\Facades\Schema;

class BillControllerTest extends TestCase
{
   
   public function test_bills_table_is_created()
   {
        // Ejecuta la migración
        $this->artisan('migrate');

        // Asegura que la tabla 'bills' exista en la base de datos
        $this->assertTrue(Schema::hasTable('bills'));
        $this->assertTrue(Schema::hasTable('users'));
        $this->assertTrue(Schema::hasTable('products_bills'));
    }
    
    public function test_add_to_cart()
   {
    $product = Product::where('id', '>', 0)->first();

    if (!$product) {
        throw new \Exception('Not found.');
    }
    $response = $this->post('api/cart/add', [
        'id_product' => $product->id,
        'units' => 1,
    ]);
    if ($response->getStatusCode() === 200) {
        $this->assertDatabaseHas('products_bills', [
            'id_bill' => Bill::latest()->first()->id,
            'id_product' => $product->id,
        ]);
    }
   }

   public function test_view_cart()
   {
    $bill = Bill::latest()->first()->id;

    if (!$bill) {
        throw new \Exception('Not found.');
    }

    $response = $this->get('/api/cart/view');

    $response->assertStatus(200);

    $response->assertJsonFragment(['bill' => $bill->toArray()]);

    if ($bill->products_bills) {
        $productBill = $bill->products_bills;
        $response->assertJsonFragment([
            'product_name' => $productBill->product->name,
            'quantity' => $productBill->units,
            'subtotal' => $productBill->units * $productBill->total_sale_price,
        ]);
    }
   }
}