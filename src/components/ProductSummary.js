import React from "react";
import { withRouter } from "react-router-dom";

function ProductSummary(props) {
  return (
    <div
      className="productSummary"
      onClick={() => props.history.push("/products/" + props.product.id)}
    >
      {props.product.name} - {props.product.price}{" "}
      <span className="productArrow">></span>
    </div>
  );
}

export default withRouter(ProductSummary);
