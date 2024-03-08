<?php

namespace Tests\Feature;

// use App\Http\Controllers\ProductController;
use Tests\TestCase;
use App\Models\Bill;
use App\Models\Product;
use App\Models\User;

use Faker\Factory as Faker;
use Illuminate\Support\Facades\Schema;

class BillControllerTest extends TestCase
{
   
   public function test_bills_table_is_created()
   {
        $this->artisan('migrate');
        $this->assertTrue(Schema::hasTable('bills'));
        $this->assertTrue(Schema::hasTable('users'));
        $this->assertTrue(Schema::hasTable('products_bills'));
    }
    
   /*  public function test_add_to_cart()
   {
    $faker = Faker::create();
    $product = Product::create([
            'name' => $faker->name,
            'description' => 'This is a test product.',
            'price' => 19.99,
            'status' => 'available',
            'id_category' => 1,
            'stock' => 10,
        ]);

    $user = User::create([
        'name' => 'Test',
        'surname' => 'User',
        'phone_number' => '1234567890',
        'email' => $faker->unique()->safeEmail,
        'password' => bcrypt('password'), 
        'address' => '123 Test Street',
    ]);
    
    $response = $this->post('api/cart/add', [
        'id_product' => $product->id,
        'units' => 1,
        'id_user' => $user->id,
    ]);
    $this->assertEquals(201, $response->getStatusCode());

    if ($response->getStatusCode() === 201) {
        $this->assertDatabaseHas('products_bills', [
            'id_bill' => Bill::latest()->first()->id,
            'id_product' => $product->id,
        ]);
    }
   }
 *//* 
public function test_view_cart()
{
    $faker = Faker::create();

    $product = Product::create([
        'name' => $faker->name,
        'description' => 'This is a test product.',
        'price' => 19.99,
        'status' => 'available',
        'id_category' => 1,
        'stock' => 10,
    ]);

    $user = User::create([
        'name' => 'Test',
        'surname' => 'User',
        'phone_number' => '1234567890',
        'email' => $faker->unique()->safeEmail,
        'password' => bcrypt('password'), 
        'address' => '123 Test Street',
    ]);
    
    $bill = Bill::create([
        'units' => 10,
        'total_sale_price' => 100.00,
        'sale_date' => now(),
    ]);

    $response = $this->get('/api/cart/view');

    $response->assertStatus(200);
}*/
} 