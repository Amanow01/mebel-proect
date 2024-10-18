import "./Navbar.css";
import Link from "next/link";

import Hamburg from "../hamburg/Hamburg";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="wrapper flex speak-between item-center border-button">
          <Link href="/" className="logo">
            Интерьер.
          </Link>
          <input type="text" placeholder="Поиск" />
          <Link className="link" href="/">
            Каталог
          </Link>
          <Link className="link" href="/">
            Корзина
          </Link>
        </div>

        <div className="menu">
          <Hamburg />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
