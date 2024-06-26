import React from "react";
import { productList } from "../../../constants";
const RelatedProducts = ({ item }) => {
  function handleOnlick (item) {
    console.log(item)
  }

 /* Example function to get related products (this should be customized to your logic) */
 const getRelatedProducts = (currentProduct) => {
  // Example logic to find related products (could be based on category, tags, etc.)
  const relatedItems = productList.filter(
    product => product.category === currentProduct.category && product._id !== currentProduct._id
  );
  return relatedItems.slice(0, 3); // Limit to 3 products
};

const relatedItems = getRelatedProducts(item);

  return (
    <div>
      <h3 className="font-titleFont text-xl font-semibold mb-6 underline underline-offset-4 decoration-[1px]">
        Related products
      </h3>
      <div className="flex flex-col gap-2" >
        {relatedItems.map((item) => (
          <div onClick={()=> handleOnlick(item)}
            key={item._id}
            className="flex items-center gap-4 border-b-[1px] border-b-gray-300 py-2"
          >
            <div>
              <img className="w-24" src={item.img} alt={item.img} />
            </div>
            <div className="flex flex-col gap-2 font-titleFont">
              <p className="text-base font-medium">{item.productName}</p>
              <p className="text-sm font-semibold">{item.price} vnd</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
