import React from 'react';

const Roadmap = () => {
  return (
    <section id="roadmap" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">Roadmap</h2>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
          {[
            { status: "Now", title: "Practice Mode & Reputation", active: true },
            { status: "Next", title: "Token-based Access to Real Pools", active: false },
            { status: "Later", title: "More Assets, Community Pools, Multi-chain", active: false },
          ].map((item, i) => (
            <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                 <div className={`w-3 h-3 rounded-full ${item.active ? 'bg-indigo-600 animate-pulse' : 'bg-slate-300'}`}></div>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-100 bg-white shadow-sm">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <div className="font-bold text-slate-900">{item.status}</div>
                </div>
                <div className="text-slate-500">{item.title}</div>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-slate-400">Milestones, not dates.</p>
      </div>
    </section>
  );
};


export default Roadmap; // Export both if in same file or separate
