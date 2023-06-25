import React from "react";
import "../styles/Footer.css";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import insta from "../assets/insta.png";

const Footer = () => {
  return (
    <div className="footer">
      <footer>
        <div className="footer1">
          <div className="about">
            <h3>About Adventor</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
              Tincidunt id sem vel quis in turpis sit eget pellentesque. <br />{" "}
              Nunc etiicies in rhoncus, rhoncus in arcu. Tincidunt <br /> neque
              fusce vitaenisi aliquet. que maeae tortoere <br /> necsem commodo
              ac.
            </p>
          </div>
          <div className="quick">
            <h3>Quick Menu</h3>
            <div className="twosides">
              <div>
                <a href="">
                  <p>Home</p>
                </a>
                <a href="">
                  <p>Stories</p>
                </a>
                <a href="">
                  <p>Trending Stories</p>
                </a>
                <a href="">
                  <p>Popular Stories</p>
                </a>
              </div>
              <div>
                <a href="">
                  <p>Sign Up</p>
                </a>
                <a href="">
                  <p>Log In</p>
                </a>
                <a href="">
                  <p>Contact Us</p>
                </a>
              </div>
            </div>
          </div>
          <div className="subscribe">
            <h3>Subscribe to our news letter</h3>
            <div className="sub">
              <input type="text" placeholder="Email Address" />{" "}
              <button>Subscribe</button>{" "}
            </div>
          </div>
        </div>
        <div className="footer2">
          <div>
            <hr />
            <div className="socials">
              <div>
                <h5>Terms and Policy</h5>
              </div>
              <div className="handles">
                <div>
                  {" "}
                  <a href="">
                    <img src={twitter} alt="twitter" />
                  </a>
                </div>

                <div>
                  {" "}
                  <a href="">
                    <img src={facebook} alt="facebok" />
                  </a>
                </div>

                <div>
                  {" "}
                  <a href="">
                    <img src={insta} alt="insta" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
