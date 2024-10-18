import "@/app/contact/contact.css";
import Image from "next/image";
import MainBtn from "@/components/main-btn/MainBtn";
import contact from "../../Public/contact.png";
export const metadata = {
  title: "Contact",
  description: "This is decription",
};
const Contact = () => {
  return (
    <main>
      <div className="container ">
        <h1 className="title">Lets Keep in Touch</h1>
        <div className=" ">
          <div className="content">
            <div className="newimgContainer">
              <Image
                src={contact}
                alt="contacts"
                fill={true}
                className="contactNew-image"
              />
            </div>
            <form className="form">
              <input
                type="text"
                placeholder="name"
                className="input"
                title="Enter your name"
              />
              <input
                type="text"
                placeholder="email"
                className="input"
                title="Enter your email address"
              />
              <textarea
                className="textArea"
                placeholder="message"
                cols="30"
                rows="10"
                title="Write a comment"
              ></textarea>
              <MainBtn url="#" text="Send" />
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
