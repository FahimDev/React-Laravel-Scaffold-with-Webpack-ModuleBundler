<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class research extends Model
{
    protected $table = 'research';
    protected $primaryKey = 'id';
    public $incrementing = true;
    protected $keyType = 'int';
    public $timestamps = true;
    protected $dateFormat = 'U';
}
