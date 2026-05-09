import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import ScrollProgress from "./ScrollProgress";
import HSTDeadlineBar from "./HSTDeadlineBar";
import ChatWidget from "./ChatWidget";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  const [barVisible, setBarVisible] = useState(false);

  useEffect(() => {
    setBarVisible(sessionStorage.getItem("hstBarDismissed") !== "1");
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty("--top-bar-h", barVisible ? "47px" : "0px");
  }, [barVisible]);

  const dismiss = () => {
    sessionStorage.setItem("hstBarDismissed", "1");
    setBarVisible(false);
  };

  return (
    <>
      <ScrollToTop />
      <ScrollProgress />
      {barVisible && <HSTDeadlineBar onDismiss={dismiss} />}
      <Navbar topOffset={barVisible ? 47 : 0} />
      <main style={{ paddingTop: barVisible ? 47 : 0 }}>{children}</main>
      <Footer />
      <ChatWidget />
    </>
  );
}
