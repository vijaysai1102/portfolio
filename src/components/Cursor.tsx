import { useEffect, useRef } from "react";
import "./styles/Cursor.css";

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.innerWidth < 600) return;

    const moveCursor = (e: MouseEvent) => {
      if (!cursorRef.current) return;
      const target = e.target as HTMLElement;
      const isCursorDisabled = target.closest("[data-cursor='disable']");
      if (isCursorDisabled) {
        cursorRef.current.classList.add("cursor-disable");
      } else {
        cursorRef.current.classList.remove("cursor-disable");
      }
      cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    document.addEventListener("mousemove", moveCursor);
    return () => document.removeEventListener("mousemove", moveCursor);
  }, []);

  return <div className="cursor-main" ref={cursorRef}></div>;
};

export default Cursor;
