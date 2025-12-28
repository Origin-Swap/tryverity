import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Background Decor (Gradients similar to reference) */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/4 w-[800px] h-[800px] bg-purple-100/50 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Text Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold uppercase tracking-wide border border-indigo-100">
              <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></span>
              Practice Mode Live
            </div>

            <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
              Predict. Practice. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                Prove Your Skill.
              </span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
              Start predicting crypto markets without risking money on day one.
              A practice-first SocialFi platform where reputation unlocks access.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition shadow-xl shadow-indigo-200">
                Start Free
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-4 rounded-full font-semibold text-lg transition">
                View Leaderboard
              </button>
            </div>

            <p className="text-sm text-slate-500 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              No deposits · No promises · Skill-based participation
            </p>
          </div>

          {/* Visual (Abstract Dashboard similar to Stock.ai image) */}
          <div className="relative">
            <div className="relative bg-white border border-slate-200 rounded-3xl shadow-2xl p-6 transform rotate-1 hover:rotate-0 transition duration-500">
              {/* Fake UI elements to mimic dashboard */}
              <div className="flex items-center justify-between mb-8">
                <div className="space-y-1">
                  <div className="h-2 w-24 bg-slate-200 rounded"></div>
                  <div className="h-8 w-48 bg-slate-900 rounded"></div>
                </div>
                <div className="h-10 w-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                </div>
              </div>

              {/* Chart Placeholder */}
              <div className="h-48 bg-gradient-to-b from-indigo-50 to-white rounded-xl border border-indigo-50 border-dashed mb-6 flex items-end justify-between px-4 pb-4">
                 {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                   <div key={i} style={{height: `${h}%`}} className="w-8 bg-indigo-500/80 rounded-t-md hover:bg-indigo-600 transition-all cursor-pointer"></div>
                 ))}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 rounded-xl">
                  <div className="text-xs text-slate-500 mb-1">Accuracy Score</div>
                  <div className="text-2xl font-bold text-slate-900">87.4%</div>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl">
                  <div className="text-xs text-slate-500 mb-1">Global Rank</div>
                  <div className="text-2xl font-bold text-slate-900">#42</div>
                </div>
              </div>
            </div>

            {/* Floating Card Element */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 animate-bounce" style={{animationDuration: '3s'}}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <span className="font-bold">✓</span>
                </div>
                <div>
                  <div className="text-xs text-slate-500">Prediction Result</div>
                  <div className="text-sm font-bold text-slate-900">Correct +15 Rep</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
