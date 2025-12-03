"use client";

import React, { useState } from 'react';
import { UniversalDealCard } from '@/components/UniversalDealCard';

interface Product {
    id: number;
    title: string;
    store: string;
    price: string;
    originalPrice: string;
    discount: string;
    image: string;
    bio?: boolean;
    unitPrice?: string;
    endsIn?: number;
}

interface DealsSectionProps {
    initialProducts: Product[];
}

const STORES = ['Coop', 'Migros', 'Lidl', 'Aldi', 'Denner', 'Farmy'];

export function DealsSection({ initialProducts }: DealsSectionProps) {
    const [selectedStores, setSelectedStores] = useState<string[]>([]);

    const handleStoreChange = (store: string) => {
        setSelectedStores(prev => {
            if (prev.includes(store)) {
                return prev.filter(s => s !== store);
            } else {
                return [...prev, store];
            }
        });
    };

    const filteredProducts = selectedStores.length === 0
        ? initialProducts
        : initialProducts.filter(product => selectedStores.includes(product.store));

    return (
        <div className="flex flex-col gap-10 lg:flex-row">
            {/* Filter Sidebar */}
            <aside className="w-full lg:w-1/4 xl:w-1/5">
                <div className="sticky top-24 rounded-xl border border-gray-200/80 dark:border-gray-700/80 bg-background-light p-6 dark:bg-gray-900/50">
                    <div className="mb-6 flex items-center justify-between">
                        <h3 className="text-lg font-bold">Filters</h3>
                        <button
                            className="text-sm font-medium text-green-700 hover:underline dark:text-primary"
                            onClick={() => setSelectedStores([])}
                        >
                            Reset
                        </button>
                    </div>
                    <div className="space-y-6">
                        {/* Region Filter */}
                        <div>
                            <label
                                className="mb-2 block text-sm font-medium"
                                htmlFor="region-select"
                            >
                                Region/Canton
                            </label>
                            <div className="relative">
                                <select
                                    className="form-select w-full rounded-lg border-gray-300 bg-gray-100 dark:border-gray-600 dark:bg-gray-800 focus:border-green-500 focus:ring-green-500"
                                    id="region-select"
                                >
                                    <option>Zürich</option>
                                    <option>Geneva</option>
                                </select>
                            </div>
                        </div>
                        {/* Store Filter */}
                        <div>
                            <h4 className="mb-2 text-sm font-medium">Store</h4>
                            <div className="space-y-2">
                                {STORES.map((store) => (
                                    <label key={store} className="flex items-center cursor-pointer">
                                        <input
                                            checked={selectedStores.includes(store)}
                                            onChange={() => handleStoreChange(store)}
                                            className="form-checkbox h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                                            type="checkbox"
                                        />
                                        <span className="ml-2 text-sm">{store}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </aside>
            {/* Main Content: Deals */}
            <div className="flex-1">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 pb-4">
                    Today's Top Deals
                </h2>
                {/* Image Grid */}
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
                    {filteredProducts.map((product) => (
                        <UniversalDealCard
                            key={product.id}
                            title={product.title}
                            store={product.store}
                            price={product.price}
                            originalPrice={product.originalPrice}
                            discount={product.discount}
                            image={product.image}
                            bio={product.bio}
                            unitPrice={product.unitPrice}
                            endsIn={product.endsIn}
                        />
                    ))}
                </div>
                {filteredProducts.length === 0 && (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                        <p className="text-lg font-medium text-gray-500">No products found for the selected stores.</p>
                        <button
                            onClick={() => setSelectedStores([])}
                            className="mt-4 text-green-700 hover:underline font-medium"
                        >
                            Clear filters
                        </button>
                    </div>
                )}
                {/* Pagination */}
                <div className="mt-8 flex items-center justify-center p-4">
                    <a
                        className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
                        href="#"
                    >
                        <span className="material-symbols-outlined text-[#111b0d] dark:text-gray-100">
                            chevron_left
                        </span>
                    </a>
                    <a
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-sm font-bold text-green-800 dark:bg-primary/30 dark:text-white"
                        href="#"
                    >
                        1
                    </a>
                    <a
                        className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-normal text-[#111b0d] hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-700"
                        href="#"
                    >
                        2
                    </a>
                    <a
                        className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-normal text-[#111b0d] hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-700"
                        href="#"
                    >
                        3
                    </a>
                    <span className="flex h-10 w-10 items-center justify-center text-sm font-normal text-[#111b0d] dark:text-gray-200">
                        ...
                    </span>
                    <a
                        className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-normal text-[#111b0d] hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-700"
                        href="#"
                    >
                        8
                    </a>
                    <a
                        className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-normal text-[#111b0d] hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-700"
                        href="#"
                    >
                        9
                    </a>
                    <a
                        className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
                        href="#"
                    >
                        <span className="material-symbols-outlined text-[#111b0d] dark:text-gray-100">
                            chevron_right
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
}
