import { Filter, Star, ExternalLink, Github, Sparkles, Zap, Shield } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Filter,
      title: 'Smart Filtering',
      description: 'Filter themes by platform, tags, and search queries to find exactly what you need.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Star,
      title: 'Star Ratings',
      description: 'Sort themes by GitHub stars to discover the most popular and community-loved options.',
      color: 'from-amber-500 to-orange-500',
    },
    {
      icon: ExternalLink,
      title: 'Live Previews',
      description: 'Preview themes before installing. See how they look with live demo links.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Github,
      title: 'GitHub Integration',
      description: 'Direct links to GitHub repositories for easy installation and customization.',
      color: 'from-slate-700 to-slate-900',
    },
    {
      icon: Sparkles,
      title: 'Curated Collection',
      description: 'Hand-picked themes for quality design, responsiveness, and modern best practices.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Shield,
      title: 'Free & Open Source',
      description: 'All themes are free to use and open source. No hidden costs or premium tiers.',
      color: 'from-indigo-500 to-violet-500',
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 mb-6">
            <Zap className="w-4 h-4 text-indigo-600" />
            <span className="text-sm font-medium text-indigo-700">
              Powerful Features
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Everything You Need
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            ThemeHub makes it easy to find the perfect theme for your GitHub Pages site 
            with powerful search, filtering, and preview capabilities.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Gradient */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
