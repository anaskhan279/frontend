import { useState } from "react";
import "../styles/singleproduct.css";
import pizza from "../img/pizza.png";

const SingleProduct = () => {
  const [size, setSize] = useState(0);
  const product = {
    id: 1,
    name: "CAMPAGNOLA",
    price: [19.9, 23.9, 27.9],
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu purus, rhoncus fringilla vestibulum vel, dignissim vel ante. Nulla facilisi. Nullam a urna sit amet tellus pellentesque egestas in in ante.",
  };

  return (
    <div className="productcontainer">
      <div className="left">
        <div className="imgContainer">
          <img src={pizza} alt="" />
        </div>
      </div>
      <div className="right">
        <h1 className="producttitle">{product.name}</h1>
        <span className="productprice">${product.price[size]}</span>
        <p className="productdesc">{product.desc}</p>
        <h3 className="choose">Choose the size</h3>
        <div className="sizes">
          <div className="size" onClick={() => setSize(0)}>
            <span className="number">Small</span>
          </div>
          <div className="size" onClick={() => setSize(1)}>
            <span className="number">Medium</span>
          </div>
          <div className="size" onClick={() => setSize(2)}>
            <span className="number">Large</span>
          </div>
        </div>
        <div className="add">
            <input type="number" defaultValue={1} className="quantity"/>
            <button className="button">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;