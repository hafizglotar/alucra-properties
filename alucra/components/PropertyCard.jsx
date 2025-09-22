'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PinLocationIcon from './Icons/PinLocationIcon';


const PropertyCard = ({ property }) => {
    const [loaded, setLoaded] = useState(false);

    const {
        id,
        image,
        title,
        location,
        price,
        category,
    } = property;

    const formattedPrice = Number(price).toLocaleString('en-US');

    const imageUrl = image ? `http://admin.test/storage/${image}` : '/images/imagePlaceholder.jpg';

    return (
        <div className="relative border border-[#ECEDF1] rounded-xl overflow-hidden">
            <div className="relative">
                <div className="propertyCardImg relative w-full h-[280px] overflow-hidden">
                    {!loaded && (
                        <Image
                            src="/images/imagePlaceholder.jpg"
                            alt="placeholder"
                            width={1000}
                            height={1000}
                            className="absolute top-0 left-0 object-cover w-full h-full z-0"
                        />
                    )}
                    <Image
                        className={`object-cover w-full h-full transition-opacity duration-500 ${
                            loaded ? 'opacity-100' : 'opacity-0'
                        } absolute top-0 left-0`}
                        src={imageUrl}
                        alt={title}
                        width={1000}
                        height={1000}
                        onLoad={() => setLoaded(true)}
                    />
                </div>

                <div className="text-[#808083] p-4">
                    <h3 className="font-normal text-xl text-[#002a32] capitalize truncate overflow-hidden whitespace-nowrap">
                        {title}
                    </h3>
                    <p className="mb-3 text-sm capitalize">
                        Starting From <span className="uppercase">AED</span> {formattedPrice}
                    </p>

                    <div className="flex gap-4 mb-6">
                        <div className="flex items-center gap-1.5">
                            <PinLocationIcon width="20" height="20" stroke="#002a32" />
                            <span className="capitalize text-sm">{location}</span>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 w-3/4">
                            <Link
                                href="tel:+97145187555"
                                className="bg-[#002a32] border border-[#002a32] text-white text-sm font-normal px-6 py-2 rounded-full hover:bg-transparent hover:text-[#002a32] transition"
                            >
                                Call us
                            </Link>
                            <Link
                                href={`${property.id}`}
                                className="border border-[#002a32] text-[#002a32] text-sm font-normal px-6 py-2 rounded-full hover:bg-[#002a32] hover:text-white transition"
                            >
                                Details
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyCard;
