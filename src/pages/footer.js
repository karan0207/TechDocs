import React from 'react';
import Link from "@docusaurus/Link";

const Footer = () => {
  return (
    <>
    <div className="flex justify-between items-center px-16 py-8 mobile-view flex-col-mobile footer w-full">
      <div>
        <Link to={"/docs-intro"} className={'links'} style={{ textDecoration: "none" }}>
          Tutorial
        </Link>
      </div>
      <div className="flex flex-col flex-div gap-2">
        <Link  href='https://x.com/Karanschandel' className={'links'} style={{ textDecoration: "none" }}>
          X
        </Link>
        <Link href='https://www.linkedin.com/in/karan-s-chandel' className={'links'} style={{ textDecoration: "none" }}>
          Linkedin
        </Link>
      </div>
      <div className="flex flex-col flex-div gap-2">
        <Link to={"/blog"} className={'links'} style={{ textDecoration: "none" }}>
          Blogs
        </Link>
        <Link href='https://github.com/karan0207' className={'links'} style={{ textDecoration: "none" }}>
          Github
        </Link>
      </div>
      
    </div>
    <div className='footer-bottom'>
        2025 &copy; Made by Karan
      </div>
      </>
  );
}

export default Footer;

