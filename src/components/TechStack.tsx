import "./styles/TechStack.css";

const techs = [
  { name: "PyTorch", color: "#ee4c2c" },
  { name: "TensorFlow", color: "#ff6f00" },
  { name: "Python", color: "#3776ab" },
  { name: "LangChain", color: "#5eead4" },
  { name: "LLMs & RAG", color: "#22d3ee" },
  { name: "NLP", color: "#a78bfa" },
  { name: "Apache Spark", color: "#e25a1c" },
  { name: "Apache Kafka", color: "#5eead4" },
  { name: "dbt", color: "#ff694a" },
  { name: "Snowflake", color: "#29b5e8" },
  { name: "BigQuery", color: "#4285f4" },
  { name: "GCP", color: "#4285f4" },
  { name: "AWS", color: "#ff9900" },
  { name: "Docker", color: "#2496ed" },
  { name: "FastAPI", color: "#009688" },
  { name: "SQL", color: "#f29111" },
  { name: "Scikit-learn", color: "#f7931e" },
  { name: "Pandas", color: "#130654" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "React", color: "#61dafb" },
  { name: "CI/CD", color: "#5eead4" },
  { name: "Linux", color: "#fcc624" },
];

const TechStack = () => {
  const row1 = techs.slice(0, 11);
  const row2 = techs.slice(11);

  return (
    <div className="techstack-section" id="techDiv">
      <div className="techstack-inner">
        <h2 className="techstack-title">
          Tech <span>Stack</span>
        </h2>

        <div className="techstack-marquee-wrap">
          <div className="techstack-track track-forward">
            {[...row1, ...row1].map((t, i) => (
              <div
                key={i}
                className="tech-pill"
                style={{ "--dot": t.color } as React.CSSProperties}
              >
                <span className="tech-dot" />
                {t.name}
              </div>
            ))}
          </div>
        </div>

        <div className="techstack-marquee-wrap">
          <div className="techstack-track track-reverse">
            {[...row2, ...row2].map((t, i) => (
              <div
                key={i}
                className="tech-pill"
                style={{ "--dot": t.color } as React.CSSProperties}
              >
                <span className="tech-dot" />
                {t.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
