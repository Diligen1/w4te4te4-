import style from "../../../Styles/Methods/Methods.module.css";
export function Method({ darkMode }) {
  return (
    <main className={`${style.main} ${darkMode ? style.darkMode : ""}`}>
      <div className={style.contain}>
        <div className={style.method_contain}>
          <div className={style.block_contain}>
            <div className={style.icon}>
              <i class="fi fi-rs-truck-side"></i>
            </div>
            <div className={style.title_contain}>
              <h3 className={style.title}>Money Transfer</h3>
              <h4 className={style.text}>Free Transfer On All Places</h4>
            </div>
          </div>
          <div className={style.block_contain}>
            <div className={style.icon}>
              <i class="fi fi-rs-life-ring"></i>
            </div>
            <div className={style.title_contain}>
              <h3 className={style.title}>Withdraw</h3>
              <h4 className={style.text}>30 Day Money Back</h4>
            </div>
          </div>
          <div className={style.block_contain}>
            <div className={style.icon}>
              <i class="fi fi-rs-headphones"></i>
            </div>
            <div className={style.title_contain}>
              <h3 className={style.title}>Bank Deposit</h3>
              <h4 className={style.text}>In touch 24/7</h4>
            </div>
          </div>
          <div className={style.block_contain}>
            <div className={style.icon}>
              <i class="fi fi-rs-badge-dollar"></i>
            </div>
            <div className={style.title_contain}>
              <h3 className={style.title}>Online Paynment</h3>
              <h4 className={style.text}>All Cards Accepted</h4>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
