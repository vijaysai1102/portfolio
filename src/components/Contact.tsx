import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdArrowOutward, MdEmail } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contactDiv">
      <div className="contact-flex">
        <div className="connect">
          <h2>Let's Connect</h2>
          <a
            href="https://www.linkedin.com/in/vijay-sai-chigullapally-63558521b/"
            target="_blank"
            rel="noreferrer"
            data-cursor="disable"
          >
            Vijay Sai Chigullapally
            <MdArrowOutward />
          </a>
          <a
            href="mailto:vijaysaichigullapally1@gmail.com"
            data-cursor="disable"
          >
            vijaysaichigullapally1@gmail.com
            <MdArrowOutward />
          </a>
          <h3>Education</h3>
          <p>
            M.S. Computer Science
            <br />
            University of North Texas, Denton TX
            <br />
            Expected May 2026
          </p>
          <h3 style={{ marginTop: "30px" }}>Certifications</h3>
          <p>
            Machine Learning with Python: Foundations
            <br />
            Model Context Protocol (MCP): Hands-On with Agentic AI
            <br />
            ETL in Python and SQL
          </p>
        </div>

        <div className="social">
          <h2>Socials</h2>
          <a
            href="https://github.com/vijaysai1102"
            target="_blank"
            rel="noreferrer"
            data-cursor="disable"
          >
            GitHub <MdArrowOutward />
          </a>
          <a
            href="https://www.linkedin.com/in/vijay-sai-chigullapally-63558521b/"
            target="_blank"
            rel="noreferrer"
            data-cursor="disable"
          >
            LinkedIn <MdArrowOutward />
          </a>
          <a
            href="mailto:vijaysaichigullapally1@gmail.com"
            data-cursor="disable"
          >
            Email <MdArrowOutward />
          </a>
          <a
            href="/Vijay_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            data-cursor="disable"
          >
            Resume <MdArrowOutward />
          </a>
        </div>

        <div className="footer">
          <p>
            Designed &amp; Developed by <span>Vijay Sai Chigullapally</span>
          </p>
          <p>&copy; 2026. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
