import { Check } from "lucide-react";

interface Props {
  onHome: () => void;
}

const CompletionScreen = ({ onHome }: Props) => {
  return (
    <div className="min-h-screen w-full bg-recovery-surface flex flex-col items-center px-6 py-12 animate-in fade-in duration-300">
      <div className="flex-1 flex flex-col items-center justify-center text-center max-w-md w-full">
        <div className="w-24 h-24 rounded-full bg-recovery-gradient flex items-center justify-center mb-8 shadow-recovery-button">
          <Check className="w-12 h-12 text-white" strokeWidth={3} />
        </div>

        <h1 className="text-3xl font-bold text-[hsl(var(--recovery-blue-start))] mb-4">
          You're Doing Great!
        </h1>
        <p className="text-base text-muted-foreground leading-relaxed mb-8">
          Healing takes time, and every small step counts. Be patient with your body — you're on your way to a full recovery.
        </p>

        <div className="w-full bg-white rounded-2xl border border-recovery-card shadow-recovery-card p-6 text-left">
          <p className="text-xs font-semibold uppercase tracking-wider text-[hsl(var(--recovery-blue-start))] mb-4 text-center">
            Keep in Mind
          </p>
          <ul className="space-y-3">
            <li className="flex gap-3 text-sm text-foreground/80 leading-relaxed">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-recovery-gradient flex-shrink-0" />
              <span>Watch for warning signs like fever, redness, swelling, or unusual pain and report them to your doctor immediately.</span>
            </li>
            <li className="flex gap-3 text-sm text-foreground/80 leading-relaxed">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-recovery-gradient flex-shrink-0" />
              <span>Avoid driving or operating heavy machinery until your doctor gives you the clear.</span>
            </li>
          </ul>
        </div>
      </div>

      <button
        onClick={onHome}
        className="bg-recovery-gradient text-white font-semibold px-10 py-4 rounded-full shadow-recovery-button hover:scale-[1.02] active:scale-[0.98] transition-transform mt-8"
      >
        Back to Home
      </button>
    </div>
  );
};

export default CompletionScreen;
