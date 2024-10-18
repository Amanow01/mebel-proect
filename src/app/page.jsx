import "@/app/page.css";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";

export default async function Home() {
  return (
    <>
      <main>
        <div className="background-image">
          <div className="wrapper">
            <Navbar />
          </div>
        </div>
      </main>
    </>
  );
}
