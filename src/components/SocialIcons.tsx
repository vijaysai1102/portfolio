import { useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdNotes } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import "./styles/SocialIcons.css";

const SocialIcons = () => {
  useEffect(() => {
    const updatePos = (e: MouseEvent) => {
      const icons = document.querySelectorAll<HTMLElement>(".social-icon");
      icons.forEach((icon) => {
        const rect = icon.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          const angle = Math.atan2(dy, dx);
          icon.style.setProperty("--siLeft", `${Math.cos(angle) * 10}px`);
          icon.style.setProperty("--siTop", `${Math.sin(angle) * 10}px`);
        }
      });
    };
    document.addEventListener("mousemove", updatePos);
    return () => document.removeEventListener("mousemove", updatePos);
  }, []);

  return (
    <div className="social-icons">
      <a
        href="https://github.com/vijaysai1102"
        target="_blank"
        rel="noreferrer"
        className="social-icon"
        data-cursor="disable"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/vijay-sai-chigullapally-63558521b/"
        target="_blank"
        rel="noreferrer"
        className="social-icon"
        data-cursor="disable"
      >
        <FaLinkedin />
      </a>
      <a
        href="mailto:vijaysaichigullapally1@gmail.com"
        className="social-icon"
        data-cursor="disable"
      >
        <MdEmail />
      </a>
      <a
        href="/Vijay_Resume.pdf"
        target="_blank"
        rel="noreferrer"
        className="social-icon social-resume"
        data-cursor="disable"
      >
        <MdNotes />
        <span>Resume</span>
      </a>
    </div>
  );
};

export default SocialIcons;
