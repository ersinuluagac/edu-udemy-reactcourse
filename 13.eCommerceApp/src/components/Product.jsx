import React from "react";
import "../css/Product.css";
import { useNavigate } from "react-router-dom";

function Product({ product }) {
  const { id, title, price, description, images } = product;
  const navigate = useNavigate();

  return (
    <div className="card">
      <img className="image" src={images[0]} />
      <div>
        <p style={{ textAlign: "center" }}>{title}</p>
        <h3 style={{ textAlign: "center" }}>{price} ₺</h3>
      </div>
      <div className="flex-row">
        <button
          onClick={() => navigate("/product-details/" + id)}
          className="detail-button"
        >
          Detaya Git
        </button>
      </div>
    </div>
  );
}

export default Product;
