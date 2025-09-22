'use client';

import React, { useState, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const queryClient = new QueryClient();

export default function RootLayout({ children }) {
    const pathname = usePathname();
    const isHome = pathname === '/';

    return (
        <html lang="en">
            <meta name="robots" content="noindex, nofollow" />
            <body>
                <QueryClientProvider client={queryClient}>
                    <Header />
                    <main className={`min-h-[600px] ${!isHome ? 'mt-[85px]' : ''}`}>
                        {children}
                    </main>
                    <Footer />
                </QueryClientProvider>
            </body>
        </html>
    );
}
