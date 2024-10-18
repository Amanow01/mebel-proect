import "@/app/blog/blog.css";
import { info } from "@/app/blog/api";
import Image from "next/image";
import apps from "../../Public/apps.jpg";
// async function getData() {
//   const res = await fetch("https://jsonplaceholder.org/posts", );

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }
const Blog = async () => {
  // const data = await getData();
  return (
    <>
      {info.map((item) => (
        <div className="mainContainer" key={item.id}>
          <Image
            src={apps}
            alt="apps"
            width={300}
            height={200}
            className="image"
          />
          <div className="text-style">
            <h1>{item.slug}</h1>
            <h3>{item.content}</h3>
          </div>
        </div>
      ))}
    </>
  );
};

export default Blog;
