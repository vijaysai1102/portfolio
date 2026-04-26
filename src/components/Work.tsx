import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";

const workData = [
  {
    number: "01",
    title: "F1 Spec RAG Agent",
    subtitle: "2026 FIA Technical Regulations AI Assistant",
    description:
      "RAG pipeline powered by Google Gemini to query the 2026 FIA Formula 1 Technical Regulations PDF. Returns answers with mandatory Article Number citations and zero hallucination focus.",
    image: "/images/f1rag.svg",
    link: "https://f1-2026-rag-agent.streamlit.app/",
    tags: ["Python", "Google Gemini", "RAG", "LangChain", "PDF Querying", "Vector DB"],
  },
  {
    number: "02",
    title: "Fin Bot",
    subtitle: "AI-Driven Personal Finance Tool",
    description:
      "Cross-platform Flutter & FastAPI chatbot leveraging OCR and ML to automate expense tracking. Reduced manual data entry by 70%, achieving 99.5% uptime on GCP Cloud Run.",
    image: "/images/finbot.svg",
    link: "https://github.com/mdzh10/FinBot-AI-Powered-Chatbot-For-Personal-Finance-Management",
    tags: ["Flutter", "FastAPI", "Python", "Docker", "GCP", "Supabase"],
  },
  {
    number: "03",
    title: "Plant Disease Detector",
    subtitle: "Detection, Classification & Crop Recommender",
    description:
      "Web-based plant phenotyping platform using CNN (MobileNetV2) trained on 50K+ images across 38 classes. Random Forest crop recommender achieving ~99.5% accuracy.",
    image: "/images/plantdisease.png",
    link: "https://plant-disease-detection-classification.onrender.com/",
    tags: ["Python", "TensorFlow", "MobileNetV2", "Flask", "REST APIs"],
  },
  {
    number: "04",
    title: "Biomedical Classifier",
    subtitle: "X-Ray & MRI Image Classification",
    description:
      "CNN-based deep learning model using TensorFlow with transfer learning (ResNet, VGG16) for X-ray and MRI classification, achieving 90%+ accuracy. Apache Spark for distributed preprocessing.",
    image: "/images/biomedical.svg",
    link: "https://github.com/vijaysai1102/Biomedical_Image_Classifier",
    tags: ["Python", "TensorFlow", "Keras", "ResNet", "Apache Spark"],
  },
];

const Work = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const go = useCallback(
    (index: number) => {
      if (!isAnimating && index !== currentSlide) {
        setIsAnimating(true);
        setCurrentSlide(index);
        setTimeout(() => setIsAnimating(false), 500);
      }
    },
    [isAnimating, currentSlide]
  );

  const prev = useCallback(() => {
    go(currentSlide === 0 ? workData.length - 1 : currentSlide - 1);
  }, [currentSlide, go]);

  const next = useCallback(() => {
    go(currentSlide === workData.length - 1 ? 0 : currentSlide + 1);
  }, [currentSlide, go]);

  const project = workData[currentSlide];

  return (
    <div className="work-section section-container" id="workDiv">
      <div className="work-container">
        <h2>
          Some <span>work</span>
          <br /> I have done
        </h2>

        <div className="work-carousel">
          <div
            className="work-track"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {workData.map((p, i) => (
              <div key={i} className="work-slide">
                <div className="work-content">
                  <div className="work-info">
                    <h3>{p.number}</h3>
                    <h2>{p.title}</h2>
                    <h4>{p.subtitle}</h4>
                    <p>{p.description}</p>
                    <div className="work-tags">
                      {p.tags.map((tag) => (
                        <span key={tag} className="work-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="work-image-container">
                    <WorkImage image={p.image} alt={p.title} link={p.link} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="work-controls">
          <button className="work-button" onClick={prev} aria-label="Previous" data-cursor="disable">
            ←
          </button>
          <div className="work-dots">
            {workData.map((_, i) => (
              <button
                key={i}
                className={`work-dot${i === currentSlide ? " active" : ""}`}
                onClick={() => go(i)}
                aria-label={`Project ${i + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
          <button className="work-button" onClick={next} aria-label="Next" data-cursor="disable">
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Work;
