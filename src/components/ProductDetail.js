import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class ProductDetail extends Component {
  state = {
    product: this.getProductFromList(),
  };
  getProductFromList() {
    const productId = parseInt(this.props.match.params.productId);
    return this.props.productList.find((item) => item.id === productId) || {};
  }
  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.setState({ product: this.getProductFromList() });
    }
  }
  render() {
    return (
      <div>
        <h3>{this.state.product.name}</h3>
        <div>Price: ${this.state.product.price}</div>
        <p>{this.state.product.description}</p>
        <Link className="productGoBackLink" to="/products">
          Go Back
        </Link>
      </div>
    );
  }
}

export default withRouter(ProductDetail);
