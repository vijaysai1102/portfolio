import { useEffect, useState } from "react";
import { useLoading } from "../context/LoadingProvider";
import "./styles/Loading.css";

interface LoadingProps {
  percent: number;
}

const Loading = ({ percent }: LoadingProps) => {
  const { setIsLoading } = useLoading();
  const [loaded, setLoaded] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (percent >= 100) {
      setTimeout(() => {
        setLoaded(true);
        setTimeout(() => {
          setDone(true);
          setTimeout(() => setIsLoading(false), 600);
        }, 800);
      }, 400);
    }
  }, [percent, setIsLoading]);

  if (done) return null;

  return (
    <div className={`loading-wrapper${loaded ? " loading-out" : ""}`}>
      <div className="loading-bg"></div>
      <div className="loading-content">
        <div className="loading-name">
          <span>V</span>
          <span>I</span>
          <span>J</span>
          <span>A</span>
          <span>Y</span>
        </div>
        <div className="loading-bar-wrap">
          <div
            className="loading-bar"
            style={{ width: `${percent}%` }}
          ></div>
        </div>
        <p className="loading-label">ML Researcher &amp; Data Engineer</p>
      </div>
    </div>
  );
};

type ProgressCallback = (value: number) => void;

export function setProgress(onUpdate: ProgressCallback) {
  let value = 0;
  const interval = setInterval(() => {
    value += Math.random() * 8 + 2;
    if (value > 90) value = 90;
    onUpdate(Math.floor(value));
  }, 120);

  return {
    loaded: () =>
      new Promise<void>((resolve) => {
        clearInterval(interval);
        onUpdate(100);
        setTimeout(resolve, 300);
      }),
  };
}

export default Loading;
