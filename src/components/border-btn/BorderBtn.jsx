import "../border-btn/BorderBtn.css";
import Link from "next/link";
const BorderBtn = ({ title, url }) => {
  return (
    <>
      <div className="button">
        <Link href={url}>{title}</Link>
      </div>
    </>
  );
};

export default BorderBtn;
