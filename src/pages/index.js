import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
// import HomepageFeatures from "@site/src/components/HomepageFeatures";

// import Heading from "@theme/Heading";
import styles from "./index.module.css";
// import Newheader from "./header";
import Footer from "./footer";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <>
      <div className="h-screen flex overflow-hidden">
        {/* Left container */}
        <div className="w-2/5 h-full bg-black text-white flex flex-col justify-center items-end">
          <div className="w-full h-full opacity-30 bg-black px-20 py-10"></div>
          <div className="max-w-md flex flex-col justify-center items-center mt-10 absolute px-20 py-10 opacity-80">
            <h1 className="text-5xl mb-2">Dev Guy</h1>
            <p className="text-5xl mb-4">Tech is Cool</p>
            <Link
              to="/Tutorials"
              style={{ textDecoration: "none" }}
              className="bg-white link-none px-8 py-4 rounded-md text-black text-2xl hover-none style-none"
            >
              Tech Tutorial
            </Link>
          </div>
        </div>

        {/* Right container */}
        <div className="w-3/5 h-full bg-sukuna bg-cover opacity-90 bg-center bg-no-repeat  transition-all transform hover:scale-105 duration-500 ease-out"></div>
      </div>
    </>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <>
      <Layout className="">
        <HomepageHeader />
        <Footer />
      </Layout>
    </>
  );
}
