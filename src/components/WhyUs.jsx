import React from 'react';

const WhyUs = () => {
  const reasons = [
    { title: "Risk-Free Learning", desc: "To learn market prediction without risking capital." },
    { title: "Public Proof", desc: "To prove skill publicly with an immutable track record." },
    { title: "Fair Participation", desc: "To participate fairly, without influencer hype mechanics." },
    { title: "Meritocracy", desc: "To avoid 'deposit-first' platforms. This is a progression system." },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Why People Use This Platform</h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {reasons.map((item, i) => (
            <div key={i} className="flex gap-4 p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
               <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center shrink-0">
                  <span className="text-indigo-600 font-bold text-lg">{i+1}</span>
               </div>
               <div>
                 <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                 <p className="text-slate-600">{item.desc}</p>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
