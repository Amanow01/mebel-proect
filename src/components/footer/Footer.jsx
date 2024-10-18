import "@/components/footer/Footer.css";
import Image from "next/image";
import vk from "../../Public/vk.png";
import inst from "../../Public/inst.png";
import twitter from "../../Public/twitter.png";
import youtube from "../../Public/yt.png";
const Footer = () => {
  return (
    <footer>
      <div>2023 MyApp. All rights reserved</div>
      <div className="footer-icon">
        <Image src={vk} width={15} height={15} alt="vk.com" />
        <Image src={inst} width={15} height={15} alt="instagram" />
        <Image src={twitter} width={15} height={15} alt="twitter" />
        <Image src={youtube} width={15} height={15} alt="youtube" />
      </div>
    </footer>
  );
};

export default Footer;
