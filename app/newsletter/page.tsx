import React from 'react';
import Link from 'next/link';
import { NewsletterForm } from '@/components/NewsletterForm';
import { Navbar } from '@/components/Navbar';

export default function NewsletterPage() {
    return (
        <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
            <div className="layout-container flex h-full grow flex-col">
                <div className="px-4 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-5">
                    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                        {/* TopNavBar */}
                        {/* TopNavBar */}
                        <Navbar />
                        <main className="flex-grow">
                            {/* HeroSection */}
                            <div className="w-full @container">
                                <div className="p-0 md:p-4">
                                    <div
                                        className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4 text-center"
                                        data-alt="A vibrant, fresh assortment of organic vegetables and fruits spread out on a rustic wooden table."
                                        style={{
                                            backgroundImage:
                                                'linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.5) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCt0YpHbLKAY5C7e4Ng9bEQmuGrV1PWNfP2AuumTT0mchxROalZjKm6Nqm9j0E24ZAQ0YwaijjjqXzuwQG-Jq1kWfrQ65V6tJPyK0MvAO3wbvG1TNng0I3SQSpDJOV1CKab8gisZIW72T4TBGPaVDQZ2w5ewoQ1XGHKH9s2ZYT3aZ-5AEv4k3CF3klSeFI7xYlPYRbxpiowdcGZQLWpUwiqq-zvCLJgQAENDPmjLTWl4D77WoNWHOH5AUzUEIr7UV5Gg9uyb8YwYjZR")',
                                        }}
                                    >
                                        <div className="flex flex-col gap-4">
                                            <h1 className="text-white text-4xl font-bold leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-bold @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                                                Weekly Bio Deals, Straight to Your Inbox
                                            </h1>
                                            <h2 className="text-white text-base font-normal leading-normal @[480px]:text-lg @[480px]:font-normal @[480px]:leading-normal max-w-2xl mx-auto">
                                                The best weekly bio promotions from across Switzerland,
                                                delivered every Tuesday.
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* FeatureSection */}
                            <div className="flex flex-col gap-10 px-4 py-16 @container">
                                <div className="flex flex-col gap-4 text-center mx-auto">
                                    <h2 className="text-text-light dark:text-text-dark tracking-light text-3xl font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
                                        Why Join Our Newsletter?
                                    </h2>
                                    <p className="text-text-light/80 dark:text-text-dark/80 text-base font-normal leading-normal max-w-[720px]">
                                        Become a part of Switzerland's largest community of
                                        health-conscious consumers and get the best deals first.
                                    </p>
                                </div>
                                <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4 p-0">
                                    <div className="flex flex-1 gap-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-background-dark p-6 flex-col items-start">
                                        <div className="text-accent bg-accent/10 p-2 rounded-lg">
                                            <span className="material-symbols-outlined !text-3xl">
                                                confirmation_number
                                            </span>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <h3 className="text-text-light dark:text-text-dark text-lg font-bold leading-tight">
                                                Discover Top Deals
                                            </h3>
                                            <p className="text-text-light/70 dark:text-text-dark/70 text-sm font-normal leading-normal">
                                                Find the best weekly discounts and promotions on your favorite organic products.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-1 gap-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-background-dark p-6 flex-col items-start">
                                        <div className="text-accent bg-accent/10 p-2 rounded-lg">
                                            <span className="material-symbols-outlined !text-3xl">
                                                mail
                                            </span>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <h3 className="text-text-light dark:text-text-dark text-lg font-bold leading-tight">
                                                Get Exclusive Offers
                                            </h3>
                                            <p className="text-text-light/70 dark:text-text-dark/70 text-sm font-normal leading-normal">
                                                Receive special offers and healthy recipes available only to our subscribers.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-1 gap-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-background-dark p-6 flex-col items-start">
                                        <div className="text-accent bg-accent/10 p-2 rounded-lg">
                                            <span className="material-symbols-outlined !text-3xl">
                                                eco
                                            </span>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <h3 className="text-text-light dark:text-text-dark text-lg font-bold leading-tight">
                                                Stay Informed
                                            </h3>
                                            <p className="text-text-light/70 dark:text-text-dark/70 text-sm font-normal leading-normal">
                                                Be the first to know about new and exciting bio brands entering the Swiss market.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* CTASection - Using reusable component */}
                            <NewsletterForm />
                        </main>
                        {/* Footer */}
                        <footer className="mt-20 py-10 border-t border-gray-200 dark:border-gray-700">
                            <div className="text-center text-sm text-text-light/70 dark:text-text-dark/70">
                                <p>© 2024 Bio Deals CH. All rights reserved.</p>
                                <div className="flex justify-center gap-4 mt-4">
                                    <a className="hover:underline" href="#">
                                        Contact
                                    </a>
                                    <a className="hover:underline" href="#">
                                        Privacy Policy
                                    </a>
                                    <a className="hover:underline" href="#">
                                        Terms of Service
                                    </a>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    );
}
