"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarProps {
    showSearch?: boolean;
}

export function Navbar({ showSearch = false }: NavbarProps) {
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    const getLinkClass = (path: string) => {
        const baseClass = "text-sm font-medium transition-colors hover:text-green-700 dark:hover:text-primary";
        if (isActive(path)) {
            return `${baseClass} text-green-700 dark:text-primary font-bold`;
        }
        return `${baseClass} text-[#111b0d] dark:text-gray-100`;
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-200/80 dark:border-gray-700/80 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
            <div className="container mx-auto flex items-center justify-between whitespace-nowrap px-4 py-3">
                <div className="flex items-center gap-8">
                    <Link href="/" className="flex items-center gap-2 text-[#111b0d] dark:text-gray-100 group">
                        <div className="h-6 w-6 text-green-700 transition-transform group-hover:scale-110">
                            <svg
                                fill="currentColor"
                                viewBox="0 0 48 48"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z"></path>
                            </svg>
                        </div>
                        <h2 className="text-xl font-bold tracking-tight">Bio Deals CH</h2>
                    </Link>
                    <nav className="hidden md:flex items-center gap-9">
                        <Link
                            className={getLinkClass("/")}
                            href="/"
                        >
                            Home
                        </Link>
                        <Link
                            className={getLinkClass("/newsletter")}
                            href="/newsletter"
                        >
                            Newsletter
                        </Link>
                        <Link
                            className={getLinkClass("/about")}
                            href="/about"
                        >
                            About Us
                        </Link>
                    </nav>
                </div>

                {showSearch && (
                    <div className="flex flex-1 justify-end">
                        <label className="relative flex w-full max-w-xs items-center">
                            <span className="material-symbols-outlined absolute left-3 text-gray-500">
                                search
                            </span>
                            <input
                                className="form-input h-10 w-full rounded-lg border-gray-300 bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 pl-10 placeholder:text-gray-500 focus:border-green-500 focus:ring-green-500"
                                placeholder="Search products..."
                                type="search"
                            />
                        </label>
                    </div>
                )}

                {/* Mobile Menu Button Placeholder - visible only on mobile */}
                <div className="md:hidden flex flex-1 justify-end">
                    <span className="material-symbols-outlined text-gray-600">menu</span>
                </div>
            </div>
        </header>
    );
}
