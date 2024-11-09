import Header from "./Header";
import "./contact.css";
export default function Contact() {
  return (
    <div className="Contactdiv">
      <style>
        {`.header {
                background: #f7f7f7;
               
            }`}
      </style>
      <Header />
      <div className="ContactContent">
        <div className="Contact">
          <div className="ContactInputs">
            <h2>CONACT ME!</h2>
            <div className="social">
              <div className="item">
                <div className="logo">
                  <img
                    width="40"
                    height="40"
                    src="https://img.icons8.com/ios-filled/50/linkedin.png"
                    alt="linkedin"
                  />
                </div>
                <div className="socialname">
                  <a href="">MedBACHIR BAJJA</a>
                </div>
              </div>
              <div className="item">
                <div className="logo">
                  <img
                    width="40"
                    height="40"
                    src="https://img.icons8.com/ios-filled/50/facebook-new.png"
                    alt="facebook-new"
                  />
                </div>
                <div className="socialname">
                  <a
                    href="https://web.facebook.com/mohamed.e.bachir.3/"
                    target="_blank"
                  >
                    M-BACHIR BAJJA
                  </a>
                </div>
              </div>
              <div className="item">
                <div className="logo">
                  <img
                    width="40"
                    height="40"
                    src="https://img.icons8.com/ios-filled/50/instagram-new--v1.png"
                    alt="instagram-new--v1"
                  />
                </div>
                <div className="socialname">
                  <a href="https://www.instagram.com/baxir_bj/" target="_blank">
                    Baxir_bajja
                  </a>
                </div>
              </div>
              <div className="item">
                <div className="logo">
                  <img
                    width="40"
                    height="40"
                    src="https://img.icons8.com/ios-filled/50/new-post.png"
                    alt="new-post"
                  />
                </div>
                <div className="socialname">
                  <a href="mailto:medbachirbajja@gmail.com" target="_blank">
                    medbachirbajja@gmail.com
                  </a>
                </div>
              </div>
              <div id="phone" className="item">
                <div className="logo">
                  <img
                    width="64"
                    height="64"
                    src="https://img.icons8.com/glyph-neue/64/phone.png"
                    alt="phone"
                  />
                </div>
                <div className="socialname">
                  <a href="tel:0637492006">+212 637492006</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
