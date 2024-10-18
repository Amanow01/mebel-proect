import "@/app/about/about.css";
import Image from "next/image";
import MainBtn from "@/components/main-btn/MainBtn";
const About = () => {
  return (
    <main>
      <div className="container about-mobile">
        <div className="imgContainer">
          <Image
            src="https://img.freepik.com/free-photo/paper-people-chain-on-green-grass-unity-concept_632805-35.jpg?w=1380&t=st=1685890833~exp=1685891433~hmac=46f15c2161ca525e238313ec9dc0812864411c64035b664d7abecd75e33494e1"
            fill={true}
            alt="about us"
            className="about_img"
          />
          <div className="imgText">
            <h1 className="imgTitle">Lorem ipsum dolor sit</h1>
            <h2 className="imgDesc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h2>
          </div>
        </div>

        <div className="textContainer">
          <div className="item">
            <h1 className="title">Who Are We?</h1>
            <p className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
              suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
              eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
              beatae, a suscipit eos. Animi quibusdam cum omnis officiis
              <br />
              <br />
              voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam
              iure esse tempora beatae, a suscipit eos. Animi quibusdam cum
              omnis officiis voluptatum quo ea eveniet?
            </p>
          </div>

          <div className="item">
            <h1 className="title">What We Do?</h1>
            <p className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
              suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
              eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              - Creative Illustrations
              <br />
              <br /> - Dynamic Websites
              <br />
              <br /> - Fast and Handy
              <br />
              <br /> - Mobile Apps
            </p>
            <MainBtn url="/contact" text="Contact" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
