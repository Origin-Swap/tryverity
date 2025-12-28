import React from 'react';
import { AlertCircle } from 'lucide-react';

const TokenSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-indigo-900 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden shadow-2xl">
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-6 flex items-center justify-center gap-2">
              <AlertCircle className="w-6 h-6 text-indigo-300" />
              Important: The Token Utility
            </h3>

            <p className="text-lg md:text-xl text-indigo-100 leading-relaxed font-light mb-8">
              The platform token is required <span className="text-white font-semibold">only to access real prediction pools</span>.
              It is not used for practice, does not guarantee profits, and does not generate yield.
            </p>

            <div className="inline-block px-6 py-3 bg-white/10 rounded-lg border border-white/20">
              <p className="font-medium text-white">Outcomes depend entirely on user performance. <br/>Skill comes first. Access comes later.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenSection;
