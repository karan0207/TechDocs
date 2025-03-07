import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import "../css/tailwind.css";

import Footer from "./footer";
import HomepageHeader from "./Header";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Create a link element for preloading the image
    const link = document.createElement("link");
    const link2 = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href =
      "https://tech-docs-opal.vercel.app/assets/images/green-sk-9719f703ea61483f3b4128bc19a76c00.png"; // Replace with the actual path to
    link2.rel = "preload";
    link2.as = "image";
    link2.href =
      "https://tech-docs-opal.vercel.app/assets/images/gojo-9420861a04e6be28a5940a8aec6451f6.png";

    document.head.appendChild(link);
    document.head.appendChild(link2);

    // Clean up the link element when the component unmounts
    return () => {
      document.head.removeChild(link);
      document.head.removeChild(link2);
    };
  }, []);
  return (
    <Layout className="" noFooter>
      <HomepageHeader />
      <Footer />
    </Layout>
  );
}
