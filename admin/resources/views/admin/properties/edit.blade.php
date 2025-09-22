<x-app-layout>
    <div class="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
        <h1 class="text-2xl font-bold mb-6">Edit Property</h1>

        <form action="{{ route('admin.properties.update', $property->id) }}" method="POST" enctype="multipart/form-data" class="space-y-4">
            @csrf
            @method('PUT')

            {{-- Title --}}
            <div>
                <label class="block text-gray-700 font-semibold mb-1">Title</label>
                <input type="text" name="title" value="{{ $property->title }}" required
                    class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400">
            </div>

            {{-- Image Upload --}}
            <div>
                <label class="block text-gray-700 font-semibold mb-1">Upload Image</label>
                <input type="file" name="image" accept="image/*"
                    class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400">

                @if($property->image)
                    <div class="mt-3">
                        <p class="text-sm text-gray-600">Current Image:</p>
                        <img src="{{ asset('storage/' . $property->image) }}" alt="Property Image" class="w-40 h-28 object-cover rounded shadow">
                    </div>
                @endif
            </div>

            {{-- Price --}}
            <div>
                <label class="block text-gray-700 font-semibold mb-1">Price</label>
                <input type="number" name="price" value="{{ $property->price }}" required
                    class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400">
            </div>

            {{-- Location --}}
            <div>
                <label class="block text-gray-700 font-semibold mb-1">Location</label>
                <input type="text" name="location" value="{{ $property->location }}" required
                    class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400">
            </div>

            {{-- Category --}}
            <div>
                <label class="block text-gray-700 font-semibold mb-1">Category</label>
                <input type="text" name="category" value="{{ $property->category }}" required
                    class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400">
            </div>

            {{-- Description --}}
            <div>
                <label class="block text-gray-700 font-semibold mb-1">Description</label>
                <textarea name="description" rows="4"
                    class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400">{{ $property->description }}</textarea>
            </div>

            {{-- Submit --}}
            <div class="mt-4">
                <button type="submit"
                    class="bg-green-600 text-white font-semibold px-6 py-2 rounded hover:bg-green-700 transition duration-200">
                    Update Property
                </button>
            </div>
        </form>
    </div>
</x-app-layout>
