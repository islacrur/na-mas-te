<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|max:255|min:3',
            'description' => 'required|max:255|min:15',
            'price' => 'required|numeric|min:1|max:999.99',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'allergens' => 'required|array',
            'allergens.*' => 'integer|exists:allergens,id',
            'status' => 'required|in:available,not_available',
            'id_category' => 'required|integer|exists:categories,id',
            'stock' => 'required|integer|min:0|max:100',
    ];
    
    }
}