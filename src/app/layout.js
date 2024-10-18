import Navbar from "@/components/navbar/Navbar";
import "@/app/style/globals.css";
import Footer from "@/components/footer/Footer";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="wrapper">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
