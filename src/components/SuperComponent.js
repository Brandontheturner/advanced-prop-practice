import React from "react";
import PropTypes from "prop-types";
import State from "../state";

function SuperComponent(props) {
  let content = "";
  if (props.message) {
    content = props.message;
  } else if (props.magicNumber) {
    content = props.magicNumber;
  } else if (props.product) {
    content = props.product.name;
  } else if (props.names) {
    content = props.names.join(", ");
  } else if (props.products) {
    content = props.products[0].name;
  }
  return (
    <div>
      <h3>{content}</h3>
    </div>
  );
}

SuperComponent.propTypes = {
  message: PropTypes.string,
  magicNumber: PropTypes.number,
  product: PropTypes.object,
  products: PropTypes.array,
  names: PropTypes.array
};
export default SuperComponent;
