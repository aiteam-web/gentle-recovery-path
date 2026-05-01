import { useState } from "react";
import IntroScreen from "@/components/recovery/IntroScreen";
import CardsScreen from "@/components/recovery/CardsScreen";
import CompletionScreen from "@/components/recovery/CompletionScreen";

type Screen = "intro" | "cards" | "complete";

const Index = () => {
  const [screen, setScreen] = useState<Screen>("intro");

  const handleExit = () => {
    // No parent route — restart the activity.
    setScreen("intro");
  };

  return (
    <main className="min-h-screen w-full bg-recovery-surface">
      <div className="mx-auto w-full max-w-xl">
        {screen === "intro" && (
          <IntroScreen onBegin={() => setScreen("cards")} onBack={handleExit} />
        )}
        {screen === "cards" && <CardsScreen onDone={() => setScreen("complete")} />}
        {screen === "complete" && <CompletionScreen onHome={() => setScreen("intro")} />}
      </div>
    </main>
  );
};

export default Index;
