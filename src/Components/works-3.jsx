import Header from "./Header";
import { Link } from "react-router-dom";
import "./works.css";
export default function Works3() {
  return (
    <div className="Worksdiv">
      <Header />
      <div className="slider">
        <div className="next">
          {" "}
          <Link to="/works"> &#60;</Link>
        </div>
        <div className="Works" id="s3">
          <div className="Worksimagediv">
            <span></span>
          </div>
          <div className="Worksdesc">
            <h2>Work 3</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              dicta labore quas a magnam facilis minima deserunt, ex maxime
              animi? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Nihil dicta labore quas a magnam facilis minima deserunt, ex
              maxime animi?
            </p>
            <a>VISIT SITE &rarr;</a>
          </div>
        </div>
      </div>
    </div>
  );
}
