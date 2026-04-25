import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);

  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };

  useEffect(() => {
    const isTouchDevice = "ontouchstart" in window;
    if (isTouchDevice) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);

  return (
    <div className="whatIDO" id="whatDiv">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line x1="0" y1="0" x2="0" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="7,7" />
              <line x1="100%" y1="0" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="7,7" />
            </svg>
          </div>

          <div className="what-content what-noTouch" ref={(el) => setRef(el, 0)}>
            <div className="what-border1">
              <svg height="100%">
                <line x1="0" y1="0" x2="100%" y2="0" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
                <line x1="0" y1="100%" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>ML &amp; AI ENGINEERING</h3>
              <h4>Deep Learning Systems for Real-World Impact</h4>
              <p>
                Building and optimizing ML models end-to-end from architecture
                design to production deployment on resource-constrained
                environments. Specializing in NLP, computer vision, and
                generative AI.
              </p>
              <h5>Skillset &amp; tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">PyTorch</div>
                <div className="what-tags">TensorFlow</div>
                <div className="what-tags">LangChain</div>
                <div className="what-tags">RAG &amp; LLMs</div>
                <div className="what-tags">AI Agents</div>
                <div className="what-tags">NLP</div>
                <div className="what-tags">Model Pruning</div>
                <div className="what-tags">Scikit-learn</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>

          <div className="what-content what-noTouch" ref={(el) => setRef(el, 1)}>
            <div className="what-border1">
              <svg height="100%">
                <line x1="0" y1="100%" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>DATA ENGINEERING</h3>
              <h4>Scalable Pipelines at Production Scale</h4>
              <p>
                Designing and building high-throughput ETL/ELT pipelines, data
                warehouses, and real-time streaming architectures that power
                analytics and ML workflows at scale.
              </p>
              <h5>Skillset &amp; tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Apache Kafka</div>
                <div className="what-tags">Apache Spark</div>
                <div className="what-tags">dbt</div>
                <div className="what-tags">Snowflake</div>
                <div className="what-tags">BigQuery</div>
                <div className="what-tags">GCP &amp; AWS</div>
                <div className="what-tags">Python</div>
                <div className="what-tags">CI/CD</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    Array.from(container.parentElement.children).forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}

export default WhatIDo;
