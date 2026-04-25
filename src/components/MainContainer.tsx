import { lazy, PropsWithChildren, Suspense, useEffect, useState } from "react";
import Navbar from "./Navbar";
import Landing from "./Landing";
import About from "./About";
import Career from "./Career";
import WhatIDo from "./WhatIDo";
import Work from "./Work";
import Contact from "./Contact";
import SocialIcons from "./SocialIcons";
import Cursor from "./Cursor";

const TechStack = lazy(() => import("./TechStack"));

const MainContainer = ({ children }: PropsWithChildren) => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);

  useEffect(() => {
    const handle = () => setIsDesktop(window.innerWidth > 1024);
    window.addEventListener("resize", handle);
    return () => window.removeEventListener("resize", handle);
  }, []);

  return (
    <>
      <Cursor />
      <div className="smooth-wrapper">
        <div className="smooth-content">
          <Navbar />
          <SocialIcons />
          <Landing>
            {!isDesktop && (
              <>
                <About />
                <Career />
                <WhatIDo />
                <Work />
                <Contact />
              </>
            )}
          </Landing>
          {isDesktop && (
            <>
              <About />
              <Career />
              <WhatIDo />
              <Work />
              <Suspense fallback={null}>
                <TechStack />
              </Suspense>
              <Contact />
            </>
          )}
        </div>
      </div>
      {children}
    </>
  );
};

export default MainContainer;
