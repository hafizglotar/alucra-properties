'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { usePropertyListings } from '@/hooks/usePropertyListing';

const PropertyDetailsPage = () => {
    const { id } = useParams();
    const { data, isLoading, isError } = usePropertyListings({ page: 1, per_page: 1000 });
    const property = data?.properties.find(prop => prop.id === parseInt(id));

    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
    const [successMessage, setSuccessMessage] = useState('');
    const [errors, setErrors] = useState({});

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error loading property</p>;
    if (!property) return <p>Property not found</p>;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        const propertyId = property.id; // or whatever property you're sending

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contacts`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData, // { name, email, phone, message }
                    property_id: propertyId,
                }),
            });

            const result = await res.json();

            if (!res.ok) {
                console.error('Validation errors:', result.errors);
                alert('Failed to submit form.');
                return;
            }

            alert(result.message || 'Message sent successfully!');
            setFormData({ name: '', email: '', phone: '', message: '' });

        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Something went wrong.');
        }
    };
    


    return (
        <div className="max-w-7xl mx-auto py-10 space-y-8">
            <h1 className="text-3xl font-bold">{property.title}</h1>
            <p className="text-gray-700">{property.category} - {property.location}</p>
            <p className="text-xl font-semibold">AED {Number(property.price).toLocaleString('en-US')}</p>

            {property.image && (
                <div className="w-full h-[400px] relative my-6">
                    <Image
                        src={`http://admin.test/storage/${property.image}`}
                        alt={property.title}
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </div>
            )}

            <p className="text-gray-700">{property.description}</p>

            <div className="mt-10">
                <h2 className="text-2xl font-semibold mb-4">Contact Agent</h2>
                {successMessage && <p className="text-green-600 mb-4">{successMessage}</p>}
                <form onSubmit={handleSubmit} className="grid gap-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="border p-2 rounded"
                    />
                    {errors.name && <p className="text-red-600">{errors.name}</p>}

                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="border p-2 rounded"
                    />
                    {errors.email && <p className="text-red-600">{errors.email}</p>}

                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone (optional)"
                        value={formData.phone}
                        onChange={handleChange}
                        className="border p-2 rounded"
                    />

                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        className="border p-2 rounded"
                    />

                    <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PropertyDetailsPage;
