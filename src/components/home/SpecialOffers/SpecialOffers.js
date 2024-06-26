import React, { useEffect, useState } from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import { productList } from "../../../constants";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const SpecialOffers = () => {
  const { category } = useParams();
  const checkedCategorys = useSelector((state) => state.FoxReducer.checkedCategorys);
  const selectedBrands = useSelector((state) => state.FoxReducer.checkedBrands);

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(productList);
  }, [category, checkedCategorys, selectedBrands]);

  let filteredData = data;

  if (checkedCategorys.length > 0) {
    const checkedCategoryIds = checkedCategorys.map((cat) => cat._id);
    filteredData = filteredData.filter((item) => checkedCategoryIds.includes(item.category_code));
  }

  if (selectedBrands && selectedBrands.length > 0) {
    const checkedBrandIds = selectedBrands.map((brand) => brand.title);
    filteredData = filteredData.filter((item) => checkedBrandIds.includes(item.brand));
  }

  if (!category) {
    filteredData = data.slice(0, 5);
  }

  return (
    <div className="w-full pb-20">
      <Heading heading="Special Offers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-5 gap-10">
        {filteredData.map((data) => (
          <Product
            key={data._id}
            _id={data._id}
            img={data.img}
            productName={data.productName}
            price={data.price}
            color={data.color}
            badge={true}
            des={data.des}
          />
        ))}
      </div>
    </div>
  );
};

export default SpecialOffers;
