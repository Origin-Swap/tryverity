import React from 'react';
import { PlayCircle, Wallet, Trophy, BrainCircuit } from 'lucide-react';

const ValueProps = () => {
  const props = [
    {
      icon: <PlayCircle className="w-6 h-6 text-indigo-400" />,
      text: "Free practice mode"
    },
    {
      icon: <Wallet className="w-6 h-6 text-purple-400" />,
      text: "Wallet-based identity"
    },
    {
      icon: <Trophy className="w-6 h-6 text-amber-400" />,
      text: "Public leaderboard & profiles"
    },
    {
      icon: <BrainCircuit className="w-6 h-6 text-blue-400" />,
      text: "Skill-based access (not capital)"
    },
  ];

  return (
    <section className="relative py-12 border-y border-white/10 bg-[#01041C]">

      {/* subtle divider glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {props.map((item, idx) => (
            <div
              key={idx}
              className="
                flex flex-col md:flex-row
                items-center md:items-center
                gap-3
                text-center md:text-left
              "
            >
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                {item.icon}
              </div>

              <span className="font-medium text-slate-300 text-sm leading-tight">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
