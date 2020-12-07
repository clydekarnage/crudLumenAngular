<?php

namespace App\Models;

use Illuminate\Auth\Authenticatable;
use Laravel\Lumen\Auth\Authorizable;

class User extends Model
{
    use Authenticatable, Authorizable;

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function categories()
    {
        return $this->hasMany(Category::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function items()
    {
        return $this->hasMany(Item::class);
    }
    public function addCategory(Category $category)
    {
        return $this->categories()->save($category);
    }

    /**
     * @param Item $item
     * @param $category_id
     * @return mixed
     */
    public function addItem(Item $item, $category_id)
    {
        return $this->categories()->find($category_id)->items()->create([
            "name"=>$item->name,
            "description"=>$item->discription,
            "user_id"=>$this->id
        ]);
    }

    /**
     * @param $category_id
     * @param $itemName
     * @return mixed
     */
    public function hasDuplicateItem($category_id, $itemName)
    {
        return $this->categories()->find($category_id)->items()->where("name", $itemName)->count();
    }
}
