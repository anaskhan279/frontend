import "../styles/footer.css";
import bg from "../img/bg.png";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="side">
        <img src={bg} objectFit="cover" layout="fill" alt="" />
      </div>
      <div className="side">
        <div className="card">
          <h2 className="motto">
            THANKYOU FOR VISITING US PLEASE DO VISIT AGAIN.
          </h2>
        </div>
        <div className="card">
          <h1 className="footer-title">FIND OUR SHOP</h1>
          <p className="footer-text">
            1654 R. Don Road #304.
            <br /> NewYork, 85022
            <br /> (602) 867-1010
          </p>
          
          
        </div>
        <div className="card">
          <h1 className="footer-title">LINKS</h1>
           <p className="footer-text">
            Instagram
             <br/>Facebook
             <br/>Telegram
             <br/>Gmail
           </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;