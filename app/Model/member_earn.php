<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class member_earn extends Model
{
    protected $table = 'member-achievement';
    protected $primaryKey = 'id';
    public $incrementing = true;
    protected $keyType = 'int';
    public $timestamps = false;
    protected $dateFormat = 'U';
}
