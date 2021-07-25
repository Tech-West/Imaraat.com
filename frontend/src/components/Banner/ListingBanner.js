import React from "react";
import { Link } from "react-router-dom";

export default function ListingBanner() {
  return (
    <div>
      <div className="relative items-start justify-center mt-6 flex flex-col">
        <h1 className="text-xl font-bold p-4 self-center text-black">
          New Listings
        </h1>
        <div className="lg:flex items-center container mx-auto my-auto">
          <div className="lg:m-4 shadow-md hover:shadow-lg hover:bg-gray-100 rounded-lg bg-white my-12 mx-8">
            <img
              src="https://picsum.photos/id/29/2106/1404"
              alt=""
              className="overflow-hidden"
            />
            <div className="p-4">
              <h3 className="font-medium text-gray-600 text-lg my-2 uppercase">
                DHA Phase 6 - Lahore
              </h3>
              <p className="text-justify text-sm">
                The be might what days revellers, which sought to a nor. Land
                from to suits his some. Saw him counsel begun mother though but.
                Ofttimes soils of since mighty pollution.
              </p>
              <div className="mt-5 opacity-80">
                <Link
                  to="/"
                  className="bg-orange-primary hover:bg-orange-secondary rounded-lg py-2 px-3 font-semibold hover:text-white text-gray-100"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:m-4 shadow-md hover:shadow-lg hover:bg-gray-100 rounded-lg bg-white my-12 mx-8">
            <img
              src="https://picsum.photos/id/247/2106/1404"
              alt=""
              className="overflow-hidden"
            />
            <div className="p-4">
              <h3 className="font-medium text-gray-600 text-lg my-2 uppercase">
                Bahria Orchard - Lahore
              </h3>
              <p className="text-justify text-sm">
                Rapping wind chamber have was has, is all of thy stood chamber
                his bore. Nameless or as door tapping both thy grew lenore. We
                my still respiterespite lie, with lordly.
              </p>
              <div className="mt-5 opacity-80">
                <Link
                  to="/"
                  className="bg-orange-primary hover:bg-orange-secondary rounded-lg py-2 px-3 font-semibold hover:text-white text-gray-100"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:m-4 shadow-md hover:shadow-lg hover:bg-gray-100 rounded-lg bg-white my-12 mx-8">
            <img
              src="https://picsum.photos/id/342/2106/1404"
              alt=""
              className="overflow-hidden"
            />
            <div className="p-4">
              <h3 className="font-medium text-gray-600 text-lg my-2 uppercase">
                Riawand Road - Lahore
              </h3>
              <p className="text-justify text-sm">
                Upon but that objects tis sore would what. Who formed in
                coffined heartless shades, there mine was heart vast flaunting
                he low relief uncouth, dear and suffice ofttimes.
              </p>
              <div className="mt-5 opacity-80">
                <Link
                  to="/"
                  className="bg-orange-primary hover:bg-orange-secondary rounded-lg py-2 px-3 font-semibold hover:text-white text-gray-100"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
