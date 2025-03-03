import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import Heading from "@theme/Heading";
import styles from "./index.module.css";
import Newheader from "./header";

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
            
            {/* <link href="/docs/intro" className="bg-white link-none px-8 py-4 rounded-md text-black text-2xl hover-none">Tech Tutorial </link> */}
          </div>
          {/* <div className="w-80 h-80 bg-cube bg-cover bg-center bg-no-repeat -mt-2 opacity-70 absolute"></div> */}
        </div>

        {/* Right container */}
        <div className="w-3/5 h-full bg-sukuna bg-cover opacity-70 bg-center bg-no-repeat  transition-all transform hover:scale-105 duration-500 ease-out"></div>
      </div>
    </>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    // <Layout
    //   title={`Hello from ${siteConfig.title}`}
    //   description="Description will go into a meta tag in <head />"
    //   className="bg-red-500">
    //   <HomepageHeader />
    //   <main>
    //     <HomepageFeatures />
    //   </main>
    // </Layout>
    <>
      <div className="">
        <Layout className="">
        {/* <header className=" flex justify-start items-center px-8 py-4 gap-16">
          <div className="w-10 h-10 bg-cube bg-cover bg-center bg-no-repeat"></div>
          <Link to={"/"} className={""}>
            Home
          </Link>
          <Link to={"/tutorial"}>Tutorial</Link>
          <Link to={"/blog"}>Blogs</Link>
        </header> */}
        <HomepageHeader />
        <div className="flex justify-between items-center px-16 py-8">
          <div>
            <Link to={"/tutorial"}>Tutorial</Link>
          </div>
          <div className="flex flex-col">
            <Link to={"/tutorial"}>X</Link>
            <Link to={"/tutorial"}>Linkedin</Link>
          </div>
          <div className="flex flex-col">
            <Link to={"/blog"}>Blogs</Link>
            <Link to={"/Github"}>Github</Link>
          </div>
        </div>
        </Layout>
      </div>
    </>
  );
}
