import style from "../../../Styles/Promo/Promo.module.css";
import image from "../../../Assets/images/banner.png";
export function Promo({ darkMode }) {
  return (
    <main className={`${style.main} ${darkMode ? style.darkMode : ""}`}>
      <div className={style.contain}>
        <div className={style.background_contain}>
          <div className={style.title_contain}>
            <h4 className={style.text_1}>Welcome to Realm Bank </h4>
            <h3 className={style.text_2}>Control Your Finances With Us</h3>
            <h2 className={style.text_3}>REALM BANK</h2>
            <button className={style.btn}>go to "Mega Deposit"</button>
          </div>
          <div className={style.banner_contain}>
            <img src={image} alt="#" className={style.banner} />
          </div>
          <div className={style.description_contain}>
            <h2 className={style.description_title}>Description</h2>
            <p className={style.description_text}>
              A bank card is a plastic card issued by a financial institution,
              typically linked to a customer's bank account, allowing them to
              make electronic transactions.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
