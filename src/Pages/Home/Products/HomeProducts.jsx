import React, { useContext, useEffect, useState } from "react";
import { CartContextApi } from "../../Context/CartContext";

const HomeProducts = () => {
  const { handleAddToCart } = useContext(CartContextApi);
  const [homeProducts, setHomeProducts] = useState([]);
  useEffect(() => {
    fetch("https://clothyfly-shop.vercel.app/home-products")
      .then((res) => res.json())
      .then((data) => setHomeProducts(data));
  }, []);

  return (
    <div className="my-5 flex justify-center">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  md:gap-3 ">
        {homeProducts.map((homeProduct) => (
          <div
            key={homeProduct.id}
            className="rounded-md mx-0 bg-base-100 hover:shadow-2xl group relative md:w-[200px] xl:h-[450px] xl:w-[300px]"
          >
            {/* Product Image */}
            <figure>
              <div className="w-full relative mx-auto h-auto overflow-hidden rounded-lg">
                <img
                  className="h-[130px] md:h-[260px] cursor-pointer w-full object-contain relative z-0 rounded-lg transition-all duration-300 hover:scale-110"
                  src={homeProduct.img || notFoundImg}
                  onError={(e) => {
                    e.target.onError = null;
                    e.target.src = notFoundImg;
                  }}
                  alt={homeProduct.img ? name : ""}
                />
              </div>
            </figure>

            {/* Product Info */}
            <div className="flex justify-center text-center my-3">
              <div className=" max-w-xs overflow-hidden text-ellipsis px-2">
                <p>{homeProduct.category}</p>
                <p className="py-2 truncate ">{homeProduct.name}</p>
                <div className="md:flex justify-center items-center  xl:gap-3">
                  <p className="font-semibold text-xl line-through text-[#969696]">
                    Tk {homeProduct.oldPrice}.00
                  </p>
                  <p className="font-semibold text-xl text-red-500">
                    Tk {homeProduct.price}.00
                  </p>
                </div>

                {/* Button (Hidden by default, shown on hover) */}
                <div className="card-actions justify-center ">
                  <button
                    onClick={() => handleAddToCart(homeProduct)}
                    className="btn rounded-sm sm:w-[150px] md:w-[220px]  lg:w-[450px] xl:w-[450px]  2xl:w-[450px] mt-3 text-[19px] xl:text-xl hover:bg-[red] bg-[black] text-white xl:opacity-0 xl:group-hover:opacity-100 xl:transition-opacity  bottom-4 left-1/2 "
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeProducts;
