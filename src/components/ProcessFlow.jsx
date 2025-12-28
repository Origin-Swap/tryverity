import React from 'react';

const ProcessFlow = () => {
  const steps = [
    {
      num: "01",
      title: "Start in Practice Mode",
      desc: "Begin immediately. No deposits required. Just connect and predict."
    },
    {
      num: "02",
      title: "Build Your Track Record",
      desc: "Every prediction is recorded on-chain. Your reputation becomes visible."
    },
    {
      num: "03",
      title: "Unlock Access",
      desc: "Better performance unlocks more features and higher tier pools."
    },
    {
      num: "04",
      title: "Participate",
      desc: "Tokens are used only when you choose to enter real prediction pools."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">How It Feels to Use</h2>
          <p className="text-xl text-slate-500">Simple progression. No pressure.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="relative p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="text-5xl font-black text-slate-200 mb-4 absolute top-4 right-4">{step.num}</div>
              <div className="relative z-10 pt-4">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;
