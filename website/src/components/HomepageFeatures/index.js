import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const TensorflowSvg = require("@site/static/img/Tensorflow_logo.svg").default;
const PyTorchSvg = require("@site/static/img/pytorch-icon.svg").default;
const HuggingfaceSvg = require("@site/static/img/huggingface.svg").default;

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
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        {/* <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div> */}
        <h2>Features</h2>
        <p>
          MLflow is an open source platform to manage the ML lifecycle,
          including experimentation, reproducibility, deployment, and a central
          model registry. MLflow currently offers several key components:
        </p>
        <div className="row">
          <div className="col" style={{ marginBottom: "1rem" }}>
            <div>
              <div className="card">
                <div className="card__header">
                  <h3>MLflow XXX</h3>
                </div>
                <div className="card__body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida.
                  </p>
                </div>
                <div className="card__footer">
                  <button className="button button--secondary button--block">
                    Read more
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col" style={{ marginBottom: "1rem" }}>
            <div>
              <div className="card">
                <div className="card__header">
                  <h3>MLflow YYY</h3>
                </div>
                <div className="card__body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida.
                  </p>
                </div>
                <div className="card__footer">
                  <button className="button button--secondary button--block">
                    Read more
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col" style={{ marginBottom: "1rem" }}>
            <div>
              <div className="card">
                <div className="card__header">
                  <h3>MLflow ZZZ</h3>
                </div>
                <div className="card__body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida.
                  </p>
                </div>
                <div className="card__footer">
                  <button className="button button--secondary button--block">
                    Read more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col" style={{ marginBottom: "1rem" }}>
            <div>
              <div className="card">
                <div className="card__header">
                  <h3>Lorem Ipsum</h3>
                </div>
                <div className="card__body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida.
                  </p>
                </div>
                <div className="card__footer">
                  <button className="button button--secondary button--block">
                    Read more
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col" style={{ marginBottom: "1rem" }}>
            <div>
              <div className="card">
                <div className="card__header">
                  <h3>Lorem Ipsum</h3>
                </div>
                <div className="card__body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida.
                  </p>
                </div>
                <div className="card__footer">
                  <button className="button button--secondary button--block">
                    Read more
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col" style={{ marginBottom: "1rem" }}>
            <div>
              <div className="card">
                <div className="card__header">
                  <h3>Lorem Ipsum</h3>
                </div>
                <div className="card__body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida.
                  </p>
                </div>
                <div className="card__footer">
                  <button className="button button--secondary button--block">
                    Read more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <br />
        <h2>Integrations</h2>
        <div className="row">
          <div className="col col--2" style={{ marginBottom: "1rem" }}>
            <div
              class="card"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <div class="card__image">
                <br />
                <TensorflowSvg
                  style={{
                    height: "80px",
                    width: "auto",
                  }}
                />
              </div>
              <div class="card__body">
                <h4>Tensorflow</h4>
              </div>
              <div class="card__footer">
                <button class="button button--secondary button--block">
                  See the docs
                </button>
              </div>
            </div>
          </div>
          <div className="col col--2" style={{ marginBottom: "1rem" }}>
            <div
              class="card"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <div class="card__image">
                <br />
                <PyTorchSvg
                  style={{
                    height: "80px",
                    width: "auto",
                  }}
                />
              </div>
              <div class="card__body">
                <h4>PyTorch</h4>
              </div>
              <div class="card__footer">
                <button class="button button--secondary button--block">
                  See the docs
                </button>
              </div>
            </div>
          </div>
          <div className="col col--2" style={{ marginBottom: "1rem" }}>
            <div
              class="card"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <div class="card__image">
                <br />
                <HuggingfaceSvg
                  style={{
                    height: "80px",
                    width: "auto",
                  }}
                />
              </div>
              <div class="card__body">
                <h4>Hugging Face</h4>
              </div>
              <div class="card__footer">
                <button class="button button--secondary button--block">
                  See the docs
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
