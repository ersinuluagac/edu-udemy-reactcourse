import React from "react";
import { useNavigate } from "react-router-dom";

function Product({ product }) {
  const { id, name, price } = product;

  const navigate = useNavigate();

  return (
    <div>
      <div>Ürün Detayı</div>
      <h3>İsim: {name}</h3>
      <h3>Fiyatı: {price}</h3>
      <button onClick={() => navigate("/product-details/" + id)}>
        Detayına Git
      </button>
    </div>
  );
}

export default Product;
