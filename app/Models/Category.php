<?php

namespace App\Models;

class Category extends Model
{
    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function items()
    {
        return $this->hasMany(Item::class);
    }

    /**
     * @param Item $item
     * @return false|\Illuminate\Database\Eloquent\Model
     */
    public function addItem(Item $item)
    {
        return $this->items()->save($item);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
