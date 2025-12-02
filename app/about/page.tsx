import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-green-100">
            {/* Navbar */}
            <Navbar />

            <main className="container mx-auto px-4 py-12 md:py-20">
                <article className="mx-auto max-w-2xl">
                    <header className="mb-12 text-center">
                        <h1 className="mb-3 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
                            About Us
                        </h1>
                        <p className="text-xl font-semibold text-green-700">
                            Eat Bio. Save Money. Waste Less.
                        </p>
                    </header>

                    <div className="space-y-8 text-lg leading-relaxed text-gray-600">
                        <p>
                            In Switzerland, we are fortunate to have some of the highest standards for organic (Bio) products in the world. Yet their reputation often suggests that they are only accessible at a premium price. We believe it doesn’t have to be that way.
                        </p>

                        <div className="relative border-l-4 border-green-700/20 bg-gray-50 p-6 md:-mx-6 md:px-6 md:rounded-r-xl">
                            <h3 className="mb-2 text-sm font-bold uppercase tracking-wider text-gray-400">The Story</h3>
                            <p className="italic text-gray-700">
                                My journey began as a new mother in Geneva. After a challenging path to pregnancy, providing the best possible nutrition for my baby became my top priority. I was determined to choose the highest-quality organic food—while also being mindful about smart, responsible spending. That experience revealed how fragmented and time-consuming it can be to identify truly worthwhile Bio offers. And when you’re a parent, time is your most valuable resource.
                            </p>
                        </div>

                        <div>
                            <h2 className="mb-4 text-xl font-bold text-gray-900">
                                We Do the Hunting for You
                            </h2>
                            <p className="mb-6">
                                This platform is the tool I always wished existed. Every week, we curate and consolidate the best Bio deals across Switzerland, making healthy and sustainable choices easier, smarter, and more accessible.
                            </p>

                            <p className="mb-4">With us, you can:</p>

                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-700">
                                        <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 12 12">
                                            <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
                                        </svg>
                                    </span>
                                    <span>
                                        <strong className="font-semibold text-gray-900">Save Time:</strong> No more scanning endless flyers.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-700">
                                        <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 12 12">
                                            <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
                                        </svg>
                                    </span>
                                    <span>
                                        <strong className="font-semibold text-gray-900">Save Money:</strong> Enjoy premium organic quality without the premium price.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-700">
                                        <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 12 12">
                                            <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
                                        </svg>
                                    </span>
                                    <span>
                                        <strong className="font-semibold text-gray-900">Live Sustainably:</strong> Buying weekly deals helps reduce food waste.
                                    </span>
                                </li>
                            </ul>
                        </div>

                        <p className="pt-4 font-medium text-green-700">
                            Enjoy the very best of Swiss Bio—for you and your family.
                        </p>
                    </div>
                </article>
            </main>

            {/* Footer */}
            <footer className="w-full border-t border-gray-100 bg-gray-50 py-10">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                        <div className="flex items-center gap-2">
                            <div className="h-5 w-5 text-green-700">
                                <svg
                                    fill="currentColor"
                                    viewBox="0 0 48 48"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z"></path>
                                </svg>
                            </div>
                            <span className="font-bold text-gray-900">Bio Deals CH</span>
                        </div>
                        <nav className="flex gap-6 text-sm text-gray-500">
                            <a className="hover:text-green-700 transition-colors" href="#">
                                Privacy Policy
                            </a>
                            <a className="hover:text-green-700 transition-colors" href="#">
                                Terms of Service
                            </a>
                        </nav>
                        <p className="text-sm text-gray-400">
                            © 2024 Bio Deals CH. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
