import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./index.module.css";

function HomepageHeader() {
  // const { siteConfig } = useDocusaurusContext();
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
              to="/"
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
  return (
    
      <Layout className="" noFooter>
        <HomepageHeader />
        <div className="flex justify-between items-center px-16 py-8">
          <div>
            <Link to={"/"} style={{ textDecoration: "none" }}>
              Tutorial
            </Link>
          </div>
          <div className="flex flex-col">
            <Link to={"/"} style={{ textDecoration: "none" }}>
              X
            </Link>
            <Link to={"/"} style={{ textDecoration: "none" }}>
              Linkedin
            </Link>
          </div>
          <div className="flex flex-col">
            <Link to={"/"} style={{ textDecoration: "none" }}>
              Blogs
            </Link>
            <Link to={"/"} style={{ textDecoration: "none" }}>
              Github
            </Link>
          </div>
        </div>
      </Layout>
    
  );
}
