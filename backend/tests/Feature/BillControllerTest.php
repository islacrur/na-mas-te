<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\Bill;
use App\Models\Product;
use App\Models\Category;

class BillControllerTest extends TestCase
{
    use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();

        // Ejecutar las migraciones
        $this->artisan('migrate');

        // Ejecutar el seeder de categorías
        $this->seed(\Database\Seeders\CategorySeeder::class);
    }

    public function testIndex()
    {
        $response = $this->getJson('/api/bills');

        $response->assertStatus(200);
    }

    public function testStore()
    {
        $product = Product::factory()->create();

        $response = $this->postJson('/api/bills', [
            'id_product' => $product->id,
            'units' => 1,
        ]);

        $response->assertStatus(201);
        $response->assertJsonStructure([
            'bill' => [
                'id', 'units', 'total_sale_price', 'sale_date'
            ],
            'productBill' => [
                'id', 'id_product', 'units', 'price'
            ]
        ]);
    }

    public function testShow()
    {
        $bill = Bill::factory()->create();

        $response = $this->getJson("/api/bills/{$bill->id}");

        $response->assertStatus(200);
    }

    public function testDestroy()
    {
        $bill = Bill::factory()->create();

        $response = $this->deleteJson("/api/bills/{$bill->id}");

        $response->assertStatus(200);
    }
}