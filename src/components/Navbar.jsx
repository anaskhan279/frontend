import "../styles/navbar.css";
import call from "../img/telephone.png";
import cart from "../img/cart.png";

const Navbar = () => {
  return (
    <div className="container">
      <div className="item">
        <div className="callButton">
          <img src={call} alt="" width="32" height="32" />
        </div>
        <div className="texts">
          <div className="text">ORDER NOW!</div>
          <div className="text">012 345 678</div>
        </div>
      </div>
      <div className="item">
        <ul className="list">
          <li className="listItem">Login</li>
          <li className="listItem">Signup</li>
        </ul>
      </div>
      <div className="item">
        <div className="cart">
          <img src={cart} alt="" width="30px" height="30px" />
          <div className="counter">2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;