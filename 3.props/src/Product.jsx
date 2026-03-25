import React from "react";

function Product({productName, price}) {
  return (
    <div>
      <div>
        <h1>Ürün Bilgileri</h1>
        <div>
          <p>İsim: {productName}</p>
          <p>Fiyat: {price}TL</p>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default Product;
