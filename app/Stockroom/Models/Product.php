<?php

namespace App\Stockroom\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model
{
    use SoftDeletes;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'stockroom_products';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title',
    ];

    /**
     * Association between the product and the variations.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function variations() {
        return $this->hasMany(ProductVariation::class, 'product_id');
    }
}
