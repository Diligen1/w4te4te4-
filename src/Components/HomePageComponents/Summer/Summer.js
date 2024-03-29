import style from "../../../Styles/Summer/Summer.module.css";
import image from "../../../Assets/images/pngwing.com (1).png";
export function Summer() {
  return (
    <main className={style.main}>
      <div className={style.contain}>
        <div className={style.summer_contain}>
          <div className={style.title_contain}>
            <h4 className={style.text_1}> 20 % OFF</h4>
            <h2 className={style.text_2}>
              MEGA <br /> DEPOSIT
            </h2>
            <h4 className={style.text_3}>29 Dec To 12 Apr</h4>
          </div>

          <div className={style.title_2_contain}>
            <h4 className={style.text_4}>8.50 $</h4>
            <h2 className={style.text_5}>Premium</h2>
            <h4 className={style.text_6}>
              Company that's grown from 270 to 400 employees
            </h4>
            <button className={style.btn}>Buy</button>
          </div>
          <div className={style.image_contain}>
            <img src={image} alt="#" className={style.image} />
          </div>
        </div>
      </div>
    </main>
  );
}
