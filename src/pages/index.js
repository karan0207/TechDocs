import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import '../css/tailwind.css';


import Footer from "./footer";
import HomepageHeader from "./Header";




export default function Home() {
  return (
    <Layout className="" noFooter>
      <HomepageHeader />
      <Footer/>
    </Layout>
  );
}



