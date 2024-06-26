import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { HiMenuAlt2 } from "react-icons/hi";  //hamburger menu icon
import { motion } from "framer-motion";
import { logo, logoLight, vi, uk } from "../../../assets/images";
import Image from "../../designLayouts/Image";
import { navBarList, categoryList , brandList} from "../../../constants"; //header not included category/brand
import Flex from "../../designLayouts/Flex";
import { useDispatch } from "react-redux";
import { toggleLanguage } from "../../../redux/FoxSlice";

const Header = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [sidenav, setSidenav] = useState(false);
  const [category, setCategory] = useState(false);
  const [brand, setBrand] = useState(false);
  const [En, setEn] = useState(false);
  const dispatch = useDispatch();

  const location = useLocation();
  useEffect(() => {

    let ResponsiveMenu = () => {
      if (window.innerWidth < 667) {
        setShowMenu(false);
      } else {
        setShowMenu(true);
      }
    };

    ResponsiveMenu(); //show|hide hamburger menu
    window.addEventListener("resize", ResponsiveMenu);
    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", ResponsiveMenu);
    };
  }, []);

  // Handle language toggle
  const handleLanguageToggle = () => {
    const newLanguage = En ? 'vi' : 'en';
    setEn(!En);
    dispatch(toggleLanguage(newLanguage));
  };
     
  return (
    <div className="w-full h-20 bg-white sticky top-0 z-50 border-b-[1px] border-b-gray-200">
      <nav className="h-full px-4 max-w-container mx-auto relative">
        <Flex className="flex items-center justify-between h-full">
          <Link to="/">
            <div>
              <Image className="w-14 h-14 object-cover" imgSrc={logo} /> 
            </div>
          </Link>

          <div>
            {/* Shop by hamburger menu including navBarList, CategoryList and Brands*/}
            {showMenu && (
              <motion.ul
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex items-center w-auto z-50 p-0 gap-2"
              >
                <>
                  {navBarList.map(({ _id, title, title_en, link }) => (
                    <NavLink
                      key={_id}
                      className="flex font-normal hover:font-bold w-auto h-6 justify-center items-center px-5 text-base text-[#767676] hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#262626] md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
                      to={link}
                      state={{ data: location.pathname.split("/")[1] }}
                    >
                      <li>{En? title_en: title}</li>
                    </NavLink>
                  ))}

                </>

                <div className="pl-5" onClick={() => handleLanguageToggle()}>
                    <Image className="w-6 h-6 object-cover cursor-pointer" imgSrc={ En? uk: vi } />
                </div>

              </motion.ul>
            )}
            <HiMenuAlt2
              onClick={() => setSidenav(!sidenav)}
              className="inline-block md:hidden cursor-pointer w-8 h-6 absolute top-6 right-4"
            />
            {sidenav && (
              <div className="fixed top-0 left-0 w-full h-screen bg-black text-gray-200 bg-opacity-80 z-50">
                <motion.div
                  initial={{ x: -300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-[80%] h-full relative"
                >
                  <div className="w-full h-full bg-primeColor p-6">
                    <img
                      className="w-28 mb-6"
                      src={logoLight}
                      alt="logoLight"
                    />

                    <ul className="text-gray-200 flex flex-col gap-2">
                      {navBarList.map((nav) => (
                        <li
                          className="font-normal hover:font-bold items-center text-lg text-gray-200 hover:underline underline-offset-[4px] decoration-[1px] hover:text-white md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
                          key={nav._id}
                        >
                          <NavLink
                            to={nav.link}
                            state={{ data: location.pathname.split("/")[1] }}
                            onClick={() => setSidenav(false)}
                          >
                           {En? nav.title_en: nav.title}
                          </NavLink>
                        </li>
                      ))}


                      <li className="flex font-normal hover:font-bold items-center text-lg text-gray-200 hover:underline underline-offset-[4px] decoration-[1px] hover:text-white md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
                        key="-1" onClick={() => handleLanguageToggle()}>
                          { En ? <> Language: <Image className="pl-2 w-6 h-4 object-cover cursor-pointer" imgSrc={ uk } /> </>
                            : <> Ngôn ngữ: <Image className="pl-2 w-6 h-4 object-cover cursor-pointer" imgSrc={ vi } /> </>
                          }
                      </li>

                    </ul>

                    {/* CATE session*/}
                    <div className="mt-4">
                      <h1
                        onClick={() => setCategory(!category)}
                        className="flex justify-between text-base cursor-pointer items-center font-titleFont mb-2"
                      >
                        {En?"Shop by Category ": "Mua sắm theo danh mục"} 
                        <span className="text-lg">{category ? "-" : "+"}</span>
                      </h1>                 
                      {category && (
                        <motion.ul
                          initial={{ y: 15, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.4 }}
                          className="text-sm flex flex-col gap-1"
                        >
                          {/* TODO dynamic */}

                          {categoryList.map(({ category_code, title_en, title, link }) => (
                             
                             <li key={category_code} className="headerSideNavLi">
                                <Link to={link}
                                 // state={{ data: location.pathname.split("/")[1] }}
                                 onClick={() => setSidenav(false)}
                                >
                               {En?title_en:title}
                                </Link>
                            </li>
                        ))
                        } 
                        </motion.ul>
                      )}
                    </div>

                  {/* BRAND session*/}
                    <div className="mt-4">
                      <h1
                        onClick={() => setBrand(!brand)}
                        className="flex justify-between text-base cursor-pointer items-center font-titleFont mb-2"
                      >
                        {En?"Shop by Brand ": "Mua sắm theo thương hiệu"}  
                        <span className="text-lg">{brand ? "-" : "+"}</span>
                      </h1>

                      {brand && (
                        <motion.ul
                          initial={{ y: 15, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.4 }}
                          className="text-sm flex flex-col gap-1"
                        >
                          {/* TODO dynamic Brands instead of Cate here*/}

                          {brandList.map(({ title, title_en }) => (
                            <li className="headerSideNavLi">
                             {En?title_en:title}
                            </li>
                        ))} 
                        </motion.ul>
                      )}
                    </div>
                  </div>
                  <span
                    onClick={() => setSidenav(false)}
                    className="w-8 h-8 border-[1px] border-gray-300 absolute top-2 -right-10 text-gray-300 text-2xl flex justify-center items-center cursor-pointer hover:border-red-500 hover:text-red-500 duration-300"
                  >
                    <MdClose />
                  </span>
                </motion.div>
              </div>
            )}
          </div>
        </Flex>
      </nav>
    </div>
  );
};

export default Header;
