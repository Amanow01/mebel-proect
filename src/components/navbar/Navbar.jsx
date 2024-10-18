import "./Navbar.css";
import Link from "next/link";
import Image from "next/image";
import myApp from "@/components/navbar/navbar-image/myApp.svg";
import { links } from "@/components/navbar/links";
import Hamburg from "../hamburg/Hamburg";

const Navbar = () => {
  return (
    <>
      <nav>
        <Link className="myApp" href="/">
          <span>MyApp</span>
          <Image className="icon" src={myApp} alt="myApp" />
        </Link>
        <div className="right_nav">
          {links.map((link) => {
            return (
              <Link key={link.id} href={link.url}>
                {link.title}
              </Link>
            );
          })}
        </div>
        <div className="menu">
          <Hamburg />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
