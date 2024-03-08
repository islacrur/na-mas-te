<?php

namespace Tests\Feature;

use Tests\TestCase;
use Database\Seeders\CategorySeeder;
use App\Models\Product;
use App\Models\Category;
use Faker\Factory as Faker;
use Illuminate\Support\Facades\Schema;

class ProductControllerTest extends TestCase
{
    public function test_products_table_is_created()
    {
        $this->artisan('migrate');
        $this->assertTrue(Schema::hasTable('products'));
    }
    
    public function test_store_new_product(): void
    {
        $this->seed(CategorySeeder::class);
        $faker = Faker::create();
        $id_category = Category::first()->id;

        $response = $this->post('api/product', [
            'name' => $faker->name,
            'description' => 'This is a test product.',
            'price' => 19.99,
            'status' => 'available',
            'id_category' => $id_category,
            'stock' => 10,
        ]);
        
        $response->assertStatus(201);
    }
    
    public function test_index_get_all_products(): void
    { 
        $response = $this->get('/');
        $response->assertStatus(200);
    }

    public function test_show_one_product(): void
    { 
        $this->seed(CategorySeeder::class);
        $faker = Faker::create();
        $id_category = Category::first()->id;
        $product = Product::create([
            'name' => $faker->name,
            'description' => 'This is a test product.',
            'price' => 19.99,
            'status' => 'available',
            'id_category' => $id_category,
            'stock' => 10,
        ]);

        $response = $this->get("/api/product/{$product->id}");
        $response->assertStatus(200);
    }

    public function test_update_one_product(): void
    { 
        $this->seed(CategorySeeder::class);
        $faker = Faker::create();
        $id_category = Category::first()->id;
        $product = Product::create([
            'name' => $faker->name,
            'description' => 'This is a test product.',
            'price' => 19.99,
            'status' => 'available',
            'id_category' => $id_category,
            'stock' => 10,
        ]);

        $updateproduct =[
            'name' => $faker->name,
            'description' => 'Este es un producto de prueba',
            'price' => 15.50,
            'status' => 'not_available',
            'id_category' => $id_category,
            'stock' => 8,
        ];

        $response = $this->put("/api/product/{$product->id}",$updateproduct);
        $response->assertStatus(200);
    }
    
    public function test_delete_an_existing_product(): void
    {
        $this->seed(CategorySeeder::class);
        $faker = Faker::create();
        $id_category = Category::first()->id;
        $product = Product::create([
            'name' => $faker->name,
            'description' => 'This is a test product.',
            'price' => 19.99,
            'status' => 'available',
            'id_category' => $id_category,
            'stock' => 10,
        ]);

        $response = $this->delete("/api/product/{$product->id}");
        $response->assertStatus(200);
    }
}