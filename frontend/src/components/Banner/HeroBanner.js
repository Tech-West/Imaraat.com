import React from 'react'
import bannerImage from "../../images/home-page-banner.jpg"

export default function HeroBanner() {
    return (
        <div className="bg-black relative text-center text-white">
            <img src={bannerImage} alt="Banner-asset" className="bg-black object-cover h-96 w-full opacity-60"/>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="font-extrabold text-3xl">Let’s find a home that’s perfect for you.</div>
                    <div class="container mx-auto pt-8 flex flex-wrap justify-center shadow-lg">
                        <input class="h-12 w-1/2 rounded-l focus:outline-none  text-sm px-5 text-black" type="search" placeholder="City, Street, ZIP Code"></input>
                        <button class="h-12 w-28 bg-orange-primary hover:bg-orange-secondary text-white font-medium px-4 rounded-r">Search</button>
                    </div>
            </div>
        </div>
    )
}
