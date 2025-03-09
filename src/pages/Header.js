import Link from "@docusaurus/Link";
import clsx from "clsx";
import { useEffect, useState } from "react";

function HomepageHeader() {
  const [showGif, setShowGif] = useState(true);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 800);


  useEffect(() => {
    // Set a timeout to remove the GIF after X milliseconds
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 800);
    };
    const timer = setTimeout(() => {
      setShowGif(false);
    }, 4000); // Adjust time according to your GIF duration

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timer); // Cleanup function
      window.removeEventListener("resize", handleResize);
      }
  }, []);
  return (
    <>
      {showGif && isLargeScreen && (
        <div
          className={clsx(
            "relative h-screen flex flex-col sm:flex-row overflow-hidden",
            showGif ? "image-gif" : ""
          )}
        >
          <div className="transparent relative w-full h-full flex flex-col justify-center items-center text-center text-white  md:w-2/5 sm:bg-opacity-100 sm:items-center sm:text-center sm:px-20 sm:py-10">
            <div className="max-w-md px-6 py-10 sm:px-0 sm:py-0">
              <h1 className="text-3xl sm:text-4xl md:text-5xl mb-2 opac">
                Nice Guy
              </h1>
              <p className="text-3xl sm:text-4xl md:text-5xl mb-4 opac">
                Tech is Cool
              </p>
              <div className="link-none px-8 py-4 rounded-md  text-lg sm:text-2xl hover:text-blue-300 md:text-3xl button-theme border border-purple-800 active">
                <Link
                  to="/docs/intro"
                  style={{ textDecoration: "none", fontWeight: "400" }}
                  className={"text-theme"}
                >
                  Tech Tutorial
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
      {!isLargeScreen && (
        <div className="h-screen flex flex-col sm:flex-row overflow-hidden relative">
        <div className="relative z-10 w-full h-full flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-50 md:w-2/5 sm:bg-opacity-100 sm:items-center sm:text-center sm:px-20 sm:py-10">
          <div className="max-w-md px-6 py-10 sm:px-0 sm:py-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl mb-2 opac">
              Nice Guy
            </h1>
            <p className="text-3xl sm:text-4xl md:text-5xl mb-4 opac">
              Tech is Cool
            </p>
            <div className="link-none px-8 py-4 rounded-md  text-lg sm:text-2xl hover:text-blue-300 md:text-3xl button-theme border border-purple-800 active">
              <Link
                to="/docs/intro"
                style={{ textDecoration: "none", fontWeight: "400" }}
                className={'text-theme'}>
                Tech Tutorial
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute sm:relative inset-0 flex justify-center w-full items-center h-full md:w-3/5 image-setup bg-cover bg-no-repeat bg-center z-0 pulsate-animation transition"></div>
      </div>
      )}

      {isLargeScreen&& !showGif && (
        <div className="h-screen flex flex-col sm:flex-row overflow-hidden relative">
          <div className="relative z-10 w-full h-full flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-50 md:w-2/5 sm:bg-opacity-100 sm:items-center sm:text-center sm:px-20 sm:py-10">
            <div className="max-w-md px-6 py-10 sm:px-0 sm:py-0">
              <h1 className="text-3xl sm:text-4xl md:text-5xl mb-2 opac">
                Nice Guy
              </h1>
              <p className="text-3xl sm:text-4xl md:text-5xl mb-4 opac">
                Tech is Cool
              </p>
              <div className="link-none px-8 py-4 rounded-md  text-lg sm:text-2xl hover:text-blue-300 md:text-3xl button-theme border border-purple-800 active">
                <Link
                  to="/docs/intro"
                  style={{ textDecoration: "none", fontWeight: "400" }}
                  className={"text-theme"}
                >
                  Tech Tutorial
                </Link>
              </div>
            </div>
          </div>

          <div className="absolute sm:relative inset-0 flex justify-center w-full items-center h-full md:w-3/5 image-setup bg-cover bg-no-repeat bg-center z-0 pulsate-animation transition"></div>
        </div>
      )}
    </>
  );
}

export default HomepageHeader;
