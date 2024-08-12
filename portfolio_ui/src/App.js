import { useEffect, useState } from "react";
import Home from "./components/Home";
import NavButtons from "./components/topnav/NavButtons";
import { ScreenContext } from "./contexts";
import { colors } from "./data";

export default function App() {
  const [screen, setScreen] = useState("");
  
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 320 && width <= 480) {
        localStorage.setItem("screen", "phone");
        setScreen("phone");
      } else if (width >= 481 && width <= 1024) {
        localStorage.setItem("screen", "tablet");
        setScreen("tablet");
      } else if (width >= 1025 && width <= 1920) {
        localStorage.setItem("screen", "laptop");
        setScreen("laptop");
      } else if (width >= 1921 && width <= 2560) {
        localStorage.setItem("screen", "standard-desktop");
        setScreen("standard-desktop");
      } else if (width >= 2561 && width <= 3840) {
        localStorage.setItem("screen", "large-desktop");
        setScreen("large-desktop");
      } else if (width >= 3841 && width <= 5120) {
        localStorage.setItem("screen", "ultra-wide");
        setScreen("ultra-wide");
      } else if (width >= 5121) {
        localStorage.setItem("screen", "5k-monitor");
        setScreen("5k-monitor");
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ScreenContext.Provider value={screen}>
      <div style={{color: colors.text}} className="relative bg-[#111827] font-[sans] text-zinc-300">
        <Home />
      </div>
    </ScreenContext.Provider>
  );
}