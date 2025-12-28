import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">
              P
            </div>
            <span className="font-bold text-xl tracking-tight">Try<span className="text-indigo-600">VERITY</span></span>
          </div>

          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
            <a href="#features" className="hover:text-indigo-600 transition">Features</a>
            <a href="#how-it-works" className="hover:text-indigo-600 transition">How it Works</a>
            <a href="#roadmap" className="hover:text-indigo-600 transition">Roadmap</a>
          </div>

          {/* CTA Button */}
          <div>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-full text-sm font-medium transition shadow-lg shadow-indigo-200">
              Start Practice Mode
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
