import { Fredoka } from "next/font/google";
import "./globals.css";
import Header from './components/Header';
import Footer from "./components/Footer";



const fredoka = Fredoka({
  weight: "400",
  subsets: ["hebrew"],
  display: "swap",
});

export const metadata = {
  title: "IELTS Portal",
  description:
    "Designed to assist students preparing for the IELTS computer-based exam by offering free access to a comprehensive set of mock tests, covering both individual modules and full-length exams. Additionally, the platform provides valuable tips and strategies to help students achieve higher band scores and improve their test-taking skills.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${fredoka.className} text-secondary`}
      >
        <Header />
        <main className="">{children}</main>
        <Footer />  
      </body>
    </html>
  );
}
