<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Profile;

class ProductUsage extends Model
{
    protected $table = 'product_usage';

    public function profile(){
        return $this->belongsTo(Profile::class, 'profile_name', 'name');
    }
}
