<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Add New User') }}
        </h2>
    </x-slot>

    <div class="max-w-7xl mx-auto py-12">
        <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg p-6">
                <!-- @if(session('success'))
                    <div class="mb-4 text-green-600">
                        {{ session('success') }}
                    </div>
                @endif -->

                <form method="POST" action="{{ route('admin.users.store') }}">
                    @csrf

                    <div class="flex justify-between flex-wrap gap-6">
                        <!-- Name -->
                        <div class="w-[50%]" style="width: 50%">
                            <x-input-label for="name" :value="__('Name')" />
                            <x-text-input class="w-full" id="name" type="text" name="name" value="{{ old('name') }}" required autofocus />
                            <x-input-error :messages="$errors->get('name')" />
                        </div>

                        <!-- Email -->
                        <div class="w-1/2" style="width: 50%">
                            <x-input-label for="email" :value="__('Email')" />
                            <x-text-input class="w-full" id="email" type="email" name="email" value="{{ old('email') }}" required />
                            <x-input-error :messages="$errors->get('email')" />
                        </div>
                    </div>
                    <div class="flex justify-between flex-wrap gap-6">
                        <!-- Password -->
                        <div class="mt-4" style="width: 50%">
                            <x-input-label for="password" :value="__('Password')" />
                            <x-text-input class="w-full" id="password" type="password" name="password" required />
                            <x-input-error :messages="$errors->get('password')" />
                        </div>

                        <!-- Confirm Password -->
                        <div class="mt-4" style="width: 50%">
                            <x-input-label for="password_confirmation" :value="__('Confirm Password')" />
                            <x-text-input class="w-full" id="password_confirmation" type="password" name="password_confirmation" required />
                            <x-input-error :messages="$errors->get('password_confirmation')" />
                        </div>
                    </div>

                    <!-- Role -->
                    <div class="mt-4">
                        <x-input-label for="role" :value="__('Role')" />
                        <select name="role" id="role" class="block w-full border-gray-300 rounded-md shadow-sm">
                            <option value="admin">Admin</option>
                            <option value="moderator">Moderator</option>
                            <option value="user">User</option>
                        </select>
                        <x-input-error :messages="$errors->get('role')" />
                    </div>

                    <div class="flex items-center justify-end mt-4">
                        <x-primary-button>
                            {{ __('Create User') }}
                        </x-primary-button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</x-app-layout>
