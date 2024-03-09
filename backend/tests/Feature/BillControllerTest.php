<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\Bill;
use App\Models\Product;

class BillControllerTest extends TestCase
{
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