<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class member_info extends Model
{
    protected $table = 'member-portal';
    protected $primaryKey = 'id';
    public $incrementing = true;
    protected $keyType = 'int';
    public $timestamps = false;
    protected $dateFormat = 'U';
}
