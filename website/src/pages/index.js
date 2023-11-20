import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <div className="hero hero--primary">
      <div className="container">
        <h1 className="hero__title">MLflow</h1>
        <p className="hero__subtitle">
          An open source platform for the machine learning lifecycle
        </p>
        <div>
          <button className="button button--secondary button--outline button--lg">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
  return (
    <div
      className="container"
      style={{
        backgroundColor: "#092241",
      }}
    >
      <img src="img/mlflow-background.png" alt="MLflow Logo" />
      <p>An open source platform for the machine learning lifecycle</p>
    </div>
  );
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        {/* <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading> */}
        {/* <p className="hero__subtitle">{siteConfig.tagline}</p> */}
        <img src="img/mlflow-background.png" alt="MLflow Logo" />
        <p>An open source platform for the machine learning lifecycle</p>
        {/* <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://mlflow.org/docs/latest/index.html"
          >
            An open source platform for the machine learning lifecycle
          </Link>
        </div> */}
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
