import React, { useState } from "react";
// import { ImPlus } from "react-icons/im";
import NavTitle from "./NavTitle";
import { useDispatch, useSelector } from "react-redux";
import { toggleCategory } from "../../../../redux/FoxSlice";
import { categoryList } from "../../../../constants"; //TODO call API
import { motion } from "framer-motion";

const Category = () => {
  const [showSubCatOne, setShowSubCatOne] = useState(true);
  const checkedCategorys = useSelector((state) => state.FoxReducer.checkedCategorys);
  const En = useSelector((state) => state.FoxReducer.En);
  const dispatch = useDispatch();

  const handleToggleCategory = (category) => {
    dispatch(toggleCategory(category));
  };

  return (
    <div className="w-full">
      <div
        onClick={() => setShowSubCatOne(!showSubCatOne)}
        className="cursor-pointer"
      >
      <NavTitle title={En ? "Shop by Category" : "Mua sắm theo danh mục"} icons={true} />
      </div>
      {showSubCatOne && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
        <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
          {categoryList.map((cat) => (
            <li
              key={cat.category_code}
              className="border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center gap-2 hover:text-primeColor hover:border-gray-400 duration-300"
            >
              <input
                type="checkbox"
                id={cat.category_code}
                checked={checkedCategorys.some((b) => b.category_code === cat.category_code)}
                onChange={() => handleToggleCategory(cat)}
              />
              {En?cat.title_en:cat.title}
              {/* {item.icons && (
                <span onClick={()=>null}
                  className="text-[10px] lg:text-xs cursor-pointer text-gray-400 hover:text-primeColor duration-300"
                >
                  <ImPlus />
                </span>
              )} */}
            </li>
          ))}
        </ul>
      </motion.div>
    )}
    </div>
  );
};

export default Category;
