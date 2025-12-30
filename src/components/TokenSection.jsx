import React from 'react';
import { AlertCircle } from 'lucide-react';

const TokenSection = () => {
  return (
    <section className="relative md:px-14 py-24 bg-[#01041C] overflow-hidden">

      {/* Ambient blue light */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[160px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* TEXT */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-indigo-500/10 text-indigo-300 text-xs font-semibold uppercase border border-indigo-500/20">
              <AlertCircle className="w-4 h-4" />
              Token Utility
            </div>

            <h3 className="text-3xl font-extrabold text-white leading-tight">
              Tokens Are Used Only<br className="hidden sm:block" /> When You Go Real
            </h3>

            <p className="text-lg text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
              The platform token is required only to access real prediction pools.
              Practice mode is always free and does not require tokens.
            </p>

            <div className="rounded-xl border border-white/10 bg-white/5 p-5 text-slate-300 text-sm">
              Tokens do not guarantee profits, generate yield, or affect outcomes.
              Results depend entirely on user skill.
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative flex justify-center lg:justify-end">

            {/* Image glow */}
            <div className="absolute w-[360px] h-[360px] bg-indigo-500/20 rounded-full blur-[140px]" />

            <img
              src="/images/image4.png"
              alt="Token Utility Visual"
              className="relative z-10 max-w-full rounded-2xl"
            />

          </div>

        </div>
      </div>
    </section>
  );
};

export default TokenSection;
