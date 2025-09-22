<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Property;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class PropertyController extends Controller
{
    // List all properties
    public function index()
    {
        $properties = Property::latest()->paginate(10);
        return view('admin.properties.index', compact('properties'));
    }

    // Show create form
    public function create()
    {
        return view('admin.properties.create');
    }

    // Store new property
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'image' => 'required|image|mimes:jpeg,webp,avif,JPG,PNG,png,jpg,gif|max:9048',
            'price' => 'required|numeric',
            'location' => 'required|string|max:255',
            'category' => 'required|string|max:255',
            'description' => 'nullable|string',
        ]);

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('properties', 'public'); 
            $validated['image'] = $path; // Save relative path in DB
        }

        Property::create($validated);

        return redirect()->route('admin.properties.index')->with('success', 'Property added successfully.');
    }    

    // Show edit form
    public function edit($id)
    {
        $property = Property::findOrFail($id);
        return view('admin.properties.edit', compact('property'));
    }

    // Update property
    public function update(Request $request, $id)
    {
        $property = Property::findOrFail($id);

        $data = $request->validate([
            'title' => 'required|string|max:255',
            'image' => 'nullable|image|mimes:jpeg,png,webp,jpg,gif|max:2048',
            'price' => 'required|numeric',
            'location' => 'required|string|max:255',
            'category' => 'required|string|max:255',
            'description' => 'nullable|string',
        ]);

        // Handle image upload if new file is provided
        if ($request->hasFile('image')) {
            // Delete old image if exists
            if ($property->image && Storage::disk('public')->exists($property->image)) {
                Storage::disk('public')->delete($property->image);
            }

            $path = $request->file('image')->store('properties', 'public');
            $data['image'] = $path;
        }

        $property->update($data);

        return redirect()->route('admin.properties.index')->with('success', 'Property updated successfully.');
    }

    // Delete property
    public function destroy($id)
    {
        $property = Property::findOrFail($id);

        // Delete image file if exists
        if ($property->image && Storage::disk('public')->exists($property->image)) {
            Storage::disk('public')->delete($property->image);
        }

        $property->delete();

        return redirect()->route('admin.properties.index')->with('success', 'Property deleted successfully.');
    }

    public function apiListing(Request $request)
    {
        $query = Property::query();

        // Apply filters
        if ($request->has('location')) {
            $query->where('location', 'LIKE', '%' . $request->location . '%');
        }

        if ($request->has('category')) {
            $query->where('category', $request->category);
        }

        if ($request->has('min_price')) {
            $query->where('price', '>=', $request->min_price);
        }

        if ($request->has('max_price')) {
            $query->where('price', '<=', $request->max_price);
        }

        if ($request->has('title')) {
            $query->where('title', 'LIKE', '%' . $request->title . '%');
        }

        // Paginate results (default 10 per page, can override via ?per_page=)
        $properties = $query->latest()->paginate($request->get('per_page', 10));

        return response()->json([
            'success' => true,
            'data' => $properties
        ]);
    }
    


}


