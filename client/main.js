import React from "react";
import { connect } from "react-redux";
import { addProduct } from "./actions";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: ""
    };
    this.addProduct = this.addProduct.bind(this);
    this.updateName = this.updateName.bind(this);
  }

  addProduct() {
    this.props.dispatch(addProduct(this.state.productName));
  }

  updateName(e) {
    this.setState({
      productName: e.target.value
    });
  }

  render() {
    const { products } = this.props;

    return (
      <div>
        <label>Product name:</label>
        <input value={this.state.productName} onChange={this.updateName} />
        <button onClick={this.addProduct}>Add product</button>
        <ul>{products.map(p => <li>{p}</li>)}</ul>
      </div>
    );
  }
}

export default connect(state => ({ products: state.products }))(Main);
