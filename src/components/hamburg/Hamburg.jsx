"use client";
import "./Hamburg.css";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { links } from "@/components/navbar/links";
const Hamburg = () => {
  const [link, setLink] = useState(false);
  return (
    <>
      <div className={link ? ["right_nav", "active"].join(" ") : ["right_nav"]}>
        {links.map((link) => {
          return (
            <Link key={link.id} href={link.url}>
              {link.title}
            </Link>
          );
        })}
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
