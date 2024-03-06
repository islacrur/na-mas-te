<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\AllergenProduct>
 */
class Allergen_ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
          'id_allergen' => $this->faker->numberBetween(1, 14),
          'id_product' => $this->faker->numberBetween(1, 10),
        ];
    }
}