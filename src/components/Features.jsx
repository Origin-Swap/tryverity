import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Features = () => {
  return (
    <section id="features" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Live Today. <br />
              <span className="text-slate-500">What you can do right now.</span>
            </h2>

            <ul className="space-y-4 mb-8">
              {[
                "Predict BTC, ETH, and SOL market movements",
                "Appear on a public leaderboard instantly",
                "Build a public prediction profile",
                "No token required to start"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-indigo-600 shrink-0" />
                  <span className="text-slate-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>

            <div className="p-4 bg-indigo-50 border border-indigo-100 rounded-xl mb-6">
              <p className="text-indigo-900 font-medium">👉 You can try the platform in under a minute.</p>
            </div>

            <button className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-xl font-medium transition">
              Try Practice Mode
            </button>
          </div>

          {/* Visual Placeholder for Feature Image */}
          <div className="order-1 lg:order-2 bg-white p-2 rounded-3xl shadow-xl border border-slate-200">
            <div className="aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center relative overflow-hidden">
               {/* Decorative Abstract UI */}
               <div className="absolute inset-0 flex items-center justify-center opacity-30">
                  <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-200 via-slate-100 to-slate-100"></div>
               </div>
               <span className="text-slate-400 font-medium z-10">Platform Interface Preview</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;
