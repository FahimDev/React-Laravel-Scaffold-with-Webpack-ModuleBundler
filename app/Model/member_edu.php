<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class member_edu extends Model
{
    protected $table = 'member-academic';
    protected $primaryKey = 'id';
    public $incrementing = true;
    protected $keyType = 'int';
    public $timestamps = false;
    protected $dateFormat = 'U';
}
