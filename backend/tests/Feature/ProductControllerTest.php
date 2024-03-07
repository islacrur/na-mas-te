<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Models\Product;

class ProductControllerTest extends TestCase
{
    use RefreshDatabase;
    /**
     * A basic test example.
     */
    public function test_index_get_all_products(): void
    { 
    
        $response = $this->get('/');

        $response->assertStatus(200);
    }

    public function test_index_get_all_products_returns_a_successful_response(): void
    { 
    
        $response = $this->get('/');

        $response->assertStatus(200);
    }
}