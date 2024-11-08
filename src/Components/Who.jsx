import Header from "./Header";
import { Link } from "react-router-dom";
import "./Who.css";
export default function Who() {
  return (
    <div className="whodiv">
      <Header />
      <div className="whoContent">
        <div className="who">
          <div className="imagediv">
            <span></span>
          </div>
          <div className="bio">
            <h2>MOHAMED EL BACHIR BAJJA</h2>
            <p>
              <img
                width="40"
                height="40"
                src="https://img.icons8.com/glyph-neue/64/FFFFFF/quote-left.png"
                alt="quote-left"
              />
              I am a creative designer and developer, who aims to work with
              small businesses and marginalized communities to bring their
              passions to life. I offer both design and development services of
              web applications or websites!
              <img
                width="40"
                height="40"
                src="https://img.icons8.com/glyph-neue/64/FFFFFF/quote-right.png"
                alt="quote-left"
              />
            </p>
            <Link to="/Contact">CONTACT ME &rarr;</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
