<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class member_exp extends Model
{
    protected $table = 'member-qualification';
    protected $primaryKey = 'id';
    public $incrementing = true;
    protected $keyType = 'int';
    public $timestamps = true;
    protected $dateFormat = 'U';
}
