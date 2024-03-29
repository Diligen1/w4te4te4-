import style from "../../../Styles/News/News.module.css";
import image from "../../../Assets/images/MAJOR-IV_19.jpeg";
import image_2 from "../../../Assets/images/Nuphy Air60 Twilight_info_3.jpg";
import image_3 from "../../../Assets/images/8.jpeg";
export function News({ darkMode }) {
  return (
    <main className={`${style.main} ${darkMode ? style.darkMode : ""}`}>
      <div className={style.contain}>
        <div className={style.news_contain}>
          <div className={style.title_contain}>
            <h3 className={style.title}>Grab Our Mega Deposit Package</h3>
          </div>
          <div className={style.news_blog}>
            <div className={style.blog_1}>
              <div className={style.image_contain}>
                <img src={image} alt="#" className={style.image} />
              </div>
              <h4 className={style.date}>December 29, 2024</h4>
              <h3 className={style.title_news}>
                How to choose perfect gadgets
              </h3>
              <h5 className={style.news}>
                When, while the lovely valley teems with veoper around me ...
              </h5>
            </div>
            <div className={style.blog_1}>
              <div className={style.image_contain}>
                <img src={image_2} alt="#" className={style.image} />
              </div>
              <h4 className={style.date}>December 29, 2024</h4>
              <h3 className={style.title_news}>
                How to choose perfect gadgets
              </h3>
              <h5 className={style.news}>
                When, while the lovely valley teems with veoper around me ...
              </h5>
            </div>
            <div className={style.blog_1}>
              <div className={style.image_contain}>
                <img src={image_3} alt="#" className={style.image} />
              </div>
              <h4 className={style.date}>December 29, 2024</h4>
              <h3 className={style.title_news}>
                How to choose perfect gadgets
              </h3>
              <h5 className={style.news}>
                When, while the lovely valley teems with veoper around me ...
              </h5>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
