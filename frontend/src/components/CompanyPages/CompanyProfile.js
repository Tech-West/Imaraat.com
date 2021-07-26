import React from 'react'

export default function CompanyProfile() {
    return (
        <div class="container mx-auto my-5 p-5">
            <div class="md:flex no-wrap md:-mx-2 ">
                {/* <!-- Left Side --> */}
                <div class="w-full md:w-3/12 md:mx-2">
                    {/* <!-- Profile Card --> */}
                    <div class="bg-white p-3 border-t-4 border-orange-primary">
                        <div class="image overflow-hidden">
                            <img class="h-auto w-full mx-auto" src="https://scontent.flhe10-1.fna.fbcdn.net/v/t1.6435-9/132397787_108901461107778_509271119218664828_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeHO1j0J7Qxl-qoLoWvVUJsuEw9e_-KziYYTD17_4rOJhuIxO5HjvcYj_6vjV8X4pYpoVP_z_ji3l9QzDjgCBNkT&_nc_ohc=WrND59M5LxsAX8L1VD7&_nc_ht=scontent.flhe10-1.fna&oh=b5691b536d533f6880127a0e20c93165&oe=61252EA0" alt=""/>
                        </div>
                        <h2 class="text-gray-900 font-bold text-xl leading-6">Pakistan Property Marketing</h2>
                        <p class="text-sm text-gray-500 hover:text-gray-600 leading-6 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non deserunt</p>
                        <ul class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 mt-3 divide-y rounded shadow-sm">
                            <li class="flex items-center py-3  px-3">
                                <span>Status</span>
                                <span class="ml-auto">
                                    <span class="bg-green-500 py-1 px-2 rounded text-white text-sm">Active</span>
                                </span>
                            </li>
                            <li class="flex items-center py-3  px-2">
                                <span>Member since </span>
                                <span class="ml-auto"> Nov 07, 2016</span>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* <!-- Right Side --> */}
                <div class="w-full md:w-9/12 mx-2 h-64">
                    {/* <!-- Profile tab -->
                    <!-- About Section --> */}
                    <div class="bg-white p-3 shadow-sm rounded-sm">
                        <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                            <span clas="text-green-500">
                                <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </span>
                            <span class="tracking-wide">About</span>
                        </div>
                        <div class="text-gray-700">
                            <div class="grid md:grid-cols-2 text-sm">
                                <div class="grid grid-cols-2">
                                    <div class="px-4 py-2 font-semibold">Rating</div>
                                    <div class="px-4 py-2">4.7/5</div>
                                </div>
                                <div class="grid grid-cols-2">
                                    <div class="px-4 py-2 font-semibold">Contact No.</div>
                                    <div class="px-4 py-2">+11 998001001</div>
                                </div>
                                <div class="grid grid-cols-2">
                                    <div class="px-4 py-2 font-semibold">Office Address</div>
                                    <div class="px-4 py-2">112P, Gari Shaho, Lahore, Pakistan</div>
                                </div>
                                <div class="grid grid-cols-2">
                                    <div class="px-4 py-2 font-semibold">Email.</div>
                                    <div class="px-4 py-2">
                                        <a class="text-orange-primary" href="mailto:pakpropertymarketing@gmail.com">pakpropertymarketing@gmail.com</a>
                                    </div>
                                </div>
                                <div class="grid grid-cols-2">
                                    <div class="px-4 py-2 font-semibold">Projects</div>
                                    <div class="px-4 py-2">27</div>
                                </div>
                                <div class="grid grid-cols-2">
                                    <div class="px-4 py-2 font-semibold">Total Project Views</div>
                                    <div class="px-4 py-2">39,072</div>
                                </div>
                            </div>
                        </div>
                        <button
                            class="block w-full text-orange-secondary text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">Show
                            Full Information</button>
                    </div>
                    {/* <!-- End of about section --> */}

                    <div class="my-4"></div>

                    {/* <!-- Experience and education --> */}
                    <div class="bg-white p-3 shadow-sm rounded-sm">
                        <div class="grid grid-cols-2">
                            <div>
                                <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                    <span clas="text-green-500">
                                        <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                    </span>
                                    <span class="tracking-wide">Projects</span>
                                </div>
                                <ul class="list-inside space-y-2">
                                    <li>
                                        <div class="text-teal-600">BAHRIA ORCHARD - LAHORE</div>
                                        <div class="text-gray-500 text-xs">March 2020 - Now</div>
                                    </li>
                                    <li>
                                        <div class="text-teal-600">BAHRIA ORCHARD - LAHORE</div>
                                        <div class="text-gray-500 text-xs">March 2020 - Now</div>
                                    </li>
                                    <li>
                                        <div class="text-teal-600">BAHRIA ORCHARD - LAHORE</div>
                                        <div class="text-gray-500 text-xs">March 2020 - Now</div>
                                    </li>
                                    <li>
                                        <div class="text-teal-600">BAHRIA ORCHARD - LAHORE</div>
                                        <div class="text-gray-500 text-xs">March 2020 - Now</div>
                                    </li>
                                </ul>
                            </div>
                            
                        </div>
                        {/* <!-- End of Experience and grid --> */}
                    </div>
                    {/* <!-- End of profile tab --> */}
                </div>
            </div>
        </div>
    )
}
