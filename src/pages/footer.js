import React from 'react';
import Link from "@docusaurus/Link";

const Footer = () => {
  return (
    <div className="flex justify-between items-center px-16 py-8 mobile-view flex-col-mobile footer">
      <div>
        <Link to={"/"} className={'links'} style={{ textDecoration: "none" }}>
          Tutorial
        </Link>
      </div>
      <div className="flex flex-col flex-div ">
        <Link to={"/"} className={'links'} style={{ textDecoration: "none" }}>
          X
        </Link>
        <Link to={"/"} className={'links'} style={{ textDecoration: "none" }}>
          Linkedin
        </Link>
      </div>
      <div className="flex flex-col flex-div">
        <Link to={"/"} className={'links'} style={{ textDecoration: "none" }}>
          Blogs
        </Link>
        <Link to={"/"} className={'links'} style={{ textDecoration: "none" }}>
          Github
        </Link>
      </div>
    </div>
  );
}

export default Footer;

