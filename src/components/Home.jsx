import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';

const Home = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            {/* Hero Section */}
            <section className="bg-gray-100 py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="lg:text-center">
                            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Welcome to My Home</h2>
                            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                A place where you can relax and feel at home
                            </p>
                            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum mauris ac urna ullamcorper, quis malesuada purus elementum. Fusce varius sollicitudin ex id placerat.
                            </p>
                        </div>
                    </div>
                </section>
                {/* Features Section */}
                <section className="bg-white py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="lg:text-center">
                            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Our Features</h2>
                            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                Discover what we have to offer
                            </p>
                        </div>
                        <div className="mt-10">
                            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                                <div className="bg-gray-100 rounded-lg shadow-lg">
                                    <div className="p-6">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-600 text-white">
                                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLine rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 9l-3 3m0 0l-3-3m3 3v6" />
                                            </svg>
                                        </div>
                                        <h3 className="mt-4 text-lg font-medium text-gray-900">Beautiful Design</h3>
                                        <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum mauris ac urna ullamcorper, quis malesuada purus elementum.</p>
                                    </div>
                                </div>
                                <div className="bg-gray-100 rounded-lg shadow-lg">
                                    <div className="p-6">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-600 text-white">
                                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                                            </svg>
                                        </div>
                                        <h3 className="mt-4 text-lg font-medium text-gray-900">Modern Amenities</h3>
                                        <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum mauris ac urna ullamcorper, quis malesuada purus elementum.</p>
                                    </div>
                                </div>
                                <div className="bg-gray-100 rounded-lg shadow-lg">
                                    <div className="p-6">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-600 text-white">
                                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                            </svg>
                                        </div>
                                        <h3 className="mt-4 text-lg font-medium text-gray-900">Convenient Location</h3>
                                        <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum mauris ac urna ullamcorper, quis malesuada purus elementum.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </div>
    );
};

export default Home;