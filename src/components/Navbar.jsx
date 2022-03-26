import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div className="container">
      <div className="item">
        <div className="callButton">
          <img src="https://png.pngtree.com/png-clipart/20191027/ourmid/pngtree-telephone-glyph-icon-vector-png-image_5199512.png" alt="" width="32" height="32" />
        </div>
        <div className="texts">
          <div className="text">ORDER NOW!</div>
          <div className="text">012 345 678</div>
        </div>
      </div>
      <div className="item">
        <ul className="list">
          <li className="listItem">Homepage</li>
          <li className="listItem">Products</li>
          <li className="listItem">Menu</li>
          <li className="listItem">Events</li>
          <li className="listItem">Blog</li>
          <li className="listItem">Contact</li>
        </ul>
      </div>
      <div className="item">
        <div className="cart">
          <img src="https://png.pngtree.com/element_our/20190531/ourmid/pngtree-shopping-cart-convenient-icon-image_1287807.jpg" alt="" width="30px" height="30px" />
          <div className="counter">2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;