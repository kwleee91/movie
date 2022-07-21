import { useState, useEffect } from "react";

function getWindowWidth() {
  const { innerWidth: width } = window;
  return width;
}

function WindowWidth() {
  const [windowWidth, setWindowWith] = useState(getWindowWidth());

  useEffect(() => {
    function handleResize() {
      setWindowWith(getWindowWidth());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowWidth;
}

export default WindowWidth;
