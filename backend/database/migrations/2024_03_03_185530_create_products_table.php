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
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('description');
            $table->double('price');
            $table->binary('image')->nullable();
            $table->unsignedBigInteger('id_allergen');
            $table->enum('status', ['available', 'not_available']);
            $table->unsignedBigInteger('id_category');
            $table->timestamps();

            $table->foreign('id_allergen')->references('id')->on('allergens');
            $table->foreign('id_category')->references('id')->on('categories');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
