"use client";

import React, { useState } from 'react';
import { UniversalDealCard } from '@/components/UniversalDealCard';
import { NewsletterForm } from '@/components/NewsletterForm';
import { Navbar } from '@/components/Navbar';

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

const PRODUCTS: Product[] = [
  {
    id: 1,
    title: "Organic Apples",
    store: "Coop",
    price: "2.50 CHF",
    originalPrice: "3.60",
    discount: "-30%",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAycNkKPCAO7z4mbTgJRrNrSYwrvloqcN4HsV6a7Z0hCKErXh2Z_aH_CpAMI2XyQ5JsOzOi6mGDSQdP_GfbrCFlBKewsOmqU5jg9sH-K1059tpVjMfNAHTzPBmHSLbg6wpzvcPFawk32_AnCtdwUhiM107iVNGsBq8zcoEJZ7eUbbwMb1SmCM7LTeXWGVNIkja8r-eU5t7ZTW5xT_QHhSClK65GENp-28XLIM3efhb-V1fOA9wfoUiq3p0Dsj1Clse7rPQzWgdeXsDe",
    unitPrice: "CHF 0.50 / 100g",
    endsIn: 2
  },
  {
    id: 2,
    title: "Bio Whole Milk",
    store: "Migros",
    price: "1.80 CHF",
    originalPrice: "2.25",
    discount: "-20%",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5iuxIglrI8XIoUfA9yMt638sL79grt5QPjRXdqz3hGlvIBF1HshqI77r76lriAtRCY34H0LSmLHmog9UhcjxgsooBO4NC11FhFf2RjyTw7pofpAOqZNboAtXr3wkeFgdHsNsNWX09g9FUbFaWMhotuNvvkgWGqCHHJ1LNPnTDOuUxmAExD1E2vR0CQv7hSjmm6Kpd0q63jyNgmyF4tfI3QnxBqFPo8aez52uvLXW9owBpECzQx0YSRb38qltMCDZrilArnbOw9tY2",
    unitPrice: "CHF 1.80 / 1L",
    endsIn: 3
  },

  {
    id: 4,
    title: "Free-Range Eggs",
    store: "Coop",
    price: "3.50 CHF",
    originalPrice: "4.70",
    discount: "-25%",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOibMUplVROjYI248zVEaH2H2NTEhKts0UZSLL5nAeDVvfdY1fbH_rSz0cQ_0tyx9UGP-WXWojEDoDb2ZaEE_UGp4Orie7ZBFTDVBK8X1ZDHxu5w8ztOQulbgHvSfXiewRVd3sAExVrPxAxIVKU7xwwaWzooEDeZZ4KG0h0U7Rs2sN7KxjZ9NkuBZqmL84MKjrFO2W0Z8qvv18W31uUkn7pvpcY3K0KumcwKBZkH8maL-uVC37AUNo_zCTBe9ZBI048msAiipaVZ8X",
    unitPrice: "CHF 0.58 / piece",
    endsIn: 1
  },
  {
    id: 5,
    title: "Organic Tomatoes",
    store: "Migros",
    price: "2.00 CHF",
    originalPrice: "3.30",
    discount: "-40%",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLVPDcSepXATMsf7iQ32sM_zkqIm3KfIu2zCFP7MBi5FoaO7RLpGPZiTvuNpuL18QGqnqE6TZwvuqHe0Fqggl8Dw8w246yN6FFssbw2iq0Fiod4Sb8uGN7K9bu5PQpKtLXBkb__aBRbFIrYudc6Ay3gJaq4i032x5riU8bg00gdDE1fqWolNOomtSszZFDhFkdv-IVnQQFyzn9JEGmvdKY4GT8TRCtJNrwlZ8KHQz3mgy80rFt-mFqoBgM2-OKdy6ATGyoNC7eYzXU",
    unitPrice: "CHF 0.40 / 100g",
    endsIn: 4
  },

  {
    id: 7,
    title: "Quinoa",
    store: "Migros",
    price: "5.50 CHF",
    originalPrice: "6.90",
    discount: "-20%",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAk6Ay_vh7ojsnaGGu-hhEPkJAPwhVvJB6KjZHy6mv1rckKTZXvQdAWJRFpENLhzbcIiY-Xl8DHGruQrw6ryc8FHOzJ6p3YrNYMxZejIInfk5MA4RcmQv9a_WMg3EhcBzxODr7mPr7EaFJMFZA1sjRkJaR8RWM9nX5sUi7aCC_UXeJwJGXK_wbPKkXRclpZWfKQEwTD7BM40Vs_8Gc-xzghgVb4zXvjONaOq2H6I5QSBtU8i3Jq2EL7LbqE3WCf5HnJCVAvyqm97o8w",
    unitPrice: "CHF 1.10 / 100g",
    endsIn: 5
  },
  {
    id: 8,
    title: "Fresh Spinach",
    store: "Coop",
    price: "3.00 CHF",
    originalPrice: "4.00",
    discount: "-25%",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCztj6H4o5MO3KkgK_A31SWFFtzVoSWYTJSdRN9TICyp8ni_giEkyXQ8k2TLKOuR9V9bJGmMdXnqvdYKs_qopRqfDMvVHA5ILhaFssLj58h2XwhaIrjOxdZKgEfiiOn9xa3LBdNch0GKiUPkOUZT_SmpXi-IYi40CNvEKY5PBqzS2E0Phc6n_qKF4iLoFpRXDDyz6cid363kzYT6Fu5cTfINGI6Gv7Wb4cDy__orfsCwskp8mKMPIjQCW_jmB9jrtJ77C1b1hcEAeke",
    unitPrice: "CHF 1.00 / 100g",
    endsIn: 2
  },
  {
    id: 9,
    title: "Organic Farm Box",
    store: "Farmy",
    price: "45.00 CHF",
    originalPrice: "55.00",
    discount: "-18%",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8qTNEcQFqlEyBCjCMWWRFkdvCYxHrhjS5Td2N7Teha7NnnU4H6N46wgkwR7SfHqKeFIkpSW6GOBEpRCW-33cZQx8lGRPDmBbPkN1PFYJthP3_Us5BbYfUzDcl9hFYfua7u1MIXXzBuHQHTJiHFt0ds8UrAmYUIFIJGJggJgdCg7ezooHlDNmhjmUKh8Z_l9gfYSIVumEH_enXadutjhDjoDrZdy_iS5O5LF1aI1Ssu3RdY6yZT1WS4pFCNncsuTAZq-scq6hnEGgf",
    unitPrice: "CHF 45.00 / box",
    endsIn: 6
  },
  {
    id: 10,
    title: "Lidl Bio Bananas",
    store: "Lidl",
    price: "1.49 CHF",
    originalPrice: "1.99",
    discount: "-25%",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8qTNEcQFqlEyBCjCMWWRFkdvCYxHrhjS5Td2N7Teha7NnnU4H6N46wgkwR7SfHqKeFIkpSW6GOBEpRCW-33cZQx8lGRPDmBbPkN1PFYJthP3_Us5BbYfUzDcl9hFYfua7u1MIXXzBuHQHTJiHFt0ds8UrAmYUIFIJGJggJgdCg7ezooHlDNmhjmUKh8Z_l9gfYSIVumEH_enXadutjhDjoDrZdy_iS5O5LF1aI1Ssu3RdY6yZT1WS4pFCNncsuTAZq-scq6hnEGgf",
    unitPrice: "CHF 0.30 / piece",
    endsIn: 3
  },
  {
    id: 11,
    title: "Denner Bio Milk",
    store: "Denner",
    price: "1.60 CHF",
    originalPrice: "1.95",
    discount: "-18%",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5iuxIglrI8XIoUfA9yMt638sL79grt5QPjRXdqz3hGlvIBF1HshqI77r76lriAtRCY34H0LSmLHmog9UhcjxgsooBO4NC11FhFf2RjyTw7pofpAOqZNboAtXr3wkeFgdHsNsNWX09g9FUbFaWMhotuNvvkgWGqCHHJ1LNPnTDOuUxmAExD1E2vR0CQv7hSjmm6Kpd0q63jyNgmyF4tfI3QnxBqFPo8aez52uvLXW9owBpECzQx0YSRb38qltMCDZrilArnbOw9tY2",
    unitPrice: "CHF 1.60 / 1L",
    endsIn: 4
  },
  {
    id: 12,
    title: "Aldi Bio Chocolate",
    store: "Aldi",
    price: "1.20 CHF",
    originalPrice: "1.80",
    discount: "-33%",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDiWaopcBfgbN48f5hNFJ5l2anUxshgsD6n3I0SiPnH0-mYWVK20nxyIcgOWyj7Djw1zbuOrhc8KmfF0pbeEu3RHqFE8j7zQDmTBS-dLkWcdjARN6QtSTcwn8LCFElukx2qn8dylYYbqqzsclaaC3H3B7Ex86yze-2Zgx5hQFYQe8L0mrsJh6z_826Ti6-4KFcYeAb1v8bR2211F3fbbUbKtuSdQcld-T6yxUm2_HAjiXgBNg0kXzQUMcBdo_yRTi9ZFNSUarK2HMsf",
    unitPrice: "CHF 1.20 / 100g",
    endsIn: 5
  }
];

