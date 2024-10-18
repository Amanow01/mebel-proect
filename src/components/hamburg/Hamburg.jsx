"use client";
import "./Hamburg.css";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Hamburg = () => {
  const [link, setLink] = useState(false);
  return (
    <>
      <div className={link ? ["link", "active"].join(" ") : ["link"]}>
        <Link href="/">Каталог</Link>
        <Link href="/">Корзина</Link>
      </div>
      <div onClick={() => setLink(!link)} className="menu">
        {link ? (
          <AiOutlineClose size={"1.5rem"} />
        ) : (
          <AiOutlineMenu size={"1.5rem"} />
        )}
      </div>
    </>
  );
};

export default Hamburg;
