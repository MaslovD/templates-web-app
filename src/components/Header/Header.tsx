// src/components/Header/Header.tsx
import React, { useState } from "react";
import { HeaderProps, NavItem } from "../../types"; // Ensure types are defined
import { useTheme } from "../../ThemeContext"; // Adjust path as needed

const navItems: NavItem[] = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Services", href: "#" },
    { label: "Contact", href: "#" },
];

const Header: React.FC<HeaderProps> = ({ appName = "Your App Name" }) => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const { theme, setTheme } = useTheme(); // Access theme context
    const themes: Array<"spring" | "autumn" | "winter"> = ["spring", "autumn", "winter"];

    return (
        <header className="bg-primary text-white p-4 shadow-md sticky top-0 w-full z-50">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <h1 className="text-xl md:text-2xl font-bold">{appName}</h1>

                    {/* Desktop Navigation and Theme Switcher */}
                    <div className="hidden md:flex items-center space-x-4">
                        <nav className="flex space-x-4">
                            {navItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="hover:text-secondary transition-colors"
                                >
                                    {item.label}
                                </a>
                            ))}
                        </nav>
                        <div className="flex space-x-2">
                            {themes.map((t) => (
                                <button
                                    key={t}
                                    onClick={() => setTheme(t)}
                                    className={`px-2 py-1 rounded text-sm ${
                                        theme === t ? "bg-secondary text-white" : "bg-neutral hover:bg-secondary"
                                    } capitalize`}
                                >
                                    {t}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 rounded-lg hover:bg-secondary"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden mt-2 bg-neutral p-2 rounded">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="block py-2 text-primary hover:text-secondary"
                            >
                                {item.label}
                            </a>
                        ))}
                        <div className="mt-2 flex flex-col space-y-2">
                            {themes.map((t) => (
                                <button
                                    key={t}
                                    onClick={() => {
                                        setTheme(t);
                                        setIsMenuOpen(false); // Close menu after selection
                                    }}
                                    className={`py-2 rounded ${
                                        theme === t ? "bg-secondary text-white" : "bg-primary hover:bg-secondary"
                                    } capitalize`}
                                >
                                    {t}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
