import {FooterProps, QuickLink, SocialLink} from "../../types";

const Footer = ({
                    companyName = "Your Company",
                    year = new Date().getFullYear()
                }: FooterProps) => {
    const quickLinks: QuickLink[] = [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Contact Us", href: "#" }
    ];

    const socialLinks: SocialLink[] = [
        { platform: "Twitter", href: "#" },
        { platform: "LinkedIn", href: "#" },
        { platform: "GitHub", href: "#" }
    ];

    return (
        <footer className="w-full bg-gray-500  text-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-2">About Us</h3>
                        <p className="text-gray-400">A brief description of your company or application goes here.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
                        <ul className="text-gray-400">
                            {quickLinks.map((link) => (
                                <li key={link.label} className="mb-1">
                                    <a href={link.href} className="hover:text-white">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Connect</h3>
                        <div className="flex space-x-4 text-gray-400">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.platform}
                                    href={link.href}
                                    className="hover:text-white"
                                >
                                    {link.platform}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-700 py-4 text-center text-gray-400">
                    <p>&copy; {year} {companyName}. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
