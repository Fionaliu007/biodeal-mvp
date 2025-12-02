< !DOCTYPE html >

    <html class="light" lang="en"><head>
        <meta charset="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>Bio Deals CH - Your Guide to Organic Savings</title>
        <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700;800&amp;display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
        <script>
            tailwind.config = {
                darkMode: "class",
            theme: {
                extend: {
                colors: {
                "primary": "#46ec13",
            "background-light": "#f6f8f6",
            "background-dark": "#142210",
                    },
            fontFamily: {
                "display": ["Manrope", "sans-serif"]
                    },
            borderRadius: {
                "DEFAULT": "0.25rem",
            "lg": "0.5rem",
            "xl": "0.75rem",
            "full": "9999px"
                    },
                },
            },
        }
        </script>
        <style>
            .material-symbols-outlined {
                font - variation - settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            font-size: 24px;
        }
        </style>
    </head>
        <body class="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200">
            <div class="relative flex min-h-screen w-full flex-col">
                <!-- Top Navigation Bar -->
                <header class="sticky top-0 z-50 w-full border-b border-gray-200/80 dark:border-gray-700/80 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
                    <div class="container mx-auto flex items-center justify-between whitespace-nowrap px-4 py-3">
                        <div class="flex items-center gap-8">
                            <div class="flex items-center gap-2 text-[#111b0d] dark:text-gray-100">
                                <div class="h-6 w-6 text-green-700 dark:text-primary">
                                    <svg fill="currentColor" viewbox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z"></path>
                                    </svg>
                                </div>
                                <h2 class="text-xl font-bold tracking-tight">Bio Deals CH</h2>
                            </div>
                            <nav class="hidden md:flex items-center gap-9">
                                <a class="text-sm font-medium hover:text-green-700 dark:hover:text-primary" href="#">Home</a>
                                <a class="text-sm font-medium hover:text-green-700 dark:hover:text-primary" href="#">About Us</a>
                            </nav>
                        </div>
                        <div class="flex flex-1 justify-end">
                            <label class="relative flex w-full max-w-xs items-center">
                                <span class="material-symbols-outlined absolute left-3 text-gray-500">search</span>
                                <input class="form-input h-10 w-full rounded-lg border-gray-300 bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 pl-10 placeholder:text-gray-500 focus:border-green-500 focus:ring-green-500" placeholder="Search products..." type="search" />
                            </label>
                        </div>
                    </div>
                </header>
                <main class="container mx-auto flex-1 px-4 py-8">
                    <!-- Hero Section -->
                    <div class="@container mb-10">
                        <div class="@[480px]:p-0">
                            <div class="flex min-h-[400px] flex-col items-center justify-center gap-6 rounded-xl bg-cover bg-center bg-no-repeat p-4 md:min-h-[480px] @[480px]:gap-8" data-alt="A vibrant, fresh field of green vegetables under a bright sun" style='background-image: linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuD8qTNEcQFqlEyBCjCMWWRFkdvCYxHrhjS5Td2N7Teha7NnnU4H6N46wgkwR7SfHqKeFIkpSW6GOBEpRCW-33cZQx8lGRPDmBbPkN1PFYJthP3_Us5BbYfUzDcl9hFYfua7u1MIXXzBuHQHTJiHFt0ds8UrAmYUIFIJGJggJgdCg7ezooHlDNmhjmUKh8Z_l9gfYSIVumEH_enXadutjhDjoDrZdy_iS5O5LF1aI1Ssu3RdY6yZT1WS4pFCNncsuTAZq-scq6hnEGgf");'>
                                <div class="flex flex-col gap-2 text-center">
                                    <h1 class="text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-5xl">Discover Switzerland's Best Bio Deals</h1>
                                    <h2 class="max-w-xl text-white text-base font-normal leading-normal md:text-lg">Fresh, certified organic products on sale near you. Your guide to healthy savings.</h2>
                                </div>
                                <button class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-[#111b0d] text-base font-bold leading-normal tracking-[0.015em] transition-transform hover:scale-105">
                                    <span class="truncate">Browse All Deals</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col gap-10 lg:flex-row">
                        <!-- Filter Sidebar -->
                        <aside class="w-full lg:w-1/4 xl:w-1/5">
                            <div class="sticky top-24 rounded-xl border border-gray-200/80 dark:border-gray-700/80 bg-background-light p-6 dark:bg-gray-900/50">
                                <div class="mb-6 flex items-center justify-between">
                                    <h3 class="text-lg font-bold">Filters</h3>
                                    <button class="text-sm font-medium text-green-700 hover:underline dark:text-primary">Reset</button>
                                </div>
                                <div class="space-y-6">
                                    <!-- Region Filter -->
                                    <div>
                                        <label class="mb-2 block text-sm font-medium" for="region-select">Region/Canton</label>
                                        <div class="relative">
                                            <span class="material-symbols-outlined pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">public</span>
                                            <select class="form-select w-full rounded-lg border-gray-300 bg-gray-100 pl-10 dark:border-gray-600 dark:bg-gray-800 focus:border-green-500 focus:ring-green-500" id="region-select">
                                                <option>Zürich</option>
                                                <option>Geneva</option>
                                                <option>Bern</option>
                                                <option>Vaud</option>
                                            </select>
                                        </div>
                                    </div>
                                    <!-- Store Filter -->
                                    <div>
                                        <h4 class="mb-2 text-sm font-medium">Store</h4>
                                        <div class="space-y-2">
                                            <label class="flex items-center">
                                                <input checked="" class="form-checkbox h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500" type="checkbox" />
                                                <span class="ml-2 text-sm">Coop</span>
                                            </label>
                                            <label class="flex items-center">
                                                <input checked="" class="form-checkbox h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500" type="checkbox" />
                                                <span class="ml-2 text-sm">Migros</span>
                                            </label>
                                            <label class="flex items-center">
                                                <input class="form-checkbox h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500" type="checkbox" />
                                                <span class="ml-2 text-sm">Alnatura</span>
                                            </label>
                                        </div>
                                    </div>
                                    <!-- Category Filter -->
                                    <div>
                                        <h4 class="mb-2 text-sm font-medium">Category</h4>
                                        <div class="space-y-2">
                                            <label class="flex items-center">
                                                <input class="form-checkbox h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500" type="checkbox" />
                                                <span class="ml-2 text-sm">Fruits &amp; Vegetables</span>
                                            </label>
                                            <label class="flex items-center">
                                                <input class="form-checkbox h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500" type="checkbox" />
                                                <span class="ml-2 text-sm">Dairy &amp; Eggs</span>
                                            </label>
                                            <label class="flex items-center">
                                                <input class="form-checkbox h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500" type="checkbox" />
                                                <span class="ml-2 text-sm">Bakery</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </aside>
                        <!-- Main Content: Deals -->
                        <div class="flex-1">
                            <h2 class="text-2xl font-bold tracking-tight text-[#111b0d] dark:text-gray-100 pb-4">Today's Top Deals</h2>
                            <!-- Image Grid -->
                            <div class="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
                                <div class="group flex flex-col overflow-hidden rounded-lg border border-gray-200/80 bg-background-light dark:border-gray-700/80 dark:bg-gray-900/50">
                                    <div class="relative w-full aspect-[4/3] bg-cover bg-center" data-alt="Fresh red organic apples in a basket" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAycNkKPCAO7z4mbTgJRrNrSYwrvloqcN4HsV6a7Z0hCKErXh2Z_aH_CpAMI2XyQ5JsOzOi6mGDSQdP_GfbrCFlBKewsOmqU5jg9sH-K1059tpVjMfNAHTzPBmHSLbg6wpzvcPFawk32_AnCtdwUhiM107iVNGsBq8zcoEJZ7eUbbwMb1SmCM7LTeXWGVNIkja8r-eU5t7ZTW5xT_QHhSClK65GENp-28XLIM3efhb-V1fOA9wfoUiq3p0Dsj1Clse7rPQzWgdeXsDe");'>
                                        <span class="absolute right-2 top-2 rounded-full bg-red-500 px-2 py-1 text-xs font-bold text-white">-30%</span>
                                        <div class="absolute bottom-2 left-2 flex items-center gap-1 rounded-full bg-green-100/80 px-2 py-1 backdrop-blur-sm">
                                            <span class="material-symbols-outlined !text-base text-green-800">verified</span>
                                            <span class="text-xs font-medium text-green-800">Bio</span>
                                        </div>
                                    </div>
                                    <div class="flex flex-1 flex-col p-4">
                                        <p class="text-base font-medium text-[#111b0d] dark:text-gray-100">Organic Apples</p>
                                        <p class="text-sm text-gray-500 dark:text-gray-400">Coop</p>
                                        <div class="mt-auto pt-2">
                                            <span class="text-lg font-bold text-green-700 dark:text-primary">2.50 CHF</span>
                                            <span class="ml-2 text-sm text-gray-400 line-through">3.60</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="group flex flex-col overflow-hidden rounded-lg border border-gray-200/80 bg-background-light dark:border-gray-700/80 dark:bg-gray-900/50">
                                    <div class="relative w-full aspect-[4/3] bg-cover bg-center" data-alt="A glass bottle of bio whole milk" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuB5iuxIglrI8XIoUfA9yMt638sL79grt5QPjRXdqz3hGlvIBF1HshqI77r76lriAtRCY34H0LSmLHmog9UhcjxgsooBO4NC11FhFf2RjyTw7pofpAOqZNboAtXr3wkeFgdHsNsNWX09g9FUbFaWMhotuNvvkgWGqCHHJ1LNPnTDOuUxmAExD1E2vR0CQv7hSjmm6Kpd0q63jyNgmyF4tfI3QnxBqFPo8aez52uvLXW9owBpECzQx0YSRb38qltMCDZrilArnbOw9tY2");'>
                                        <span class="absolute right-2 top-2 rounded-full bg-red-500 px-2 py-1 text-xs font-bold text-white">-20%</span>
                                        <div class="absolute bottom-2 left-2 flex items-center gap-1 rounded-full bg-green-100/80 px-2 py-1 backdrop-blur-sm">
                                            <span class="material-symbols-outlined !text-base text-green-800">verified</span>
                                            <span class="text-xs font-medium text-green-800">Bio</span>
                                        </div>
                                    </div>
                                    <div class="flex flex-1 flex-col p-4">
                                        <p class="text-base font-medium text-[#111b0d] dark:text-gray-100">Bio Whole Milk</p>
                                        <p class="text-sm text-gray-500 dark:text-gray-400">Migros</p>
                                        <div class="mt-auto pt-2">
                                            <span class="text-lg font-bold text-green-700 dark:text-primary">1.80 CHF</span>
                                            <span class="ml-2 text-sm text-gray-400 line-through">2.25</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="group flex flex-col overflow-hidden rounded-lg border border-gray-200/80 bg-background-light dark:border-gray-700/80 dark:bg-gray-900/50">
                                    <div class="relative w-full aspect-[4/3] bg-cover bg-center" data-alt="A loaf of artisanal sourdough bread" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDiWaopcBfgbN48f5hNFJ5l2anUxshgsD6n3I0SiPnH0-mYWVK20nxyIcgOWyj7Djw1zbuOrhc8KmfF0pbeEu3RHqFE8j7zQDmTBS-dLkWcdjARN6QtSTcwn8LCFElukx2qn8dylYYbqqzsclaaC3H3B7Ex86yze-2Zgx5hQFYQe8L0mrsJh6z_826Ti6-4KFcYeAb1v8bR2211F3fbbUbKtuSdQcld-T6yxUm2_HAjiXgBNg0kXzQUMcBdo_yRTi9ZFNSUarK2HMsf");'>
                                        <span class="absolute right-2 top-2 rounded-full bg-red-500 px-2 py-1 text-xs font-bold text-white">-1.50 CHF</span>
                                        <div class="absolute bottom-2 left-2 flex items-center gap-1 rounded-full bg-green-100/80 px-2 py-1 backdrop-blur-sm">
                                            <span class="material-symbols-outlined !text-base text-green-800">verified</span>
                                            <span class="text-xs font-medium text-green-800">Bio</span>
                                        </div>
                                    </div>
                                    <div class="flex flex-1 flex-col p-4">
                                        <p class="text-base font-medium text-[#111b0d] dark:text-gray-100">Sourdough Bread</p>
                                        <p class="text-sm text-gray-500 dark:text-gray-400">Alnatura</p>
                                        <div class="mt-auto pt-2">
                                            <span class="text-lg font-bold text-green-700 dark:text-primary">4.00 CHF</span>
                                            <span class="ml-2 text-sm text-gray-400 line-through">5.50</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="group flex flex-col overflow-hidden rounded-lg border border-gray-200/80 bg-background-light dark:border-gray-700/80 dark:bg-gray-900/50">
                                    <div class="relative w-full aspect-[4/3] bg-cover bg-center" data-alt="Carton of free-range brown eggs" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCOibMUplVROjYI248zVEaH2H2NTEhKts0UZSLL5nAeDVvfdY1fbH_rSz0cQ_0tyx9UGP-WXWojEDoDb2ZaEE_UGp4Orie7ZBFTDVBK8X1ZDHxu5w8ztOQulbgHvSfXiewRVd3sAExVrPxAxIVKU7xwwaWzooEDeZZ4KG0h0U7Rs2sN7KxjZ9NkuBZqmL84MKjrFO2W0Z8qvv18W31uUkn7pvpcY3K0KumcwKBZkH8maL-uVC37AUNo_zCTBe9ZBI048msAiipaVZ8X");'>
                                        <span class="absolute right-2 top-2 rounded-full bg-red-500 px-2 py-1 text-xs font-bold text-white">-25%</span>
                                        <div class="absolute bottom-2 left-2 flex items-center gap-1 rounded-full bg-green-100/80 px-2 py-1 backdrop-blur-sm">
                                            <span class="material-symbols-outlined !text-base text-green-800">verified</span>
                                            <span class="text-xs font-medium text-green-800">Bio</span>
                                        </div>
                                    </div>
                                    <div class="flex flex-1 flex-col p-4">
                                        <p class="text-base font-medium text-[#111b0d] dark:text-gray-100">Free-Range Eggs</p>
                                        <p class="text-sm text-gray-500 dark:text-gray-400">Coop</p>
                                        <div class="mt-auto pt-2">
                                            <span class="text-lg font-bold text-green-700 dark:text-primary">3.50 CHF</span>
                                            <span class="ml-2 text-sm text-gray-400 line-through">4.70</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="group flex flex-col overflow-hidden rounded-lg border border-gray-200/80 bg-background-light dark:border-gray-700/80 dark:bg-gray-900/50">
                                    <div class="relative w-full aspect-[4/3] bg-cover bg-center" data-alt="Ripe organic tomatoes on the vine" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDLVPDcSepXATMsf7iQ32sM_zkqIm3KfIu2zCFP7MBi5FoaO7RLpGPZiTvuNpuL18QGqnqE6TZwvuqHe0Fqggl8Dw8w246yN6FFssbw2iq0Fiod4Sb8uGN7K9bu5PQpKtLXBkb__aBRbFIrYudc6Ay3gJaq4i032x5riU8bg00gdDE1fqWolNOomtSszZFDhFkdv-IVnQQFyzn9JEGmvdKY4GT8TRCtJNrwlZ8KHQz3mgy80rFt-mFqoBgM2-OKdy6ATGyoNC7eYzXU");'>
                                        <span class="absolute right-2 top-2 rounded-full bg-red-500 px-2 py-1 text-xs font-bold text-white">-40%</span>
                                        <div class="absolute bottom-2 left-2 flex items-center gap-1 rounded-full bg-green-100/80 px-2 py-1 backdrop-blur-sm">
                                            <span class="material-symbols-outlined !text-base text-green-800">verified</span>
                                            <span class="text-xs font-medium text-green-800">Bio</span>
                                        </div>
                                    </div>
                                    <div class="flex flex-1 flex-col p-4">
                                        <p class="text-base font-medium text-[#111b0d] dark:text-gray-100">Organic Tomatoes</p>
                                        <p class="text-sm text-gray-500 dark:text-gray-400">Migros</p>
                                        <div class="mt-auto pt-2">
                                            <span class="text-lg font-bold text-green-700 dark:text-primary">2.00 CHF</span>
                                            <span class="ml-2 text-sm text-gray-400 line-through">3.30</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="group flex flex-col overflow-hidden rounded-lg border border-gray-200/80 bg-background-light dark:border-gray-700/80 dark:bg-gray-900/50">
                                    <div class="relative w-full aspect-[4/3] bg-cover bg-center" data-alt="A bowl of thick bio greek yogurt" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBnuopb1B0FWi7yoZJH7bLHTEW3vOPtWeQa2JGUUEfJkGLnW8MSrHGsH9WVpkmwIwOakYOcg_ouQkqnNw0TatmjWGomGcWotZ3hjWMdxBKg6SC3sO06ocIy3yIRe0rhLVslNzShq2hYRpMIPebQ1J6_P2b3s2UzTkxZGzZGvgf9NPAMIXJQvtjzAjgY9PhBEbabl53yLlotCUI2PJkCOczWJ_BbXjtM512D_Pzw7euFlP0CSZSFJ5KmyjwwrsRLEP_1dhaHT07eke51");'>
                                        <span class="absolute right-2 top-2 rounded-full bg-red-500 px-2 py-1 text-xs font-bold text-white">-0.80 CHF</span>
                                        <div class="absolute bottom-2 left-2 flex items-center gap-1 rounded-full bg-green-100/80 px-2 py-1 backdrop-blur-sm">
                                            <span class="material-symbols-outlined !text-base text-green-800">verified</span>
                                            <span class="text-xs font-medium text-green-800">Bio</span>
                                        </div>
                                    </div>
                                    <div class="flex flex-1 flex-col p-4">
                                        <p class="text-base font-medium text-[#111b0d] dark:text-gray-100">Bio Greek Yogurt</p>
                                        <p class="text-sm text-gray-500 dark:text-gray-400">Alnatura</p>
                                        <div class="mt-auto pt-2">
                                            <span class="text-lg font-bold text-green-700 dark:text-primary">2.20 CHF</span>
                                            <span class="ml-2 text-sm text-gray-400 line-through">3.00</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="group flex flex-col overflow-hidden rounded-lg border border-gray-200/80 bg-background-light dark:border-gray-700/80 dark:bg-gray-900/50">
                                    <div class="relative w-full aspect-[4/3] bg-cover bg-center" data-alt="A bowl of cooked quinoa" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAk6Ay_vh7ojsnaGGu-hhEPkJAPwhVvJB6KjZHy6mv1rckKTZXvQdAWJRFpENLhzbcIiY-Xl8DHGruQrw6ryc8FHOzJ6p3YrNYMxZejIInfk5MA4RcmQv9a_WMg3EhcBzxODr7mPr7EaFJMFZA1sjRkJaR8RWM9nX5sUi7aCC_UXeJwJGXK_wbPKkXRclpZWfKQEwTD7BM40Vs_8Gc-xzghgVb4zXvjONaOq2H6I5QSBtU8i3Jq2EL7LbqE3WCf5HnJCVAvyqm97o8w");'>
                                        <span class="absolute right-2 top-2 rounded-full bg-red-500 px-2 py-1 text-xs font-bold text-white">-20%</span>
                                        <div class="absolute bottom-2 left-2 flex items-center gap-1 rounded-full bg-green-100/80 px-2 py-1 backdrop-blur-sm">
                                            <span class="material-symbols-outlined !text-base text-green-800">verified</span>
                                            <span class="text-xs font-medium text-green-800">Bio</span>
                                        </div>
                                    </div>
                                    <div class="flex flex-1 flex-col p-4">
                                        <p class="text-base font-medium text-[#111b0d] dark:text-gray-100">Quinoa</p>
                                        <p class="text-sm text-gray-500 dark:text-gray-400">Migros</p>
                                        <div class="mt-auto pt-2">
                                            <span class="text-lg font-bold text-green-700 dark:text-primary">5.50 CHF</span>
                                            <span class="ml-2 text-sm text-gray-400 line-through">6.90</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="group flex flex-col overflow-hidden rounded-lg border border-gray-200/80 bg-background-light dark:border-gray-700/80 dark:bg-gray-900/50">
                                    <div class="relative w-full aspect-[4/3] bg-cover bg-center" data-alt="Fresh green spinach leaves" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCztj6H4o5MO3KkgK_A31SWFFtzVoSWYTJSdRN9TICyp8ni_giEkyXQ8k2TLKOuR9V9bJGmMdXnqvdYKs_qopRqfDMvVHA5ILhaFssLj58h2XwhaIrjOxdZKgEfiiOn9xa3LBdNch0GKiUPkOUZT_SmpXi-IYi40CNvEKY5PBqzS2E0Phc6n_qKF4iLoFpRXDDyz6cid363kzYT6Fu5cTfINGI6Gv7Wb4cDy__orfsCwskp8mKMPIjQCW_jmB9jrtJ77C1b1hcEAeke");'>
                                        <span class="absolute right-2 top-2 rounded-full bg-red-500 px-2 py-1 text-xs font-bold text-white">-1.00 CHF</span>
                                        <div class="absolute bottom-2 left-2 flex items-center gap-1 rounded-full bg-green-100/80 px-2 py-1 backdrop-blur-sm">
                                            <span class="material-symbols-outlined !text-base text-green-800">verified</span>
                                            <span class="text-xs font-medium text-green-800">Bio</span>
                                        </div>
                                    </div>
                                    <div class="flex flex-1 flex-col p-4">
                                        <p class="text-base font-medium text-[#111b0d] dark:text-gray-100">Fresh Spinach</p>
                                        <p class="text-sm text-gray-500 dark:text-gray-400">Coop</p>
                                        <div class="mt-auto pt-2">
                                            <span class="text-lg font-bold text-green-700 dark:text-primary">3.00 CHF</span>
                                            <span class="ml-2 text-sm text-gray-400 line-through">4.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Pagination -->
                            <div class="mt-8 flex items-center justify-center p-4">
                                <a class="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700" href="#">
                                    <span class="material-symbols-outlined text-[#111b0d] dark:text-gray-100">chevron_left</span>
                                </a>
                                <a class="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-sm font-bold text-green-800 dark:bg-primary/30 dark:text-white" href="#">1</a>
                                <a class="flex h-10 w-10 items-center justify-center rounded-full text-sm font-normal text-[#111b0d] hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-700" href="#">2</a>
                                <a class="flex h-10 w-10 items-center justify-center rounded-full text-sm font-normal text-[#111b0d] hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-700" href="#">3</a>
                                <span class="flex h-10 w-10 items-center justify-center text-sm font-normal text-[#111b0d] dark:text-gray-200">...</span>
                                <a class="flex h-10 w-10 items-center justify-center rounded-full text-sm font-normal text-[#111b0d] hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-700" href="#">8</a>
                                <a class="flex h-10 w-10 items-center justify-center rounded-full text-sm font-normal text-[#111b0d] hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-700" href="#">9</a>
                                <a class="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700" href="#">
                                    <span class="material-symbols-outlined text-[#111b0d] dark:text-gray-100">chevron_right</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </main>
                <!-- Footer -->
                <footer class="w-full border-t border-gray-200/80 bg-background-light dark:border-gray-700/80 dark:bg-background-dark">
                    <div class="container mx-auto px-4 py-8">
                        <div class="flex flex-col items-center justify-between gap-6 md:flex-row">
                            <div class="flex items-center gap-2 text-[#111b0d] dark:text-gray-100">
                                <div class="h-5 w-5 text-green-700 dark:text-primary">
                                    <svg fill="currentColor" viewbox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z"></path>
                                    </svg>
                                </div>
                                <h2 class="font-bold">Bio Deals CH</h2>
                            </div>
                            <nav class="flex gap-6 text-sm">
                                <a class="hover:text-green-700 dark:hover:text-primary" href="#">Privacy Policy</a>
                                <a class="hover:text-green-700 dark:hover:text-primary" href="#">Terms of Service</a>
                            </nav>
                            <p class="text-sm text-gray-500">© 2024 Bio Deals CH. All rights reserved.</p>
                        </div>
                    </div>
                </footer>
            </div>
        </body></html>