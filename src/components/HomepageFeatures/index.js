import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Easy to Use",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: "Focus on What Matters",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: "Powered by React",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  
  return (
    // <div className={clsx('col col--4')}>
    //   <div className="text--center">
    //     <Svg className={styles.featureSvg} role="img" />
    //   </div>
    //   <div className="text--center padding-horiz--md">
    //     <Heading as="h3">{title}</Heading>
    //     <p>{description}</p>
    //   </div>
    // </div>
    <>
      <div className="p-4">
        <h1>This is Karan's Blog webapp</h1>
        <p>
          This is a blog webapp created by Karan using Docusaurus. It is a
          static site generator built with React. It is easy to use and focuses
          on what matters. It is powered by React
        </p>
      </div>
    </>
  );
}

export default function HomepageFeatures() {
  const img = new Image();
img.src = '/static/img/sukuna.png';
document.body.appendChild(img);
  return (
   <section className="w-full h-screen bg-[url('/static/img/sukuna.png')] bg-cover bg-center bg-no-repeat">
    <h1>DevRel and Software Stuff</h1>
    
    <p>You can focus on building and shipping products, we handle the documentation, content writing for website, product tutorial and much more in pack.</p>
   </section>
  );
}
