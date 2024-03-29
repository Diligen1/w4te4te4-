import style from "../../../Styles/Footer/Footer.module.css";
import { Link } from "react-router-dom";
export function Footer({ darkMode }) {
  return (
    <main className={`${style.main} ${darkMode ? style.darkMode : ""}`}>
      <div className={style.contain}>
        <div className={style.logo_contain}>
          <h2 className={style.logo_text}>Realm</h2>
          <h4 className={style.text}>
            A little Easter egg from me for interviewing
          </h4>
          <div className={style.icon_contain}>
            <a href="https://www.instagram.com/ku._.ch/" className={style.icon}>
              <i class="fi fi-brands-instagram"></i>
            </a>
            <a href="https://wa.me/996500254220" className={style.icon}>
              <i class="fi fi-brands-whatsapp"></i>
            </a>
          </div>
        </div>
        <div className={style.nav_contain}>
          <h3 className={style.nav_text}>Links</h3>
          <div className={style.navBar}>
            <Link to="/" className={style.nav_bar}>
              Home
            </Link>
            <Link to="/" className={style.nav_bar}>
              Shop
            </Link>
            <Link to="/" className={style.nav_bar}>
              About
            </Link>
            <Link to="/" className={style.nav_bar}>
              Contact
            </Link>
          </div>
        </div>
        <div className={style.contact_contain}>
          <h3 className={style.contact}>Contact</h3>
          <div className={style.info_contain}>
            <p className={style.texter}>number: +996500......</p>
            <p className={style.texter}>email: ...</p>{" "}
            <p className={style.texter}>adress: ...</p>
          </div>
        </div>
        <div></div>
      </div>
    </main>
  );
}
