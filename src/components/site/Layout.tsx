import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import ScrollProgress from "./ScrollProgress";
import ChatWidget from "./ChatWidget";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <ScrollToTop />
      <ScrollProgress />
      <Navbar topOffset={0} />
      <main>{children}</main>
      <Footer />
      <ChatWidget />
    </>
  );
}
