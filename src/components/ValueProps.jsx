import React from 'react';
import { PlayCircle, Wallet, Trophy, BrainCircuit } from 'lucide-react';

const ValueProps = () => {
  const props = [
    { icon: <PlayCircle className="w-6 h-6 text-indigo-600" />, text: "Free practice mode" },
    { icon: <Wallet className="w-6 h-6 text-purple-600" />, text: "Wallet-based identity" },
    { icon: <Trophy className="w-6 h-6 text-orange-500" />, text: "Public leaderboard & profiles" },
    { icon: <BrainCircuit className="w-6 h-6 text-blue-500" />, text: "Skill-based access (not capital)" },
  ];

  return (
    <section className="py-10 border-y border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {props.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 justify-center md:justify-start">
              <div className="p-2 bg-slate-50 rounded-lg shrink-0">
                {item.icon}
              </div>
              <span className="font-medium text-slate-700">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
