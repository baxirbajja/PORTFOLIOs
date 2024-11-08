import { Link } from "react-router-dom";
import Header from "./Header";
import "./home.css";

export default function Home() {
  return (
    <>
      <div className="home">
        <Header />
        <div className="homeContent">
          <div className="title">WEB DÉVELOPPER</div>
          <div className="desc">
            AM I PROFESSIONAL WEB DEVELOPPER IN FULL STACK READY AND EXCITED TO
            START THE WORK
          </div>
          <div className="works">
            <Link to="/works">SEE MY WORKS</Link>
          </div>
          <div className="section">
            <span></span>
          </div>
        </div>
      </div>
    </>
  );
}
