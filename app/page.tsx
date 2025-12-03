import React from 'react';
import { Navbar } from '@/components/Navbar';
import { NewsletterForm } from '@/components/NewsletterForm';
import { DealsSection } from '@/components/DealsSection';
import { supabase } from '@/lib/supabase';

// Define the shape of the data from Supabase
interface DBProduct {
  id: number;
  title: string;
  store: string;
  price: number;
  category: string;
  image: string;
}

// Define the shape expected by the UI
interface UIProduct {
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

export default async function Home() {
  let products: UIProduct[] = [];

  try {
    const { data, error } = await supabase
      .from('products')
      .select('*');

    if (error) {
      console.error('Error fetching products:', error);
    } else if (data) {
      // Map DB data to UI data
      products = (data as DBProduct[]).map(item => ({
        id: item.id,
        title: item.title,
        store: item.store,
        price: `${item.price.toFixed(2)} CHF`,
        // Mock missing fields
        originalPrice: (item.price * 1.2).toFixed(2),
        discount: '-20%',
        image: item.image,
        bio: true, // Assume bio for now
        endsIn: Math.floor(Math.random() * 5) + 1 // Random ends in
      }));
    }
  } catch (err) {
    console.error('Unexpected error:', err);
    // Fallback to empty array is already handled by initialization
  }

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
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-[#111b0d] text-base font-bold leading-normal tracking-[0.015em] transition-transform hover:scale-105"
              >
                <span className="truncate">Get Weekly Updates</span>
              </button>
            </div>
          </div>
        </div>

        {/* Deals Section with Data */}
        <DealsSection initialProducts={products} />

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