import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section" id="careerDiv">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Research Assistant — ML</h4>
                <h5>University of North Texas · Denton, TX</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Designing and optimizing CNN &amp; Transformer architectures in
              PyTorch with 15% accuracy gains. Applied model quantization &amp;
              pruning to reduce inference latency by 30%. Built automated ETL
              pipelines processing 500GB+ of unstructured research data,
              improving throughput by 40%.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Scientist</h4>
                <h5>Kanerika · Hyderabad, India</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Developed hybrid LSTM &amp; Isolation Forest ensemble models for
              real-time anomaly detection across 500K+ daily telemetric records.
              Improved rare-event recall by 20% with SMOTE. Reduced false
              positives by 15% across 200+ concurrent sensor streams.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Engineer</h4>
                <h5>Saras Analytics · Hyderabad, India</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Engineered high-throughput ELT pipelines using Apache Kafka &amp;
              Saras Daton to consolidate real-time data from 200+ e-commerce
              sources into Snowflake, reducing ingestion latency by 40%.
              Developed 70+ dbt models transforming raw commerce data into
              structured analytics layers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
