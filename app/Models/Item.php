<?php

namespace App\Models;

class Item extends Models
{
    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    /**
     * @param $query
     * @param $categoryId
     * @return mixed
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
