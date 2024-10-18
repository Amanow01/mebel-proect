import "@/app/portfolio/portfolio.css";
import Link from "next/link";
const Portfolio = () => {
  return (
    <main>
      <div className="container">
        <h1 className="selectTitle">Projects</h1>
        <div className="items ">
          <Link href="/" className="portfolio-item">
            <span className="portfolio-title">Learning-center</span>
          </Link>
          <Link href="/" className="portfolio-item">
            <span className="portfolio-title">React-portfolio</span>
          </Link>
          <Link
            href="https://amanow01.github.io/portfolio-next-deploy/"
            className="portfolio-item"
          >
            <span className="portfolio-title">Next js-portfolio</span>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Portfolio;
