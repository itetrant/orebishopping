import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaSearch, FaUser, FaCaretDown, FaShoppingCart } from "react-icons/fa";
import Flex from "../../designLayouts/Flex";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { productList } from "../../../constants";
import { BsSuitHeartFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { toggleCategory, resetCategory } from "../../../redux/FoxSlice";
import slug from "../../../utils/slug";
import { categoryList } from "../../../constants";
const HeaderBottom = () => {
  const products = useSelector((state) => state.FoxReducer.products);
  const En = useSelector((state) => state.FoxReducer.En);
  const [show, setShow] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const navigate = useNavigate();
  const ref = useRef(); //shop by cat
  const ref2 = useRef(); //account
  let dispatch = useDispatch();
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (ref?.current?.contains(e.target)) {
        setShow(prev => !prev);
      } else {
        setShow(false);
      }
      if (ref2?.current?.contains(e.target)) {
        setShowUser(prev => !prev)
      } else {
        setShowUser(false)
      }
    });
  }, []);

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  //const [showSearchBar, setShowSearchBar] = useState(false);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    //TODO API call
    const filtered = productList.filter((item) =>
      item.productName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchQuery]);

  // Handle Category toggle
  const handleToggleCategory = (category) => {
    dispatch(resetCategory());
    dispatch(toggleCategory(category));
  };

  return (
    <div className="w-full bg-[#F5F5F3] relative">
      <div className="max-w-container mx-auto">
        <Flex className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full px-4 pb-4 lg:pb-0 h-full lg:h-24">
          <div
            //onClick={() => setShow(!show)}
            ref={ref}
            className="flex h-14 cursor-pointer items-center gap-2 text-primeColor"
          >
            <HiOutlineMenuAlt4 className="w-5 h-5" />
            <p className="text-[16px] font-normal"> {En? "Shop by Category" : "Mua sắm theo danh mục"}</p>

            {show && (
              <motion.ul
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                 className="absolute top-16 z-50 bg-menuBG w-64 text-menuText h-auto p-4 pb-6"
              >
                {
                categoryList.map((cat)=> (

                  <Link to={"category/do-uong-cac-loai"} >
                   <li onClick={()=>handleToggleCategory(cat)}             
                      className="flex font-normal hover:font-bold items-center text-lg text-gray-200 hover:underline underline-offset-[4px] decoration-[1px] hover:text-white md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0">
                      {En? cat.title_en: cat.title}
                    </li>
                  </Link>

                ))}

              </motion.ul>
            )}
          </div>
          <div className="relative w-full lg:w-[600px] h-[50px] text-base text-primeColor bg-white flex items-center gap-2 justify-between px-6 rounded-xl">
            <input
              className="flex-1 h-full outline-none placeholder:text-[#C4C4C4] placeholder:text-[14px]"
              type="text"
              onChange={handleSearch}
              value={searchQuery}
              placeholder="Search your products here"
            />
            <FaSearch className="w-5 h-5" />
            {searchQuery && (
              <div
                className={`w-full mx-auto h-96 bg-white top-16 absolute left-0 z-50 overflow-y-scroll shadow-2xl scrollbar-hide cursor-pointer`}
              >
                {searchQuery &&
                  filteredProducts.map((item) => (
                    <div
                      onClick={() =>
                        navigate(
                          `/product/${slug(item.productName)}`,  //NTT
                          {
                            state: {
                              item: item,
                            },
                          }
                        ) &
                       // setShowSearchBar(true) &
                        setSearchQuery("")
                      }
                      key={item.product_code}
                      className="max-w-[600px] h-28 bg-gray-100 mb-3 flex items-center gap-3"
                    >
                      <img className="w-24" src={item.img} alt="productImg" />
                      <div className="flex flex-col gap-1">
                        <p className="font-semibold text-lg">
                          {item.productName}
                        </p>
                        <p className="text-xs">
                          {item.des.length > 100
                            ? `${item.des.slice(0, 100)}...`
                            : item.des}
                        </p>
                        <p className="text-sm">
                          Price:{" "}
                          <span className="text-primeColor font-semibold">
                            ${item.price}
                          </span>
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
          <div className="flex gap-4 mt-2 lg:mt-0 items-center pr-6 cursor-pointer relative">
            <div  ref={ref2} 
           // onClick={() => setShowUser(!showUser)} 
            className="flex">
              <FaUser />
              <FaCaretDown />
            </div>
            {showUser && (
              <motion.ul
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute top-6 -left-6 z-50 bg-menuBG w-44 text-menuText h-auto p-4 pb-6"
              >
                <Link to="/signin">
                  <li className="flex font-normal hover:font-bold items-center text-lg text-gray-200 hover:underline underline-offset-[4px] decoration-[1px] hover:text-white md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0">
                    Login
                  </li>
                </Link>
                <Link onClick={() => setShowUser(false)} to="/signup">
                <li className="flex font-normal hover:font-bold items-center text-lg text-gray-200 hover:underline underline-offset-[4px] decoration-[1px] hover:text-white md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0">
                    Sign Up
                  </li>
                </Link>
                <li className="flex font-normal hover:font-bold items-center text-lg text-gray-200 hover:underline underline-offset-[4px] decoration-[1px] hover:text-white md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0">
                  Profile
                </li>
              </motion.ul>
            )}
            <Link to="/cart">
              <div className="relative">
                <FaShoppingCart />
                <span className="absolute font-titleFont -top-3 -right-2 text-xs w-4 h-4 flex items-center justify-center rounded-full bg-primeColor text-white">
                  {products.length > 0 ? products.length : 0}
                </span>
              </div>
            </Link>
            <BsSuitHeartFill />
          </div>
        </Flex>
      </div>
    </div>
  );
};

export default HeaderBottom;
