import React from 'react';
import {
  PlayCircle,
  LineChart,
  Unlock,
  Coins
} from 'lucide-react';

const ProcessFlow = () => {
  const steps = [
    {
      icon: PlayCircle,
      color: "text-blue-400 bg-blue-400/10",
      title: "Start in Practice Mode",
      desc: "Begin immediately. No deposits required. Just connect and predict."
    },
    {
      icon: LineChart,
      color: "text-purple-400 bg-purple-400/10",
      title: "Build Your Track Record",
      desc: "Every prediction is recorded on-chain. Your reputation becomes visible."
    },
    {
      icon: Unlock,
      color: "text-emerald-400 bg-emerald-400/10",
      title: "Unlock Access",
      desc: "Better performance unlocks more features and higher tier pools."
    },
    {
      icon: Coins,
      color: "text-amber-400 bg-amber-400/10",
      title: "Participate",
      desc: "Tokens are used only when you choose to enter real prediction pools."
    }
  ];

  return (
    <section
      id="how-it-works"
      className="relative md:px-14 py-24 bg-[#01041C] overflow-hidden"
    >
      {/* Soft blue gradient wash */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#01041C] via-transparent to-transparent z-0" />

      {/* Blue glow */}
      <div className="pointer-events-none absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-500/15 rounded-full blur-[140px] z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            How It Feels to Use
          </h2>
          <p className="text-xl text-slate-400">
            Simple progression. No pressure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition"
              >

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${step.color}`}>
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-bold text-slate-200 mb-2">
                  {step.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ProcessFlow;
