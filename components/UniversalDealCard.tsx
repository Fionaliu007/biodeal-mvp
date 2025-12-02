import React from 'react';
import Link from 'next/link';

interface UniversalDealCardProps {
    title: string;
    store: 'lidl' | 'aldi' | 'denner' | 'farmy' | 'migros' | 'coop' | string;
    price: string;
    originalPrice: string;
    discount: string;
    image: string;
    bio?: boolean;
    unitPrice?: string;
    endsIn?: number;
}

export function UniversalDealCard({
    title,
    store,
    price,
    originalPrice,
    discount,
    image,
    bio = true,
    unitPrice,
    endsIn,
}: UniversalDealCardProps) {
    // Determine button style based on store name (case-insensitive)
    const storeLower = store.toLowerCase();

    // Store badge colors - Gray text, gray border, transparent background
    const getStoreBadgeStyle = (storeName: string) => {
        return 'text-gray-500 border-gray-200 bg-transparent';
    };

    // Calculate savings
    const calculateSavings = () => {
        try {
            const priceVal = parseFloat(price.replace(/[^0-9.]/g, ''));
            const originalVal = parseFloat(originalPrice.replace(/[^0-9.]/g, ''));
            if (!isNaN(priceVal) && !isNaN(originalVal)) {
                return (originalVal - priceVal).toFixed(2);
            }
        } catch (e) {
            return null;
        }
        return null;
    };

    const savings = calculateSavings();

    return (
        <div className="group relative flex flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:shadow-md">
            {/* Image Container */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                <Link href="/product/1" className="block h-full w-full">
                    <img
                        alt={title}
                        className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                        src={image}
                    />
                </Link>
                {/* Standardized Percentage Badge */}
                <span className="absolute right-2 top-2 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white shadow-sm">
                    {discount}
                </span>
                {bio && (
                    <div className="absolute bottom-2 left-2 flex items-center gap-1 rounded-full bg-white/90 px-2 py-1 backdrop-blur-sm shadow-sm">
                        <span className="material-symbols-outlined !text-base text-green-800">
                            verified
                        </span>
                        <span className="text-xs font-medium text-green-800">Bio</span>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-4">
                <div className="mb-2 flex items-start justify-between gap-2">
                    <div className="flex flex-col gap-1 w-full">
                        <div className="flex justify-between items-start w-full">
                            <Link href="/product/1" className="block flex-1">
                                <h3 className="text-base font-medium text-gray-900 line-clamp-2 hover:text-green-700">
                                    {title}
                                </h3>
                            </Link>
                            {/* Store Badge */}
                            <span className={`ml-2 inline-flex shrink-0 items-center rounded-full border px-2 py-0.5 text-xs font-medium ${getStoreBadgeStyle(store)}`}>
                                {store}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="mt-auto flex flex-col gap-2">
                    {/* Price Section */}
                    <div className="flex items-end justify-between">
                        <div className="flex flex-col">
                            <div className="flex items-baseline gap-2">
                                <span className="text-lg font-bold text-green-700">{price}</span>
                                <span className="text-sm text-gray-400 line-through decoration-gray-400">{originalPrice}</span>
                            </div>
                            {savings && (
                                <span className="text-xs font-medium text-green-700">
                                    Save CHF {savings}
                                </span>
                            )}
                            {unitPrice && (
                                <span className="text-xs text-gray-500 mt-0.5">
                                    {unitPrice}
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Urgency Indicator */}
                    {endsIn !== undefined && (
                        <div className="flex items-center gap-1.5 pt-2 border-t border-gray-100">
                            <span className="material-symbols-outlined !text-sm text-amber-600">
                                schedule
                            </span>
                            <span className="text-xs font-medium text-amber-700">
                                Ends in {endsIn} days
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
