import {ReactNode} from 'react';

export interface HeaderProps {
    appName?: string;
}

export interface NavItem {
    label: string;
    href: string;
}

export interface FooterProps {
    companyName?: string;
    year?: number;
}

export interface LayoutProps {
    children: ReactNode;
}

export interface FooterProps {
    companyName?: string;
    year?: number;
}

export interface QuickLink {
    label: string;
    href: string;
}

export interface SocialLink {
    platform: string;
    href: string;
}
