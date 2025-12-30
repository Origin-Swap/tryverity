import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-white/0 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <img src="/images/phone-logo.png" className="w-14 h-14" />
            <span className="md:block text-white hidden font-extrabold text-2xl tracking-tight">VERITY</span>
          </div>

          <div className="hidden md:flex border border-gray-50/50 rounded-2xl px-6 py-2 space-x-8 text-lg font-medium text-slate-200">
            <a href="#features" className="hover:text-indigo-600 transition">Features</a>
            <a href="#how-it-works" className="hover:text-indigo-600 transition">How it Works</a>
            <a href="#roadmap" className="hover:text-indigo-600 transition">Roadmap</a>
          </div>

          {/* CTA Button */}
          <div>
            <a href="https://app.tryverity.xyz" className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-full text-sm font-medium transition shadow-sm shadow-indigo-200">
              Start Practice
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
