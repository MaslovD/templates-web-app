// src/components/Layout.tsx
import React from "react";
import { Outlet } from "react-router-dom";
import { useTheme } from "../../ThemeContext"; // Adjust path if needed
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout: React.FC = () => {
    const { theme } = useTheme(); // Get the current theme

    return (
        <div data-theme={theme} className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow w-full p-4 pt-[theme(spacing.8)]">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
