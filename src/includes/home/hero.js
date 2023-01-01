import Image from 'next/image'
import Link from 'next/link';


export default function Hero() {
    return (
        <div className="relative bg-gray-50">

            <main className="lg:relative">
                <div className="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-48 lg:text-left">
                    <div className="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                            <span className="block xl:inline">Take your notes with you,</span>{' '}
                            <span className="block text-yellow-600 xl:inline"> wherever you go</span>
                        </h1>
                        <p className="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                        Take control of your notes with our powerful and user-friendly web app.Try our app now and see how it can transform the way you take and manage notes
                        </p>
                        <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                            <div className="rounded-md shadow">
                                <Link
                                    href="/notebook"
                                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-yellow-600 px-8 py-3 text-base font-medium text-white hover:bg-orange-700 md:py-4 md:px-10 md:text-lg"
                                >
                                    Get started
                                </Link>
                            </div>
                            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                                <a
                                    href="#"
                                    className="flex w-full items-center justify-center rounded-md border border-solid border-yellow-600 bg-white px-8 py-3 text-base font-medium text-yellow-600 hover:bg-gray-50 md:py-4 md:px-10 md:text-lg"
                                >
                                    Free trail
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
                    <Image src="/hero.png" alt="me" width='950' height='60'/>
                </div>
            </main>
        </div>
    )
}
