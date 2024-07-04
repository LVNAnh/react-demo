import React from "react";
import PropTypes from "prop-types";

Product.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

function Product(props) {
  const handleClick = () => {
    const product = {
      image: props.image,
      name: props.name,
      price: props.price,
      quantity: 1,
    };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const index = cart.findIndex((item) => item.name === product.name);
    if (index !== -1) {
      cart[index].quantity += 1;
    } else {
      cart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Thêm vào giỏ hàng thành công!");
  };

  return (
    <div className="col-md-3">
      <div className="thumbnail">
        <img className="img-fluid" src={props.image} alt={props.name} />
        <div className="caption">
          <h3>{props.name}</h3>
          <p>{props.price}</p>
          <p>
            <button className="btn btn-primary" onClick={handleClick}>
              Thêm vào giỏ
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Product;
