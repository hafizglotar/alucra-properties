<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PropertyController;
use App\Http\Controllers\Admin\PropertyController as AdminPropertyController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\Admin\UserController;

require __DIR__.'/auth.php';

Route::get('/', function () {
    return view('auth/login');
});

Route::get('/submissions', [ContactController::class, 'index'])->name('submissions.index');

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});




Route::middleware(['auth'])->prefix('admin')->group(function () {
    // Users
    Route::get('/users', [UserController::class, 'index'])->name('admin.users.index'); 
    Route::get('/users/create', [UserController::class, 'create'])->name('admin.users.create'); 
    Route::post('/users', [UserController::class, 'store'])->name('admin.users.store'); 
    Route::delete('/users/{id}', [UserController::class, 'destroy'])->name('admin.users.destroy');
    // Route::delete('/users/{user}', [UserController::class, 'destroy'])->name('admin.users.destroy');
    // Properties
    Route::get('/properties', [AdminPropertyController::class, 'index'])->name('admin.properties.index');
    Route::get('/properties/create', [AdminPropertyController::class, 'create'])->name('admin.properties.create');
    Route::post('/properties', [AdminPropertyController::class, 'store'])->name('admin.properties.store');
    Route::get('/properties/{id}/edit', [AdminPropertyController::class, 'edit'])->name('admin.properties.edit');
    Route::put('/properties/{id}', [AdminPropertyController::class, 'update'])->name('admin.properties.update');
    Route::delete('/properties/{id}', [AdminPropertyController::class, 'destroy'])->name('admin.properties.destroy');
});
