import React from 'react';

const WhyUs = () => {
  const reasons = [
    { title: "Risk-Free Learning", desc: "Learn market prediction without risking capital." },
    { title: "Public Proof", desc: "Prove skill publicly with an immutable track record." },
    { title: "Fair Participation", desc: "Participate fairly, without influencer-driven hype." },
    { title: "Meritocracy", desc: "No deposit-first systems. Progression is skill-based." },
  ];

  return (
    <section className="relative md:px-14 py-24 bg-[#01041C] overflow-hidden">

      {/* Ambient glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-indigo-500/10 rounded-full blur-[180px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-14 text-center">
          Why People Use This Platform
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {reasons.map((item, i) => (
            <div
              key={i}
              className="flex gap-4 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition"
            >
              {/* Index */}
              <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0">
                <span className="text-indigo-300 font-bold text-lg">
                  {i + 1}
                </span>
              </div>

              {/* Text */}
              <div>
                <h3 className="font-semibold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
