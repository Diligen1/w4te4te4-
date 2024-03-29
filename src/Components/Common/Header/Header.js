import style from "../../../Styles/Header/Header.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
export function Header({ darkMode, toggleDarkMode }) {
  const [burger, setBurger] = useState(false);
  function handleopenburger() {
    setBurger(!burger);
  }
  return (
    <main className={`${style.main} ${darkMode ? style.darkMode : ""}`}>
      <div className={style.contain}>
        <div className={style.logo_contain}>
          <h2 className={style.logo_text}>Realm</h2>
        </div>
        <div className={style.navBlock}>
          <Link to="/" className={style.navText}>
            Home
          </Link>
          <Link to="/shop" className={style.navText}>
            Shop
          </Link>
          <Link to="/about" className={style.navText}>
            About
          </Link>
          <Link to="/blog" className={style.navText}>
            Blog
          </Link>
          <Link to="/contact" className={style.navText}>
            Contact us
          </Link>
        </div>
        <div className={style.akk_contain}>
          <button className={style.btn_notif}>
            <i class="fi fi-rs-bell"></i>
          </button>
          <button className={style.btn_notif} onClick={toggleDarkMode}>
            <i class="fi fi-rs-moon"></i>
          </button>

          <div className={style.login_contain} onClick={handleopenburger}>
            <div className={style.login_img}>И</div>
            <div>
              <p className={style.login_name}>Иванов Иван Иванович</p>
            </div>
          </div>
        </div>
        {burger && (
          <div className={style.block}>
            <div className={style.text_1}>
              <h3 className={style.text}>История Посещений</h3>
            </div>
            <div className={style.text_1}>
              <h3 className={style.text}>Безопастный вход</h3>
            </div>
            <div className={style.text_1}>
              <h3 className={style.text}>Выйти</h3>
            </div>
            <div className={style.block_2}>
              <h3 className={style.text}>Ваш последний визит был 29.03.24 </h3>
            </div>
            <div className={style.block_2}>
              <h3 className={style.text}>Петрова Наталья Владимировна</h3>
            </div>
            <div className={style.block_2}>
              <h3 className={style.text}>
                Под вашим аккаунтом вы можете
                <span className={style.texter}>
                  создавать, изменять, подписывать и отправлять транзакции
                </span>
              </h3>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
