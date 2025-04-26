import React from "react";
import "../styles/ShopNow.css";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Fresh Cow Milk",
    price: "₹50/L",
    image: "/products/cow-milk.png",
  },
  {
    id: 2,
    name: "Buffalo Milk",
    price: "₹60/L",
    image: "/products/buffalo-milk.png",
  },
  {
    id: 3,
    name: "Paneer",
    price: "₹300/kg",
    image: "/products/paneer.png",
  },
  {
    id: 4,
    name: "Ghee",
    price: "₹600/kg",
    image: "/products/ghee.png",
  },
  // Add more products here
];

const ShopNow = () => {
  const navigate = useNavigate();

  const handleBuyNow = (product) => {
    // You can also pass product ID or object to checkout page here
    navigate("/checkout", { state: { product } });
  };

  return (
    <div className="products-container">
      <h2 className="section-title">Our Products</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <div className="product-buttons">
              <button className="add-btn">Add to Cart</button>
              <button className="buy-btn" onClick={() => handleBuyNow(product)}>Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopNow;
