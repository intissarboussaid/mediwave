import { useEffect, useState } from "react";

const useResizeScreen = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }
  const handleScreenStyle = () => {
    console.log(windowDimensions);
    if (windowDimensions.width < 800) {
      console.log("hahahahah");
    }
  };
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
      handleScreenStyle();
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [windowDimensions]);

  return windowDimensions;
};

export default useResizeScreen;
