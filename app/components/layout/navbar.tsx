"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Shop", href: "/shop" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className='fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between h-16 items-center'>
                    <Link href='/' className='flex items-center'>
                        <span className='text-2xl font-bold text-red-600'>
                            PlaySwipe
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className='hidden md:flex items-center space-x-8'>
                        {navigation.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className='text-gray-700 hover:text-gray-900 transition-colors'
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Link href='/game'>
                            <Button variant='destructive' size='sm'>
                                Play Online
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Navigation Button */}
                    <button
                        className='md:hidden'
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label='Toggle menu'
                    >
                        {isOpen ? (
                            <X className='h-6 w-6' />
                        ) : (
                            <Menu className='h-6 w-6' />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation Menu */}
                {isOpen && (
                    <div className='md:hidden'>
                        <div className='px-2 pt-2 pb-3 space-y-1'>
                            {navigation.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className='block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md'
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <div className='px-3 py-2'>
                                <Link href='/game'>
                                    <Button
                                        variant='destructive'
                                        size='sm'
                                        className='w-full'
                                    >
                                        Play Online
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
