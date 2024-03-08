<?php

namespace Tests\Feature;

// use App\Http\Controllers\ProductController;
use Tests\TestCase;
use App\Models\Product;

use Faker\Factory as Faker;
use Illuminate\Support\Facades\Schema;

class ProductControllerTest extends TestCase
{
   
   public function test_products_table_is_created()
   {
        // Ejecuta la migración
        $this->artisan('migrate');

        // Asegura que la tabla 'resources' exista en la base de datos
        $this->assertTrue(Schema::hasTable('products'));
    }
    
    public function test_store_new_product(): void
    {
        $faker = Faker::create();
        $response = $this->post('api/product', [
            'name' => $faker->name,
            'description' => 'This is a test product.',
            'price' => 19.99,
            'status' => 'available',
            'id_category' => 2,
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
    
        $faker = Faker::create();
        $response = Product::create([
                'name' => $faker->name,
                'description' => 'This is a test product.',
                'price' => 19.99,
                'status' => 'available',
                'id_category' => 2,
                'stock' => 10,
        ]);

        $response = $this->get("/api/product/{$response->id}");
        $response->assertStatus(200);
    }

    public function test_update_one_product(): void
    { 
        $faker = Faker::create();
        $product = Product::create([
                'name' => $faker->name,
                'description' => 'This is a test product.',
                'price' => 19.99,
                'status' => 'available',
                'id_category' => 2,
                'stock' => 10,
            ]);
        $updateproduct =[
            'name' => $faker->name,
            'description' => 'Este es un producto de prueba',
            'price' => 15.50,
            'status' => 'not_available',
            'id_category' => 3,
            'stock' => 8,
    ];

        $response = $this->put("/api/product/{$product->id}",$updateproduct);
        $response->assertStatus(200);

    }
    
}