import "./globals.css";
import Navbar from "../components/homepage/Navbar";
import Footer from "@/components/homepage/Footer";
import { AuthProvider } from "@/lib/AuthContext";

export const metadata = {
  title: "Career Counseling App",
  description: "by Habibullah [github(md8-habibullah)] (https://github.com/md8-habibullah/Career-Counseling-Website.git)",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <AuthProvider>
          <div className="">
            <Navbar></Navbar>
          </div>

          <div>{children}</div>

          <div>
            <Footer></Footer>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
