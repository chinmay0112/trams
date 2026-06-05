import FooterArrow from "../assets/footer-arrow.png";
import semicircle from "../assets/semicircle.png";
const Footer = () => {
  return (
    <footer className="pt-5 footer position-relative">
      <img
        className="position-absolute footer-arrow-1 footer-arrow"
        src={FooterArrow}
        alt="Footer Arrow 1"
      />
      <img
        className="position-absolute footer-arrow-2 footer-arrow"
        src={FooterArrow}
        alt="Footer Arrow 2"
      />
      <div className="text-center ">
        <h2 className="pt-4">
          Subscribe to <br /> our newsletter
        </h2>
        <p className="my-3">
          To make your stay special and even more memorable
        </p>
        <a
          href="#"
          className="footer-link text-white bg-black text-decoration-none px-4 py-3 rounded-pill"
        >
          Subscribe Now
        </a>
      </div>
      <div className="container pt-5">
        <hr />
        <div className="row m-0">
          <div className="col-md-3">
            <h4>Company</h4>
            <a href="#">Home</a>
            <a href="#">Studio</a>
            <a href="#">Service</a>
            <a href="#">Blog</a>
          </div>
          <div className="col-md-3">
            <h4>Terms & Policies</h4>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Explore</a>
            <a href="#">Accesibility</a>
          </div>
          <div className="col-md-3">
            <h4>Follow Us</h4> <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
            <a href="#">Youtube</a>
            <a href="#">Twitter</a>
          </div>
          <div className="col-md-3">
            <h4>Terms & Policies</h4>
            <a href="#">1498w Fluton ste, STE 2D Chicgo, IL 63867.</a>
            <a href="#">(123) 456789000</a>
            <a href="mailto:info@elementum.com">info@elementum.com </a>
          </div>
        </div>
        <p className="text-center py-3">©2023 Elementum. All rights reserved</p>
      </div>
      <img
        className="footer-semi position-absolute"
        src={semicircle}
        alt="Semicircle image"
      />
    </footer>
  );
};

export default Footer;
