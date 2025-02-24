import React, { useState } from 'react';
import { HeaderProps, NavItem } from '../../types';

const navItems: NavItem[] = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Services", href: "#" },
    { label: "Contact", href: "#" }
];

const Header: React.FC<HeaderProps> = ({ appName = "Your App Name" }) => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    return (
        <header className="bg-blue-600 text-white p-4 shadow-md sticky top-0 w-full z-50">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <h1 className="text-xl md:text-2xl font-bold">{appName}</h1>
                    <nav className="hidden md:flex space-x-4">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="hover:text-blue-200"
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>
                    <button
                        className="md:hidden p-2 rounded-lg hover:bg-blue-700"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden mt-2">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="block py-2 hover:text-blue-200"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
