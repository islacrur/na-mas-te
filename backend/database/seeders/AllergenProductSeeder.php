<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Allergen_Product;


class AllergenProductSeeder extends Seeder
{
    
    public function run(): void
    {
           Allergen_Product::factory(10)->create();
    
    }

//     public function run(): void
// {
//     $products = Product::all();
//     $allergens = Allergen::all();

//     foreach ($products as $product) {
//         // Obtener un número aleatorio de intolerancias para este producto
//         $randomAllergens = $allergens->random(rand(1, min(3, $allergens->count())));

//         // Adjuntar las intolerancias al producto si no están ya asociadas
//         foreach ($randomAllergens as $allergen) {
//             if (!$product->allergens()->where('id', $allergen->id)->exists()) {
//                 $product->allergens()->attach($allergen->id);
//             }
//         }
//     }
// }

}
