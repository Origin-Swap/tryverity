import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 md:px-14 text-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Ecosystem Line */}
        <div className="border-b border-slate-800 pb-12 mb-12 text-center">
           <p className="max-w-2xl mx-auto text-slate-400 mb-4">
             Designed to onboard new users into Web3 through learning and participation.
           </p>
           <div className="flex justify-center gap-4 text-xs font-mono text-indigo-400 uppercase tracking-widest">
              <span>EVM-Compatible</span>
              <span>•</span>
              <span>Chain-Agnostic</span>
           </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Start Free. Build Your Reputation.</h2>
          <p className="text-lg text-slate-400 mb-8">Practice predictions today and unlock access when you're ready.</p>
          <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-4 rounded-full font-bold text-lg transition shadow-lg shadow-indigo-900/50">
            Start Practice Mode
          </button>
        </div>

        {/* Legal/Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
             <div className="w-6 h-6 bg-slate-800 rounded flex items-center justify-center text-white font-bold text-xs">P</div>
             <span>© 2025 PredictFi. All rights reserved.</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer ;
