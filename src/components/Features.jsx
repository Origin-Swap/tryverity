import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Features = () => {
  return (
    <section id="features" className="md:px-14 py-24 bg-[#01041C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold text-yellow-300 mb-6">
              Live Today. <br />
              <span className="text-blue-500">What you can do right now.</span>
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
                  <span className="text-slate-200 text-lg">{item}</span>
                </li>
              ))}
            </ul>

            <div className="p-4 bg-white/10 shadow-sm shadow-slate-200 rounded-xl mb-6">
              <p className="text-indigo-200 font-medium">👉 You can try the platform in under a minute.</p>
            </div>

            <button className="bg-white/0 border-2 border-blue-600 hover:bg-slate-800 text-white px-6 py-3 rounded-xl font-medium transition">
              Try Practice Mode
            </button>
          </div>

          {/* Visual Placeholder for Feature Image */}
          <div className="order-1 p-2 rounded-3xl shadow-xl">
            <div className="aspect-[3/3] flex items-center justify-center relative overflow-hidden">
               {/* Decorative Abstract UI */}
               <div className="absolute inset-0 flex items-center justify-center">
                <img src="/images/image3.png" />
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;
