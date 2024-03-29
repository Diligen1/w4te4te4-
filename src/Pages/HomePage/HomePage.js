import {
  Header,
  Promo,
  Category,
  Method,
  Summer,
  News,
  Footer,
} from "../../Components";
import style from "./HomePage.module.css";

import { useState } from "react";
export function HomePage() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };
  return (
    <main className={`${style.main} ${darkMode ? style.darkMode : ""}`}>
      <div className={style.contain}>
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Promo darkMode={darkMode} />
        <Category darkMode={darkMode} />
        <Method darkMode={darkMode} />
        <Summer darkMode={darkMode} />
        <News darkMode={darkMode} />
        <Footer darkMode={darkMode} />
      </div>
    </main>
  );
}
