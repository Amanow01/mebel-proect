import "@/app/page.css";
import Image from "next/image";
import MainBtn from "@/components/main-btn/MainBtn";
import hero from "@/Public/hero.png";

export default async function Home() {
  return (
    <>
      <main>
        <div className="flex home-mobile">
          <div className="home-item">
            <h1 className="home-title">
              The Future of AI in the next few years
            </h1>
            <p className="home-desc">
              Turning your Idea into Reality. We bring together the teams from
              the global tech industry.
            </p>
            <MainBtn url="/portfolio" text="Portfolio" />
          </div>
          <div className="home-item" width={100}>
            <Image className="home-img" src={hero} alt="hero" />
          </div>
        </div>
      </main>
    </>
  );
}
