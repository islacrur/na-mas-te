<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Allergen;

class AllergenSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Allergen::create(['name' => 'Huevos']);
        Allergen::create(['name' => 'Gluten']);
        Allergen::create(['name' => 'Crustáceos']);
        Allergen::create(['name' => 'Pescado']);
        Allergen::create(['name' => 'Cacahuete']);
        Allergen::create(['name' => 'Soja']);
        Allergen::create(['name' => 'Lácteos']);
        Allergen::create(['name' => 'Frutos con cáscara']);
        Allergen::create(['name' => 'Apio']);
        Allergen::create(['name' => 'Mostaza']);
        Allergen::create(['name' => 'Sésamo']);
        Allergen::create(['name' => 'Sulfitos']);
        Allergen::create(['name' => 'Altramuces']);
        Allergen::create(['name' => 'Moluscos']);
    }
}
