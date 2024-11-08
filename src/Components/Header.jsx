import "./header.css";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="header">
      <div>
        <Link to="/home">HOME</Link>
      </div>

      <div>
        <Link to="/works">WORKS</Link>
      </div>
      <div>
        <Link to="/Who">WHO AM I ?</Link>
      </div>
      <div>
        <Link to="/contact" className="contact">
          CONTACT
        </Link>
      </div>
    </div>
  );
}
