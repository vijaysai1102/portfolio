import "./styles/About.css";

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "10+", label: "Projects Shipped" },
  { value: "50+", label: "Technologies Used" },
  { value: "3", label: "Industry Roles" },
];

const highlights = [
  { icon: "🧠", text: "Machine Learning & Deep Learning" },
  { icon: "⚡", text: "LLMs, RAG & Agentic AI" },
  { icon: "🔧", text: "MLOps & Production AI Systems" },
  { icon: "📊", text: "Big Data & ETL Pipelines" },
];

const About = () => {
  return (
    <div className="about-section" id="aboutDiv">
      <div className="about-inner">
        <div className="about-left">
          <div className="about-stats-grid">
            {stats.map((s) => (
              <div className="about-stat-card" key={s.label}>
                <div className="about-stat-value">{s.value}</div>
                <div className="about-stat-label">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="about-highlights">
            {highlights.map((h) => (
              <div className="about-highlight-row" key={h.text}>
                <span className="about-highlight-icon">{h.icon}</span>
                <span>{h.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="about-right">
          <h3>About Me</h3>
          <p>
            M.S. Computer Science student at{" "}
            <strong>University of North Texas</strong> (GPA: 4.0/4.0). Research
            Assistant in Machine Learning, designing CNN & Transformer
            architectures, optimizing inference latency, and building automated
            ETL pipelines.
          </p>
          <p>
            Previously a Data Scientist at <strong>Kanerika Inc.</strong> and
            Data Engineer at <strong>Saras Analytics</strong>, shipping
            ML-powered products used in production. Passionate about building{" "}
            <strong>AI systems that work in the real world</strong>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
