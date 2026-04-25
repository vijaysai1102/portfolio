import { Suspense, lazy } from "react";
import { LoadingProvider } from "./context/LoadingProvider";
import MainContainer from "./components/MainContainer";

const AIScene = lazy(() => import("./components/AIScene"));

export default function App() {
  return (
    <LoadingProvider>
      <Suspense fallback={null}>
        <MainContainer>
          <Suspense fallback={null}>
            <AIScene />
          </Suspense>
        </MainContainer>
      </Suspense>
    </LoadingProvider>
  );
}
