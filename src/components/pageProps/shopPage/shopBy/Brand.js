import React, { useState } from "react";
import { motion } from "framer-motion";
import NavTitle from "./NavTitle";
import { useDispatch, useSelector } from "react-redux";
import { toggleBrand } from "../../../../redux/FoxSlice";

const Brand = () => {
  const [showBrands, setShowBrands] = useState(true);
  const checkedBrands = useSelector(
    (state) => state.FoxReducer.checkedBrands
  );
  const En = useSelector(
    (state) => state.FoxReducer.En
  );  
  const dispatch = useDispatch();

  const brands = [
    {
      _id: 900,
      title: "HighLands",
    },
    {
      _id: 901,
      title: "LifeBuoy",
    },
    {
      _id: 902,
      title: "PepsiCo",
    },

    {
      _id: 903,
      title: "AngryBirds",
    },
  ];

  const handleToggleBrand = (brand) => {
    dispatch(toggleBrand(brand));
  };

  return (
    <div>
      <div
        onClick={() => setShowBrands(!showBrands)}
        className="cursor-pointer"
      >
        <NavTitle title= {En?"Shop by Brand":"Mua sắm theo thương hiệu"}  icons={true} />
      </div>
      {showBrands && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
            {brands.map((item) => (
              <li
                key={item._id}
                className="border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center gap-2 hover:text-primeColor hover:border-gray-400 duration-300"
              >
                <input
                  type="checkbox"
                  id={item._id}
                  checked={checkedBrands.some((b) => b._id === item._id)}
                  onChange={() => handleToggleBrand(item)}
                />
                {item.title}
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Brand;
