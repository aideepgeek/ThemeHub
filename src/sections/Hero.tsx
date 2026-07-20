import { ArrowDown, Sparkles, Star, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  const stats = [
    { value: '100+', label: 'Free Themes', icon: Sparkles },
    { value: '50K+', label: 'GitHub Stars', icon: Star },
    { value: '3', label: 'Platforms', icon: Zap },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/20 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(slate-900 1px, transparent 1px), linear-gradient(90deg, slate-900 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 mb-8">
          <Sparkles className="w-4 h-4 text-indigo-600" />
          <span className="text-sm font-medium text-indigo-700">
            Curated GitHub Pages Themes
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight mb-6">
          Discover Free Themes for{' '}
          <span className="relative inline-block">
            <span className="relative z-10 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              GitHub Pages
            </span>
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 300 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M2 10C50 4 100 4 150 6C200 8 250 4 298 2"
                stroke="url(#gradient)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="300" y2="0">
                  <stop stopColor="#6366f1" />
                  <stop offset="1" stopColor="#a855f7" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          Browse the best hand-picked themes for{' '}
          <a href="#themes" className="text-indigo-600 hover:text-indigo-700 font-medium underline underline-offset-4 decoration-indigo-300 hover:decoration-indigo-500 transition-all">
            Jekyll
          </a>
          ,{' '}
          <a href="#themes" className="text-pink-600 hover:text-pink-700 font-medium underline underline-offset-4 decoration-pink-300 hover:decoration-pink-500 transition-all">
            Hugo
          </a>
          , and{' '}
          <a href="#themes" className="text-amber-600 hover:text-amber-700 font-medium underline underline-offset-4 decoration-amber-300 hover:decoration-amber-500 transition-all">
            Octopress
          </a>
          . Filter by platform, sort by stars, and find your perfect site design.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a href="#themes">
            <Button 
              size="lg" 
              className="gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all"
            >
              <Sparkles className="w-5 h-5" />
              Browse Themes
            </Button>
          </a>
          <a
            href="https://github.com/search?q=github+pages+theme"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="lg" className="gap-2">
              <Star className="w-5 h-5" />
              Explore on GitHub
            </Button>
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                <stat.icon className="w-5 h-5 text-indigo-600" />
              </div>
              <div className="text-left">
                <div className="text-xl sm:text-2xl font-bold text-slate-900">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-500">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#themes" className="flex flex-col items-center gap-2 text-slate-400 hover:text-slate-600 transition-colors">
            <span className="text-xs font-medium">Scroll to explore</span>
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
