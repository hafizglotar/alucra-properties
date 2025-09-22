<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'Admin User',
            'email' => 'admin@admin.com',
            'password' => Hash::make('admin'),
            'role' => 'admin',
        ]);

        User::create([
            'name' => 'Moderator User',
            'email' => 'md@user.com',
            'password' => Hash::make('muser'),
            'role' => 'moderator',
        ]);

        User::create([
            'name' => 'Normal User',
            'email' => 'user@user.com',
            'password' => Hash::make('nuser'),
            'role' => 'user',
        ]);

        User::create([
            'name' => 'Hafiz',
            'email' => 'hafiz@hafiz.com',
            'password' => Hash::make('hafiz'),
            'role' => 'user',
        ]);

    }
}
