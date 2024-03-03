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
        Schema::create('products_bills', function (Blueprint $table) {
            $table->unsignedBigInteger('id_product');
            $table->unsignedBigInteger('id_bill');
            $table->tinyInteger('units');
            $table->double('price');
            $table->timestamps();

            $table->foreign('id_product')->references('id')->on('products');
            $table->foreign('id_bill')->references('id')->on('bills');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products_bills');
    }
};
