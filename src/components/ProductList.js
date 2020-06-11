import React from "react";
import ProductSummary from "./ProductSummary";
import { Switch, Route } from "react-router-dom";
import ProductDetail from "./ProductDetail";

function ProductList(props) {
  return (
    <Switch>
      <Route path="/products/:productId">
        <ProductDetail productList={props.productList} />
      </Route>
      <Route path="/products">
        <div className="productList">
          <h2>Our Products</h2>
          <ul>
            {props.productList.map((product) => (
              <ProductSummary key={product.id} product={product} />
            ))}
          </ul>
        </div>
      </Route>
    </Switch>
  );
}

export default ProductList;
