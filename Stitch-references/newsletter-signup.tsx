< !DOCTYPE html >

    <html lang="en"><head>
        <meta charset="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>Bio Deals CH - Weekly Newsletter</title>
        <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700;800&amp;display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
        <script>
            tailwind.config = {
                darkMode: "class",
            theme: {
                extend: {
                colors: {
                "primary": "#4CAF50",
            "background-light": "#F8F9FA",
            "background-dark": "#1f2921",
            "text-light": "#333333",
            "text-dark": "#e0e0e0",
            "accent": "#FFC107",
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
        <style type="text/tailwindcss">
            .material-symbols-outlined {
                font - variation - settings:
            'FILL' 0,
            'wght' 400,
            'GRAD' 0,
            'opsz' 24
        }
        </style>
    </head>
        <body class="font-display bg-background-light dark:bg-background-dark">
            <div class="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
                <div class="layout-container flex h-full grow flex-col">
                    <div class="px-4 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-5">
                        <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
                            <!-- TopNavBar -->
                            <header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 dark:border-gray-700 px-4 sm:px-10 py-3">
                                <div class="flex items-center gap-4 text-text-light dark:text-text-dark">
                                    <div class="size-6 text-primary">
                                        <svg fill="none" viewbox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z" fill="currentColor"></path>
                                        </svg>
                                    </div>
                                    <h2 class="text-text-light dark:text-text-dark text-lg font-bold leading-tight tracking-[-0.015em]">Bio Deals CH</h2>
                                </div>
                                <div class="hidden md:flex flex-1 justify-end gap-8">
                                    <div class="flex items-center gap-9">
                                        <a class="text-text-light dark:text-text-dark text-sm font-medium leading-normal" href="#">Home</a>
                                        <a class="text-text-light dark:text-text-dark text-sm font-medium leading-normal" href="#">Deals</a>
                                        <a class="text-text-light dark:text-text-dark text-sm font-medium leading-normal" href="#">Brands</a>
                                        <a class="text-primary dark:text-primary text-sm font-bold leading-normal border-b-2 border-primary" href="#">Newsletter</a>
                                        <a class="text-text-light dark:text-text-dark text-sm font-medium leading-normal" href="#">About Us</a>
                                    </div>
                                    <div class="flex gap-2">
                                        <button class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-gray-200/50 dark:bg-gray-700/50 text-text-light dark:text-text-dark text-sm font-bold leading-normal tracking-[0.015em]">
                                            <span class="truncate">Login</span>
                                        </button>
                                        <button class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em]">
                                            <span class="truncate">Sign Up</span>
                                        </button>
                                    </div>
                                </div>
                            </header>
                            <main class="flex-grow">
                                <!-- HeroSection -->
                                <div class="w-full @container">
                                    <div class="p-0 md:p-4">
                                        <div class="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4 text-center" data-alt="A vibrant, fresh assortment of organic vegetables and fruits spread out on a rustic wooden table." style='background-image: linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.5) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCt0YpHbLKAY5C7e4Ng9bEQmuGrV1PWNfP2AuumTT0mchxROalZjKm6Nqm9j0E24ZAQ0YwaijjjqXzuwQG-Jq1kWfrQ65V6tJPyK0MvAO3wbvG1TNng0I3SQSpDJOV1CKab8gisZIW72T4TBGPaVDQZ2w5ewoQ1XGHKH9s2ZYT3aZ-5AEv4k3CF3klSeFI7xYlPYRbxpiowdcGZQLWpUwiqq-zvCLJgQAENDPmjLTWl4D77WoNWHOH5AUzUEIr7UV5Gg9uyb8YwYjZR");'>
                                            <div class="flex flex-col gap-4">
                                                <h1 class="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">Weekly Bio Deals, Straight to Your Inbox</h1>
                                                <h2 class="text-white text-base font-normal leading-normal @[480px]:text-lg @[480px]:font-normal @[480px]:leading-normal max-w-2xl mx-auto">The best weekly bio promotions from across Switzerland, delivered every Tuesday.</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- FeatureSection -->
                                <div class="flex flex-col gap-10 px-4 py-16 @container">
                                    <div class="flex flex-col gap-4 text-center mx-auto">
                                        <h2 class="text-text-light dark:text-text-dark tracking-light text-3xl font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">Why Join Our Newsletter?</h2>
                                        <p class="text-text-light/80 dark:text-text-dark/80 text-base font-normal leading-normal max-w-[720px]">Become a part of Switzerland's largest community of health-conscious consumers and get the best deals first.</p>
                                    </div>
                                    <div class="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4 p-0">
                                        <div class="flex flex-1 gap-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-background-dark p-6 flex-col items-start">
                                            <div class="text-accent bg-accent/10 p-2 rounded-lg">
                                                <span class="material-symbols-outlined !text-3xl">sell</span>
                                            </div>
                                            <div class="flex flex-col gap-1">
                                                <h3 class="text-text-light dark:text-text-dark text-lg font-bold leading-tight">Discover Top Deals</h3>
                                                <p class="text-text-light/70 dark:text-text-dark/70 text-sm font-normal leading-normal">Find the best weekly discounts and promotions on your favorite organic products.</p>
                                            </div>
                                        </div>
                                        <div class="flex flex-1 gap-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-background-dark p-6 flex-col items-start">
                                            <div class="text-accent bg-accent/10 p-2 rounded-lg">
                                                <span class="material-symbols-outlined !text-3xl">mail</span>
                                            </div>
                                            <div class="flex flex-col gap-1">
                                                <h3 class="text-text-light dark:text-text-dark text-lg font-bold leading-tight">Get Exclusive Offers</h3>
                                                <p class="text-text-light/70 dark:text-text-dark/70 text-sm font-normal leading-normal">Receive special offers and healthy recipes available only to our subscribers.</p>
                                            </div>
                                        </div>
                                        <div class="flex flex-1 gap-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-background-dark p-6 flex-col items-start">
                                            <div class="text-accent bg-accent/10 p-2 rounded-lg">
                                                <span class="material-symbols-outlined !text-3xl">eco</span>
                                            </div>
                                            <div class="flex flex-col gap-1">
                                                <h3 class="text-text-light dark:text-text-dark text-lg font-bold leading-tight">Stay Informed</h3>
                                                <p class="text-text-light/70 dark:text-text-dark/70 text-sm font-normal leading-normal">Be the first to know about new and exciting bio brands entering the Swiss market.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- CTASection -->
                                <div class="bg-white dark:bg-background-dark rounded-xl @container">
                                    <div class="flex flex-col justify-end gap-6 px-4 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20">
                                        <div class="flex flex-col gap-2 text-center mx-auto">
                                            <h2 class="text-text-light dark:text-text-dark tracking-light text-3xl font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">Get Your Weekly Deals</h2>
                                            <p class="text-text-light/80 dark:text-text-dark/80 text-base font-normal leading-normal max-w-[720px]">Join 5,000+ bio lovers in Switzerland and never miss a promotion.</p>
                                        </div>
                                        <div class="flex flex-1 justify-center">
                                            <label class="sr-only" for="email-input">Enter your email address</label>
                                            <div class="flex flex-col w-full min-w-40 h-14 max-w-[480px] flex-1 @[480px]:h-16">
                                                <div class="flex w-full flex-1 items-stretch rounded-lg h-full">
                                                    <input class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border-gray-200 dark:border-gray-700 bg-background-light dark:bg-gray-800/50 h-full placeholder:text-text-light/50 dark:placeholder:text-text-dark/50 px-4 rounded-r-none border-r-0 pr-2 text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal" id="email-input" placeholder="your.email@example.ch" type="email" value="" />
                                                    <div class="flex items-center justify-center rounded-r-lg border-l-0 border-gray-200 dark:border-gray-700 bg-background-light dark:bg-gray-800/50 pr-2">
                                                        <button class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] transition-transform duration-200 hover:scale-105 active:scale-100">
                                                            <span class="truncate">Subscribe Now</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- MetaText -->
                                        <p class="text-text-light/60 dark:text-text-dark/60 text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center">By subscribing, you agree to our <a class="underline hover:text-primary" href="#">Privacy Policy</a>.</p>
                                    </div>
                                </div>
                            </main>
                            <!-- Footer -->
                            <footer class="mt-20 py-10 border-t border-gray-200 dark:border-gray-700">
                                <div class="text-center text-sm text-text-light/70 dark:text-text-dark/70">
                                    <p>© 2024 Bio Deals CH. All rights reserved.</p>
                                    <div class="flex justify-center gap-4 mt-4">
                                        <a class="hover:underline" href="#">Contact</a>
                                        <a class="hover:underline" href="#">Privacy Policy</a>
                                        <a class="hover:underline" href="#">Terms of Service</a>
                                    </div>
                                </div>
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
        </body></html>