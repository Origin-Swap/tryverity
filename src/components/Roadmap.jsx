import React from 'react';

const Roadmap = () => {
  return (
    <section id="roadmap" className="relative py-24 bg-[#01041C] overflow-hidden">

      {/* Ambient glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-500/10 rounded-full blur-[160px]" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-extrabold text-white mb-10">
          Roadmap
        </h2>

        <div
          className="
            space-y-10 relative
            before:absolute before:inset-0
            before:ml-5 before:-translate-x-px
            md:before:mx-auto md:before:translate-x-0
            before:h-full before:w-0.5
            before:bg-gradient-to-b
            before:from-transparent
            before:via-indigo-400/70
            before:to-transparent
            before:shadow-[0_0_28px_rgba(99,102,241,0.5)]
          "
        >
          {[
            { status: "Now", title: "Practice Mode & Reputation", active: true },
            { status: "Next", title: "Token-based Access to Real Pools", active: false },
            { status: "Later", title: "More Assets, Community Pools, Multi-chain", active: false },
          ].map((item, i) => (
            <div
              key={i}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              {/* Dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-[#02062B] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <div
                  className={`w-3 h-3 rounded-full ${
                    item.active
                      ? 'bg-indigo-400 animate-pulse shadow-[0_0_14px_rgba(99,102,241,0.9)]'
                      : 'bg-slate-500'
                  }`}
                />
              </div>

              {/* Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <div className="font-semibold text-slate-200 mb-1">
                  {item.status}
                </div>
                <div className="text-slate-400 text-sm">
                  {item.title}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm text-slate-500">
          Milestones, not dates.
        </p>
      </div>
    </section>
  );
};

export default Roadmap;
