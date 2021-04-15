<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use DB;

class UserFoodsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('user_foods')->insert([
            'name' => 'Marc',
            'tag' => '1216720222',
        ]);

        DB::table('user_foods')->insert([
            'name' => 'Jim',
            'tag' => '2171383194',
        ]);

        DB::table('user_foods')->insert([
            'name' => 'Jamal',
            'tag' => '163243293',
        ]);
    }
}