import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <div className='max-w-7xl mx-auto pt-10 mb-10'>
            <h1 className='text-3xl font-bold'>
                <Link href="/">Alucra Real Estate</Link>
            </h1>
        </div>
    )
}

export default Header