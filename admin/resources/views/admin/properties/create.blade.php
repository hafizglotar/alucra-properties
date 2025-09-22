<x-app-layout>
    <div class="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
        <h1 class="text-2xl font-bold mb-6">Add Property</h1>

        <form action="{{ route('admin.properties.store') }}" method="POST" enctype="multipart/form-data" class="space-y-4">
        @csrf
            <div>
                <label class="block text-gray-700 font-semibold mb-1">Title</label>
                <input type="text" name="title" value="{{ old('title') }}" required
                    class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400">
            </div>

            <div>
                <label class="block text-gray-700 font-semibold mb-1">Upload Image</label>
                <input type="file" name="image" accept="image/*"
                    class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400">
            </div>

            <div>
                <label class="block text-gray-700 font-semibold mb-1">Price</label>
                <input type="number" name="price" value="{{ old('price') }}" required
                    class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400">
            </div>

            <div>
                <label class="block text-gray-700 font-semibold mb-1">Location</label>
                <input type="text" name="location" value="{{ old('location') }}" required
                    class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400">
            </div>

            <div>
                <label class="block text-gray-700 font-semibold mb-1">Category</label>
                <input type="text" name="category" value="{{ old('category') }}" required
                    class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400">
            </div>

            <div>
                <label class="block text-gray-700 font-semibold mb-1">Description</label>
                <textarea name="description" rows="4"
                    class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400">{{ old('description') }}</textarea>
            </div>

            <div class="mt-4">
                <button type="submit"
                    class="bg-blue-600 text-white font-semibold px-6 py-2 rounded hover:bg-blue-700 transition duration-200">
                    Add Property
                </button>
            </div>
        </form>

    </div>
</x-app-layout>