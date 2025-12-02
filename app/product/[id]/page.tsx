import React from 'react';
import Link from 'next/link';

export default function ProductPage({ params }: { params: { id: string } }) {
    // In a real app, we would fetch product data based on params.id
    // For now, we'll use the static data from the design reference

    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 px-6 md:px-10 lg:px-20 py-4 bg-white sticky top-0 z-10">
                <div className="flex items-center gap-8">
                    <Link href="/" className="flex items-center gap-2 text-gray-900 hover:opacity-80 transition-opacity">
                        <div className="text-green-700">
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 48 48"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M13.8261 17.4264C16.7203 18.1174 20.2244 18.5217 24 18.5217C27.7756 18.5217 31.2797 18.1174 34.1739 17.4264C36.9144 16.7722 39.9967 15.2331 41.3563 14.1648L24.8486 40.6391C24.4571 41.267 23.5429 41.267 23.1514 40.6391L6.64374 14.1648C8.00331 15.2331 11.0856 16.7722 13.8261 17.4264Z"
                                    fill="currentColor"
                                ></path>
                                <path
                                    clipRule="evenodd"
                                    d="M39.998 12.236C39.9944 12.2537 39.9875 12.2845 39.9748 12.3294C39.9436 12.4399 39.8949 12.5741 39.8346 12.7175C39.8168 12.7597 39.7989 12.8007 39.7813 12.8398C38.5103 13.7113 35.9788 14.9393 33.7095 15.4811C30.9875 16.131 27.6413 16.5217 24 16.5217C20.3587 16.5217 17.0125 16.131 14.2905 15.4811C12.0012 14.9346 9.44505 13.6897 8.18538 12.8168C8.17384 12.7925 8.16216 12.767 8.15052 12.7408C8.09919 12.6249 8.05721 12.5114 8.02977 12.411C8.00356 12.3152 8.00039 12.2667 8.00004 12.2612C8.00004 12.261 8 12.2607 8.00004 12.2612C8.00004 12.2359 8.0104 11.9233 8.68485 11.3686C9.34546 10.8254 10.4222 10.2469 11.9291 9.72276C14.9242 8.68098 19.1919 8 24 8C28.8081 8 33.0758 8.68098 36.0709 9.72276C37.5778 10.2469 38.6545 10.8254 39.3151 11.3686C39.9006 11.8501 39.9857 12.1489 39.998 12.236ZM4.95178 15.2312L21.4543 41.6973C22.6288 43.5809 25.3712 43.5809 26.5457 41.6973L43.0534 15.223C43.0709 15.1948 43.0878 15.1662 43.104 15.1371L41.3563 14.1648C43.104 15.1371 43.1038 15.1374 43.104 15.1371L43.1051 15.135L43.1065 15.1325L43.1101 15.1261L43.1199 15.1082C43.1276 15.094 43.1377 15.0754 43.1497 15.0527C43.1738 15.0075 43.2062 14.9455 43.244 14.8701C43.319 14.7208 43.4196 14.511 43.5217 14.2683C43.6901 13.8679 44 13.0689 44 12.2609C44 10.5573 43.003 9.22254 41.8558 8.2791C40.6947 7.32427 39.1354 6.55361 37.385 5.94477C33.8654 4.72057 29.133 4 24 4C18.867 4 14.1346 4.72057 10.615 5.94478C8.86463 6.55361 7.30529 7.32428 6.14419 8.27911C4.99695 9.22255 3.99999 10.5573 3.99999 12.2609C3.99999 13.1275 4.29264 13.9078 4.49321 14.3607C4.60375 14.6102 4.71348 14.8196 4.79687 14.9689C4.83898 15.0444 4.87547 15.1065 4.9035 15.1529C4.91754 15.1762 4.92954 15.1957 4.93916 15.2111L4.94662 15.223L4.95178 15.2312ZM35.9868 18.996L24 38.22L12.0131 18.996C12.4661 19.1391 12.9179 19.2658 13.3617 19.3718C16.4281 20.1039 20.0901 20.5217 24 20.5217C27.9099 20.5217 31.5719 20.1039 34.6383 19.3718C35.082 19.2658 35.5339 19.1391 35.9868 18.996Z"
                                    fill="currentColor"
                                    fillRule="evenodd"
                                ></path>
                            </svg>
                        </div>
                        <h2 className="text-xl font-bold tracking-tight">
                            Bio Deals CH
                        </h2>
                    </Link>
                    <div className="hidden md:flex items-center gap-9">
                        <a
                            className="text-sm font-medium leading-normal hover:text-green-700 transition-colors"
                            href="#"
                        >
                            Categories
                        </a>
                        <a
                            className="text-sm font-medium leading-normal hover:text-green-700 transition-colors"
                            href="#"
                        >
                            Retailers
                        </a>
                        <a
                            className="text-sm font-medium leading-normal hover:text-green-700 transition-colors"
                            href="#"
                        >
                            About Us
                        </a>
                    </div>
                </div>
                <div className="flex flex-1 justify-end gap-2 md:gap-4">
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-green-700 text-white text-sm font-bold leading-normal tracking-[0.015em] transition-opacity hover:opacity-80">
                        <span className="truncate">Track Items</span>
                    </button>
                    <button className="hidden md:flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-gray-100 text-gray-900 text-sm font-bold leading-normal tracking-[0.015em] transition-opacity hover:opacity-80">
                        <span className="truncate">My Account</span>
                    </button>
                </div>
            </header>
            <main className="layout-container flex h-full grow flex-col">
                <div className="px-6 md:px-10 lg:px-20 flex flex-1 justify-center py-5">
                    <div className="layout-content-container flex flex-col w-full max-w-6xl flex-1">
                        <div className="flex flex-wrap gap-2 py-4">
                            <Link
                                className="text-gray-500 text-sm font-medium leading-normal hover:text-green-700"
                                href="/"
                            >
                                Home
                            </Link>
                            <span className="text-gray-500 text-sm font-medium leading-normal">
                                /
                            </span>
                            <a
                                className="text-gray-500 text-sm font-medium leading-normal hover:text-green-700"
                                href="#"
                            >
                                Fruits &amp; Vegetables
                            </a>
                            <span className="text-gray-500 text-sm font-medium leading-normal">
                                /
                            </span>
                            <span className="text-gray-900 text-sm font-medium leading-normal">
                                Bio Apples
                            </span>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 pt-6">
                            {/* Left Column: Image Gallery */}
                            <div className="flex flex-col gap-4">
                                <div
                                    className="w-full bg-center bg-no-repeat bg-cover aspect-square rounded-xl shadow-sm"
                                    data-alt="A bag of fresh bio gala apples"
                                    style={{
                                        backgroundImage:
                                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuABWT_qhN_Cg1FhW_PGujQ2Tvid7FX3o1itAR-to__gmJyH2M3nWLA31MbjoZujTUrXsTKjQjl46Zpe3oQ17gv2BqKIStpsAU9YLaB3ojPXJiffgiUY8T8JHCK5gOglRGtxTnGISTkh-B3tAGMZjNnkBLo7CFv4Y0MOdtGiodso9EVJ1FyqLQQ_urK3apPsKh1vjkHXMM13pgEb8u01SC9XOvf9F2Pf9k2B_zOqvVodTfjctTY7XalOwO__hhUa-8U6QmvRHNc3X13N")',
                                    }}
                                ></div>
                                <div className="grid grid-cols-4 gap-4">
                                    <div
                                        className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg border-2 border-green-700"
                                        data-alt="A bag of fresh bio gala apples"
                                        style={{
                                            backgroundImage:
                                                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDWe9tOhvk03tJpZ8F_3nLZuUtj9EiZUY3284oAtb4z9m5nStYB6eEXDAI-vQ5cmbbwE4Q_rVllzlBCex85rPVVQPc5siCzNfD4R3KVYtHzMt00R1iJKibAVWq71MAA7GWKdL9LhMBSkmMDkqiCPzRsN7GuxrqQGZd0OoiP5g81mOFoXCnuNjNj145f9Bfj4M90fTx2obuD-LTHHn4lnIx0vKLyKpmxN9un78uu6fCwPzVc5nrs1RCTLCQhDGR3TEmK9b5nPUmIK0ym")',
                                        }}
                                    ></div>
                                    <div
                                        className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg opacity-60 hover:opacity-100 transition-opacity"
                                        data-alt="A close-up of a single gala apple"
                                        style={{
                                            backgroundImage:
                                                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC_I-bkZUHnzmWxhbVnRqn_ZhHsRM3LsyK6Aelf6Dx3DapQg8WcIg31T8RSJxzPSMrFYP0UUvvWSC8G-JEP9TZMJ9f835V81o8a5dPjQ0PdqBUbeP6ahdH1SR_vNLa7bgZx1QJuQbJia8k6iMCU9gXqy5CI_dejkbv7Aq0yn8xHj1oNQ4umgdGDiuzKbuzZ2irNxj_Dpx71lj84ufizYX73Ch3HLxx1uQQ16ZywDLIz1VwDhjQtoAP8JCPDBm7pnJpGhFSQ5ouNXVR5")',
                                        }}
                                    ></div>
                                    <div
                                        className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg opacity-60 hover:opacity-100 transition-opacity"
                                        data-alt="The nutrition label on the apple bag"
                                        style={{
                                            backgroundImage:
                                                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBZceaY7kP0fLoKCEWhDZqylj9ecBqlaC3e32J7fJ94scZ7_DyjsjR6m8RIAcJfdTY9ouyIWnqSJGLt3fRHE9WYQkOgxdr0qC59Y5N3Rw5vWK01XUqkP0pLQTRHs0JNrJn2hhC4QRYo1R20yMCAi8N_2fiWc8qRdNpKb4q1WVsvBOeZQGIG_MTTxyKRBfrjCaBd69AXMQVrGDJiCKDSAyVThUFQypDC7OfDgs1HP7fdQ9GZ4sx-mbAUbRBdL1HgWPfH6izJ7uqsHa_1")',
                                        }}
                                    ></div>
                                    <div
                                        className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg opacity-60 hover:opacity-100 transition-opacity"
                                        data-alt="An apple orchard"
                                        style={{
                                            backgroundImage:
                                                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBh4ZVMF_D0aoo9aXHKZfcecETDxxLLBVFp0RgepHOHG7WGs7Mjx7yCPm_douooP-F4iKXEUyjkk_Z59PQUHPcuzZZCqb5iJNJ_4CoW8WI3QqmnGDnksu4aQrUCYNUZKCJ7yFlV0sm24Ob02MbRegJeCPSAkSmx-muAjjhQScqpoUkLFNOUrdhD_8ZrZIMTvhKhVKEFENhK4kH-K_j1HEqoIhNF9A57X9uDSxcitDG1kkkrogzxTpdGAMIGlPZBqTRax9FIQKg07qY6")',
                                        }}
                                    ></div>
                                </div>
                            </div>
                            {/* Right Column: Product Details */}
                            <div className="flex flex-col gap-6">
                                <div className="flex flex-col gap-2">
                                    <p className="text-gray-500 text-xs font-medium uppercase tracking-wider">
                                        Naturaplan
                                    </p>
                                    <p className="text-gray-900 text-3xl font-bold leading-tight tracking-tight">
                                        Fresh Bio Gala Apples
                                    </p>
                                    <p className="text-gray-500 text-lg font-normal leading-normal">
                                        Bio Suisse Certified, 1kg Bag
                                    </p>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <div className="flex items-baseline gap-4">
                                        <p className="text-green-700 text-4xl font-bold">CHF 2.95</p>
                                        <p className="text-gray-500 text-xl font-medium line-through">
                                            CHF 4.20
                                        </p>
                                        <div className="bg-red-500 text-white text-sm font-bold py-1 px-3 rounded-full">
                                            -30%
                                        </div>
                                    </div>
                                    <div className="text-gray-700 text-sm font-medium">
                                        On sale until 25.10.2024
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <button className="flex-1 flex min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-12 px-6 border border-gray-300 text-gray-900 text-base font-bold leading-normal tracking-[0.015em] transition-colors hover:bg-gray-50">
                                        <span className="truncate">Go to Coop</span>
                                    </button>
                                    <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg size-12 border border-gray-200 text-gray-500 transition-colors hover:bg-gray-100">
                                        <span className="material-symbols-outlined">ios_share</span>
                                    </button>
                                </div>
                                <div className="border-t border-border-light dark:border-border-dark pt-6">
                                    <p className="font-bold mb-3 text-text-light dark:text-text-dark">
                                        Certifications
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <div
                                            className="flex items-center gap-2 p-2 pr-3 bg-white dark:bg-background-dark border border-border-light dark:border-border-dark rounded-md"
                                            title="Bio Suisse certification guarantees organic farming practices in Switzerland."
                                        >
                                            <img
                                                alt="Bio Suisse Logo"
                                                className="h-8 w-8 object-contain"
                                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXyCit1zlLyV2_5SxBhF3jiolYrSgQ94cv_wKfEyYG8WSyqhnPpupiy4DWw8zxP1Arnow7f9qvoZhx3rN6TF_hImZRD39ttegdu2WeLbJaL2Pz1yQk2rdJvlA33GGXk-X1JoA-a-B4_5ZbkasHX5r0w2bB5M09UjqUMqTLLhDNTDAqriL7WCB37RF0kXBTAd3LcVqhlscJSktgE1gEwvw_GaXQgDSYqT3rQI8_iJuop20rudGf_h-v4CtEQbhovuR3Q1r5Mal4Pt0h"
                                            />
                                            <span className="text-xs font-semibold text-text-light dark:text-text-dark">
                                                Bio Suisse
                                            </span>
                                        </div>
                                        <div
                                            className="flex items-center gap-2 p-2 pr-3 bg-white dark:bg-background-dark border border-border-light dark:border-border-dark rounded-md"
                                            title="Demeter is a certification for biodynamic agriculture."
                                        >
                                            <img
                                                alt="Demeter Logo"
                                                className="h-8 w-8 object-contain"
                                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCOqAnLAgPKudsaA9atg4mTZR_KKvCA2Q3IIeCci8KbRYrpjsBWseV5IT7dbCB4Pe5LBzZfTaTY822Xww_lj1YIGtl8v8qQZ4HluOCyP44MkyIuSD5I_n2FgN6fMJRlBWyw16T0tqyg46N8IzhXBrXYl3SekNGHMzCy4bvVaUon4x38QpKbY_JlUrVNctSka_HTfwPmxuX-7e9YJgZ01k60-hcZdMbiRBE9P-0G6CKsv4fuiWdmnvl2bVdjRZOE6ZXBsyqb0IslIZ8"
                                            />
                                            <span className="text-xs font-semibold text-text-light dark:text-text-dark">
                                                Demeter
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-2">
                                    <div className="border-b border-border-light dark:border-border-dark">
                                        <nav aria-label="Tabs" className="-mb-px flex space-x-6">
                                            <button className="whitespace-nowrap border-b-2 py-4 px-1 text-base font-semibold text-primary border-primary">
                                                Description
                                            </button>
                                            <button className="whitespace-nowrap border-b-2 py-4 px-1 text-base font-medium text-text-subtle-light dark:text-text-subtle-dark border-transparent hover:text-primary hover:border-primary/50">
                                                Nutrition Info
                                            </button>
                                            <button className="whitespace-nowrap border-b-2 py-4 px-1 text-base font-medium text-text-subtle-light dark:text-text-subtle-dark border-transparent hover:text-primary hover:border-primary/50">
                                                Retailer Details
                                            </button>
                                        </nav>
                                    </div>
                                    <div className="py-6 text-text-subtle-light dark:text-text-subtle-dark text-sm leading-relaxed">
                                        <p>
                                            Sweet and crispy, these Gala apples from Swiss organic farms
                                            are a delicious and healthy snack for the whole family.
                                            Grown according to the strict guidelines of Bio Suisse, they
                                            are free from synthetic pesticides and full of natural
                                            flavor. Perfect for lunch boxes, baking, or enjoying fresh.
                                        </p>
                                        <ul className="list-disc pl-5 mt-4 space-y-1">
                                            <li>Origin: Thurgau, Switzerland</li>
                                            <li>Variety: Gala</li>
                                            <li>Storage: Keep cool and dry</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div >
    );
}
