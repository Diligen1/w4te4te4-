import style from "../../../Styles/Category/Category.module.css";
import mobile from "../../../Assets/images/mobile_bank.png";
import sound from "../../../Assets/images/online_business.png";
import key from "../../../Assets/images/home_leon.png";
import ps from "../../../Assets/images/Master_Card.png";
import okulus from "../../../Assets/images/Money_exchange.png";
import head from "../../../Assets/images/Other_Leon.png";
export function Category() {
  return (
    <main className={style.main}>
      <div className={style.contain}>
        <div className={style.product_contain}>
          <div className={style.laptop_contain}>
            <div className={style.title_contain}>
              <h4 className={style.text_1}>Mobile Banking</h4>
              <h3 className={style.text_2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </h3>
              <button className={style.btn}>Browse</button>
            </div>
            <img className={style.laptop_image} src={mobile} alt="#" />
          </div>
          <div className={style.sount_contain}>
            <div className={style.title_contain}>
              <h4 className={style.text_1}>Online Business</h4>
              <h3 className={style.text_2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </h3>
              <button className={style.btn_sound}>Browse</button>
            </div>
            <img className={style.sound_image} src={sound} alt="#" />
          </div>
          <div className={style.keyboard_contain}>
            <div className={style.title_contain}>
              <h4 className={style.text_1}>Home Leon</h4>
              <h3 className={style.text_2_2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </h3>
              <button className={style.btn_key}>Browse</button>
            </div>
            <img className={style.keyboard_image} src={key} alt="#" />
          </div>
          <div className={style.ps_contain}>
            <div className={style.title_contain}>
              <h4 className={style.text_1}>Your Master Card</h4>
              <h3 className={style.text_2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </h3>
              <button className={style.btn_ps}>Browse</button>
            </div>
            <img className={style.ps_image} src={ps} alt="#" />
          </div>
          <div className={style.oculus_contain}>
            <div className={style.title_contain}>
              <h4 className={style.text_1}>Money Exchange</h4>
              <h3 className={style.text_2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </h3>
              <button className={style.btn_sound}>Browse</button>
            </div>
            <img className={style.oculus_image} src={okulus} alt="#" />
          </div>
          <div className={style.head_contain}>
            <div className={style.title_contain}>
              <h4 className={style.text_1}>Other Leon</h4>
              <h3 className={style.text_2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </h3>
              <button className={style.btn_head}>Browse</button>
            </div>
            <img className={style.head_image} src={head} alt="#" />
          </div>
        </div>
      </div>
    </main>
  );
}
