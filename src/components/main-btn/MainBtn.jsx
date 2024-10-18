import "@/components/main-btn/MainBtn.css";
import Link from "next/link";

const MainBtn = ({ text, url }) => {
  return (
    <div>
      <Link href={url}>
        <button className="btn-style">{text}</button>
      </Link>
    </div>
  );
};

export default MainBtn;
