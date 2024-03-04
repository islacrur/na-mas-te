<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Bill>
 */
class BillFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'units' => $this->faker->randomNumber(1, 20),
            'total_sale_price' => $this->faker->randomFloat(2, 1, 100),
            'sale_date' => $this->faker->dateTimeThisMonth(),
            'id_user' => $this->faker->numberBetween(1, 6),
        ];
    }
}
