import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-[#01041C] md:px-14 pt-14 pb-20 lg:pt-16 lg:pb-28 overflow-hidden">
      {/* Background Decor (Gradients) */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/4 w-[800px] h-[800px] bg-purple-100/50 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 md:gap-12 items-center">

          {/* === LEFT COLUMN (Text & Buttons) === */}
          <div className="md:pt-8 text-center lg:text-left flex flex-col items-center lg:items-start">

            <div className="md:block hidden inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold uppercase tracking-wide border border-indigo-100">
              <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></span>
              Practice Mode Live
            </div>

            <h1 className="md:text-6xl pt-8 text-4xl font-extrabold tracking-tight bg-clip-text text-blue-500 leading-[1.1]">
              Predict. Practice. <br />
              <span className="text-transparent text-white">
                Prove Your Skill.
              </span>
            </h1>

            <p className="md:text-2xl text-lg font-semibold pt-4 text-slate-400 leading-relaxed max-w-lg">
              Practice first. Build skill. Earn access.
            </p>

            {/* --- MOBILE ONLY IMAGE (Visible on Phone, Hidden on PC) --- */}
            {/* Ini membuat urutan di HP menjadi: Teks -> Gambar -> Tombol */}
            <div className="relative flex lg:hidden justify-center items-center py-2 w-full">
                {/* Mobile Glow Effects */}
                <div className="absolute w-[200px] h-[200px] bg-yellow-300/40 rounded-full blur-2xl top-0 left-10 z-0" />
                <div className="absolute w-[200px] h-[200px] bg-blue-400/40 rounded-full blur-2xl bottom-0 right-10 z-0" />

                <img
                  src="/images/hero2.png"
                  alt="Hero Mobile"
                  className="relative z-10 max-w-[80%] sm:max-w-[60%] drop-shadow-2xl"
                />
            </div>

            {/* Buttons Area */}
            <div className="flex flex-col lg:flex-row gap-4 pt-2 lg:pt-6  sm:w-auto">
              <a
                href="https://app.tryverity.xyz"
                className="flex font-bold items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-12 py-2 rounded-full text-lg transition shadow-lg shadow-indigo-500/30 w-full sm:w-auto"
              >
                Start Free
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="https://app.tryverity.xyz/leaderboard"
                className="flex items-center justify-center gap-2 bg-white/0 hover:bg-slate-50 text-slate-200 border border-slate-200 px-12 py-2 rounded-full font-bold text-lg transition w-full sm:w-auto"
              >
                Read Docs
              </a>
            </div>

            <p className="text-sm text-slate-500 flex pt-6 items-center gap-2">
              <ShieldCheck className="md:block hidden w-4 h-4 text-emerald-500" />
              No deposits · No promises · Skill-based participation
            </p>
          </div>

          {/* === RIGHT COLUMN (PC Only Image) === */}
          {/* hidden lg:flex memastikan ini HILANG di HP dan MUNCUL di PC */}
          <div className="relative hidden lg:flex justify-center items-center">

            {/* Yellow Blur */}
            <div className="absolute w-[420px] h-[420px] bg-yellow-300/60 rounded-full blur-3xl -top-20 -left-16 z-0" />

            {/* Blue Blur */}
            <div className="absolute w-[420px] h-[420px] bg-blue-400/60 rounded-full blur-3xl -bottom-20 -right-16 z-0" />

            {/* Image */}
            <div className="relative z-10 p-6 transform rotate-1 hover:rotate-0 transition duration-500">
              <img
                src="/images/hero2.png"
                alt="Hero Dashboard"
                className="max-w-full"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
