import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

const footerSections = [
    {
        title: "Product",
        links: [
            { label: "Features", href: "#features" },
            { label: "How to Play", href: "#how-to-play" },
            { label: "Buy Now", href: "#buy" },
        ],
    },
    {
        title: "Company",
        links: [
            { label: "About Us", href: "/about" },
            { label: "Contact", href: "/contact" },
            { label: "Privacy Policy", href: "/privacy" },
        ],
    },
    {
        title: "Support",
        links: [
            { label: "FAQ", href: "/faq" },
            { label: "Rules", href: "/rules" },
            { label: "Shipping", href: "/shipping" },
        ],
    },
];

export function Footer() {
    return (
        <footer className='bg-gray-900 text-gray-300'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
                <div className='grid md:grid-cols-4 gap-8'>
                    <div>
                        <Link
                            href='/'
                            className='text-2xl font-bold text-white'
                        >
                            PlaySwipe
                        </Link>
                        <p className='mt-4 text-sm'>
                            A fun and addictive card game for everyone.
                        </p>
                    </div>
                    {footerSections.map((section) => (
                        <div key={section.title}>
                            <h3 className='text-sm font-semibold text-white uppercase tracking-wider'>
                                {section.title}
                            </h3>
                            <ul className='mt-4 space-y-2'>
                                {section.links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className='text-gray-400 hover:text-white transition-colors'
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className='mt-8 pt-8 border-t border-gray-800'>
                    <div className='flex flex-col md:flex-row justify-between items-center'>
                        <p className='text-gray-400 text-sm'>
                            © {new Date().getFullYear()} SWIPE Card Game. All
                            rights reserved.
                        </p>
                        <div className='flex space-x-6 mt-4 md:mt-0'>
                            <Link
                                href='#'
                                className='text-gray-400 hover:text-white'
                            >
                                <Facebook className='h-6 w-6' />
                            </Link>
                            <Link
                                href='#'
                                className='text-gray-400 hover:text-white'
                            >
                                <Instagram className='h-6 w-6' />
                            </Link>
                            <Link
                                href='#'
                                className='text-gray-400 hover:text-white'
                            >
                                <Twitter className='h-6 w-6' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