const STORES = ['Coop', 'Migros', 'Lidl', 'Aldi', 'Denner', 'Farmy'];

export default function Home() {
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
    ? PRODUCTS
    : PRODUCTS.filter(product => selectedStores.includes(product.store));

  return (
    <div className="relative flex min-h-screen w-full flex-col">
      {/* Top Navigation Bar */}
      <Navbar showSearch={true} />
      <main className="container mx-auto flex-1 px-4 py-8">
        {/* Hero Section */}
        <div className="@container mb-10">
          <div className="@[480px]:p-0">
            <div
              className="flex min-h-[400px] flex-col items-center justify-center gap-6 rounded-xl bg-cover bg-center bg-no-repeat p-4 md:min-h-[480px] @[480px]:gap-8"
              data-alt="A vibrant, fresh field of green vegetables under a bright sun"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.7) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuD8qTNEcQFqlEyBCjCMWWRFkdvCYxHrhjS5Td2N7Teha7NnnU4H6N46wgkwR7SfHqKeFIkpSW6GOBEpRCW-33cZQx8lGRPDmBbPkN1PFYJthP3_Us5BbYfUzDcl9hFYfua7u1MIXXzBuHQHTJiHFt0ds8UrAmYUIFIJGJggJgdCg7ezooHlDNmhjmUKh8Z_l9gfYSIVumEH_enXadutjhDjoDrZdy_iS5O5LF1aI1Ssu3RdY6yZT1WS4pFCNncsuTAZq-scq6hnEGgf")',
              }}
            >
              <div className="flex flex-col gap-2 text-center">
                <h1 className="text-white text-4xl font-bold leading-tight tracking-[-0.033em] md:text-5xl">
                  Discover Switzerland's Best Bio Deals
                </h1>
                <h2 className="max-w-xl text-white text-base font-normal leading-normal md:text-lg">
                  Don't miss out. Get the best Swiss organic deals delivered to your inbox every week.
                </h2>
              </div>
              <button
                onClick={() => document.getElementById('subscribe')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-[#111b0d] text-base font-bold leading-normal tracking-[0.015em] transition-transform hover:scale-105"
              >
                <span className="truncate">Get Weekly Updates</span>
              </button>
            </div>
          </div>
        </div>
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

        {/* Newsletter Section */}
        <div id="subscribe" className="mt-16">
          <NewsletterForm />
        </div>
      </main>
      {/* Footer */}
      <footer className="w-full border-t border-gray-200/80 bg-background-light dark:border-gray-700/80 dark:bg-background-dark">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2 text-[#111b0d] dark:text-gray-100">
              <div className="h-5 w-5 text-green-700 dark:text-primary">
                <svg
                  fill="currentColor"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z"></path>
                </svg>
              </div>
              <h2 className="font-bold">Bio Deals CH</h2>
            </div>
            <nav className="flex gap-6 text-sm">
              <a
                className="hover:text-green-700 dark:hover:text-primary"
                href="#"
              >
                Privacy Policy
              </a>
              <a
                className="hover:text-green-700 dark:hover:text-primary"
                href="#"
              >
                Terms of Service
              </a>
            </nav>
            <p className="text-sm text-gray-500">
              © 2024 Bio Deals CH. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}