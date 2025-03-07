import Link from "@docusaurus/Link";
import clsx from "clsx";
import { useEffect } from "react";

function HomepageHeader() {
  useEffect(() => {
    // Create a link element for preloading the image
    const link = document.createElement('link');
    const link2= document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = 'https://tech-docs-opal.vercel.app/assets/images/green-sk-9719f703ea61483f3b4128bc19a76c00.png'; // Replace with the actual path to 
    link2.rel = 'preload';
    link2.as = 'image';
    link2.href = 'https://tech-docs-opal.vercel.app/assets/images/gojo-9420861a04e6be28a5940a8aec6451f6.png';

    document.head.appendChild(link);
    document.head.appendChild(link2);

    // Clean up the link element when the component unmounts
    return () => {
      document.head.removeChild(link);
      document.head.removeChild(link2)
    };
  }, []);
  return (
    <>
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
    </>
  );
}

export default HomepageHeader;
