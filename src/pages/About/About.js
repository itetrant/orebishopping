import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const About = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");

  useEffect(() => {
    if (location.state && location.state.data) {
      setPrevLocation(location.state.data);
    } else {
      setPrevLocation("Home"); // Set a default value if no state is found
    }
  }, [location]);

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="About" prevLocation={prevLocation} />
      <div className="pb-10">

        <h1 class="max-w-[600px] text-base text-lightText mb-2">
          <span class="text-primeColor font-semibold text-lg">B's Mart</span>
          <p>Vision: Multi-industry, multi-format, and multinational business.</p>
          <p>Mission:</p>
          <p>- Listen to and encourage employees, aiming to build and develop the company quickly and satisfy customers.</p>
          <p>- Leverage the strengths of retail business experts worldwide through the local management team.</p>
          <p>- Become a dynamic enterprise and a reliable partner in the consumer business community in Vietnam.</p>
        </h1>

        <Link to="/shop">
          <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
