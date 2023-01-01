import React from 'react';
import Link from 'next/link';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const LoginButton = () => {
    return (
        <div>
            <Link href='/login' class="inline-flex items-center rounded-full border border-transparent bg-yellow-600 p-2 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                </svg>

            </Link>
        </div>
    );
}

export default LoginButton;
