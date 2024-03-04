<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->word(),
            'description' => $this->faker->sentence(),
            'price' => $this->faker->randomNumber(2, 1, 50),
            'image' => $this->faker->image('public/storage/images',640,480, null, false),
            'id_allergen' => $this->faker->numberBetween(1, 14),
            'status' => $this->faker->randomElement(['available', 'not_available']),
           'id_category' => $this->faker->numberBetween(1, 4),
           'stock' => $this->faker->numberBetween(0, 100),
        ];
    }
}
