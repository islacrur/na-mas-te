<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('allergens_products', function (Blueprint $table) {
            //$table->id();
            $table->unsignedBigInteger('id_product');
            $table->unsignedBigInteger('id_allergen');
            $table->timestamps();

            $table->foreign('id_product')->references('id')->on('products')->onDelete('cascade');
            $table->foreign('id_allergen')->references('id')->on('allergens')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('allergens_products');
    }
};