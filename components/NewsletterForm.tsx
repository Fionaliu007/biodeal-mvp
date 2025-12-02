"use client";

import React, { useState } from 'react';

export function NewsletterForm() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !email.includes('@')) {
            setStatus('error');
            return;
        }

        setStatus('loading');

        // Simulate API call
        setTimeout(() => {
            console.log('Newsletter Subscription:', email);
            setStatus('success');
            setEmail('');
        }, 1000);
    };

    if (status === 'success') {
        return (
            <div className="bg-white dark:bg-background-dark rounded-xl @container">
                <div className="flex flex-col items-center justify-center gap-6 px-4 py-16 text-center @[480px]:px-10 @[480px]:py-24">
                    <div className="rounded-full bg-green-100 p-4 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                        <span className="material-symbols-outlined !text-4xl">check_circle</span>
                    </div>
                    <div className="flex flex-col gap-2 max-w-md">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                            Thanks! You're on the list.
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300">
                            You'll receive the best Swiss organic deals in your inbox next Tuesday.
                        </p>
                    </div>
                    <button
                        onClick={() => setStatus('idle')}
                        className="text-sm font-medium text-green-700 hover:underline dark:text-primary"
                    >
                        Subscribe another email
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white dark:bg-background-dark rounded-xl @container">
            <div className="flex flex-col justify-end gap-6 px-4 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20">
                <div className="flex flex-col gap-2 text-center mx-auto">
                    <h2 className="text-text-light dark:text-text-dark tracking-light text-3xl font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
                        Get Your Weekly Deals
                    </h2>
                    <p className="text-text-light/80 dark:text-text-dark/80 text-base font-normal leading-normal max-w-[720px]">
                        Join 5,000+ bio lovers in Switzerland and never miss a promotion.
                    </p>
                </div>
                <div className="flex flex-1 justify-center">
                    <label className="sr-only" htmlFor="email-input">
                        Enter your email address
                    </label>
                    <form onSubmit={handleSubmit} className="flex flex-col w-full min-w-40 h-14 max-w-[480px] flex-1 @[480px]:h-16">
                        <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                            <input
                                className={`form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border-gray-200 dark:border-gray-700 bg-background-light dark:bg-gray-800/50 h-full placeholder:text-text-light/50 dark:placeholder:text-text-dark/50 px-4 rounded-r-none border-r-0 pr-2 text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal ${status === 'error' ? 'border-red-500 focus:ring-red-500' : ''}`}
                                id="email-input"
                                placeholder="your.email@example.ch"
                                type="email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    if (status === 'error') setStatus('idle');
                                }}
                                disabled={status === 'loading'}
                            />
                            <div className="flex items-center justify-center rounded-r-lg border-l-0 border-gray-200 dark:border-gray-700 bg-background-light dark:bg-gray-800/50 pr-2">
                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-green-700 text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] transition-transform duration-200 hover:scale-105 active:scale-100 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    <span className="truncate">
                                        {status === 'loading' ? 'Subscribing...' : 'Subscribe Now'}
                                    </span>
                                </button>
                            </div>
                        </div>
                        {status === 'error' && (
                            <p className="text-red-500 text-xs mt-1 ml-1">Please enter a valid email address.</p>
                        )}
                    </form>
                </div>
                {/* MetaText */}
                <p className="text-text-light/60 dark:text-text-dark/60 text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center">
                    By subscribing, you agree to our{' '}
                    <a className="underline hover:text-primary" href="#">
                        Privacy Policy
                    </a>
                    .
                </p>
            </div>
        </div>
    );
}
