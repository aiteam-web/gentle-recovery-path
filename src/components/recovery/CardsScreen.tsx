import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Bed, Pill, Apple, CalendarCheck } from "lucide-react";

interface Props {
  onDone: () => void;
}

const cards = [
  { icon: Bed, title: "Rest Without Guilt", desc: "Your body is working hard to heal. Allow yourself to rest as much as you need — avoid lifting, straining, or rushing back to your routine too soon." },
  { icon: Pill, title: "Follow Your Medication Schedule", desc: "Take all prescribed medications on time, including pain relief and antibiotics. Never skip a dose or stop early without checking with your doctor." },
  { icon: Apple, title: "Eat to Nourish and Rebuild", desc: "Focus on light, nutritious meals rich in protein and vitamins. Good nutrition speeds up tissue repair and gives your body the fuel it needs to heal." },
  { icon: CalendarCheck, title: "Attend All Follow-Up Appointments", desc: "Your follow-up visits allow your doctor to track your healing progress and catch any complications early. Never miss or delay these check-ins." },
];

const CardsScreen = ({ onDone }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "center" });
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  const progress = ((selected + 1) / cards.length) * 100;
  const isLast = selected === cards.length - 1;

  return (
    <div className="min-h-screen w-full bg-recovery-surface flex flex-col px-5 py-8 animate-in fade-in duration-300">
      {/* Progress bar */}
      <div className="w-full max-w-md mx-auto h-1.5 bg-[hsl(var(--recovery-card-border))] rounded-full overflow-hidden">
        <div
          className="h-full bg-recovery-gradient transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="text-center mt-8 mb-6">
        <h2 className="text-2xl font-bold text-[hsl(var(--recovery-blue-start))] mb-2">
          Steps to Support Your Recovery
        </h2>
        <p className="text-sm text-muted-foreground">
          Card {selected + 1} of {cards.length}
        </p>
      </div>

      {/* Carousel */}
      <div className="flex-1 flex items-center justify-center relative">
        {/* Stacked peek effect */}
        <div className="absolute inset-x-0 flex justify-center pointer-events-none">
          <div className="w-[88%] max-w-md h-[360px] bg-white rounded-3xl border border-recovery-card shadow-recovery-card opacity-40 scale-[0.94] translate-y-3" />
        </div>
        <div className="absolute inset-x-0 flex justify-center pointer-events-none">
          <div className="w-[92%] max-w-md h-[360px] bg-white rounded-3xl border border-recovery-card shadow-recovery-card opacity-70 scale-[0.97] translate-y-1.5" />
        </div>

        <div className="overflow-hidden w-full max-w-md mx-auto relative" ref={emblaRef}>
          <div className="flex">
            {cards.map((c, i) => {
              const Icon = c.icon;
              return (
                <div key={i} className="flex-[0_0_100%] min-w-0 px-2">
                  <div className="bg-white rounded-3xl border border-recovery-card shadow-recovery-card p-8 h-[360px] flex flex-col items-center justify-center text-center">
                    <div className="w-16 h-16 rounded-2xl bg-recovery-gradient flex items-center justify-center mb-6 shadow-recovery-button">
                      <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                    </div>
                    <h3 className="text-xl font-bold text-[hsl(var(--recovery-blue-start))] mb-3">
                      {c.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {c.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {cards.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            aria-label={`Go to card ${i + 1}`}
            className={`h-2 rounded-full transition-all ${
              i === selected
                ? "w-6 bg-recovery-gradient"
                : "w-2 bg-[hsl(var(--recovery-card-border))]"
            }`}
          />
        ))}
      </div>

      {/* Done button */}
      <div className="flex justify-center pt-6 pb-2 min-h-[72px]">
        {isLast && (
          <button
            onClick={onDone}
            className="bg-recovery-gradient text-white font-semibold px-10 py-4 rounded-full shadow-recovery-button hover:scale-[1.02] active:scale-[0.98] transition-transform animate-in fade-in slide-in-from-bottom-2 duration-300"
          >
            Done
          </button>
        )}
      </div>
    </div>
  );
};

export default CardsScreen;
