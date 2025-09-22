<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Submissions') }}
        </h2>
    </x-slot>
    <main class="">
        <div class="max-w-7xl mx-auto py-10">
            <h2 class="text-3xl font-bold mb-6 text-gray-800">Contact Form Submissions</h2>

            <div class="grid grid-cols-4 gap-6">
                @forelse($contacts as $contact)
                    <div class="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between hover:shadow-2xl transition duration-300">
                        <div>
                            <h3 class="text-xl font-semibold mb-2 text-gray-800">#{{ $contact->id }} - {{ $contact->name }}</h3>
                            <p class="text-gray-600 mb-1"><strong>Email:</strong> {{ $contact->email }}</p>
                            <p class="text-gray-600 mb-1"><strong>Phone:</strong> {{ $contact->phone ?? '-' }}</p>
                            <p class="text-gray-600 mb-1"><strong>Property ID:</strong> {{ $contact->property_id ?? '-' }}</p>
                            <p class="text-gray-700 mt-3"><strong>Message:</strong> {{ $contact->message ?? '-' }}</p>
                        </div>
                        <div class="text-right text-sm text-gray-400 mt-4">
                            Submitted: {{ $contact->created_at->format('d M Y, H:i') }}
                        </div>
                    </div>
                @empty
                    <p class="text-gray-600 col-span-full">No submissions found.</p>
                @endforelse
            </div>

        </div>
    </main>
</x-app-layout>