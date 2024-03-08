<?php

namespace Tests\Feature;

use App\Http\Controllers\ProductController;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Models\Product;

use Faker\Factory as Faker;
use Illuminate\Support\Facades\Schema;

class ProductControllerTest extends TestCase
{
   // use RefreshDatabase;
   
    // public function test_index_get_all_products(): void
    // { 
    
    //     $response = $this->get('/');

    //     $response->assertStatus(200);
    // }

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
}