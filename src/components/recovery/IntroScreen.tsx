import { ArrowLeft, HeartPulse } from "lucide-react";

interface Props {
  onBegin: () => void;
  onBack: () => void;
}

const IntroScreen = ({ onBegin, onBack }: Props) => {
  return (
    <div className="min-h-screen w-full bg-recovery-gradient flex flex-col px-6 py-8 animate-in fade-in duration-300">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-soft-white hover:text-white transition-colors self-start"
        aria-label="Exit activity"
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="text-sm font-medium">Back</span>
      </button>

      <div className="flex-1 flex flex-col items-center justify-center text-center max-w-md mx-auto">
        <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-8 ring-1 ring-white/30">
          <HeartPulse className="w-11 h-11 text-white" strokeWidth={2} />
        </div>
        <h1 className="text-3xl font-bold text-white mb-4 leading-tight">
          Post Surgery Recovery Activity
        </h1>
        <p className="text-soft-white text-base leading-relaxed">
          Surgery is behind you — now it's time to focus on healing. Let's guide you through simple steps to regain your strength and feel like yourself again.
        </p>
      </div>

      <div className="flex justify-center pb-4">
        <button
          onClick={onBegin}
          className="bg-white text-[hsl(var(--recovery-blue-start))] font-semibold px-10 py-4 rounded-full shadow-recovery-button hover:scale-[1.02] active:scale-[0.98] transition-transform"
        >
          Let's Begin
        </button>
      </div>
    </div>
  );
};

export default IntroScreen;
