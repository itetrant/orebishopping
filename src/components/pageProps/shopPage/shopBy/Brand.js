import React, { useState } from "react";
import { motion } from "framer-motion";
import NavTitle from "./NavTitle";
import { useDispatch, useSelector } from "react-redux";
import { toggleBrand } from "../../../../redux/FoxSlice";
import { brandList } from "../../../../constants";
const Brand = () => {
  const [showBrands, setShowBrands] = useState(true);
  const checkedBrands = useSelector(
    (state) => state.FoxReducer.checkedBrands
  );
  const En = useSelector(
    (state) => state.FoxReducer.En
  );  
  const dispatch = useDispatch();

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
            {brandList.map((brand) => (
              <li
                key={brand.id}
                className="border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center gap-2 hover:text-primeColor hover:border-gray-400 duration-300"
              >
                <input
                  type="checkbox"
                  id={brand.id}
                  checked={checkedBrands.some((b) => b.id === brand.id)}
                  onChange={() => handleToggleBrand(brand)}
                />
                {brand.title}
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Brand;
