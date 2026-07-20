import { Heart, Github, Twitter, Sparkles, ExternalLink } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    platforms: [
      { label: 'Jekyll Themes', href: '#themes' },
      { label: 'Hugo Themes', href: '#themes' },
      { label: 'Octopress Themes', href: '#themes' },
    ],
    resources: [
      { label: 'GitHub Pages', href: 'https://pages.github.com', external: true },
      { label: 'Jekyll Docs', href: 'https://jekyllrb.com', external: true },
      { label: 'Hugo Docs', href: 'https://gohugo.io', external: true },
    ],
    about: [
      { label: 'Features', href: '#features' },
      { label: 'About Us', href: '#about' },
      { label: 'Submit Theme', href: 'https://github.com', external: true },
    ],
  };

  return (
    <footer id="about" className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl text-white">
                ThemeHub
              </span>
            </a>
            <p className="text-slate-400 mb-6 max-w-sm leading-relaxed">
              Discover the best free themes for GitHub Pages. 
              Curated, categorized, and ready to help you build 
              beautiful static sites.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Platforms */}
          <div>
            <h4 className="font-semibold text-white mb-4">Platforms</h4>
            <ul className="space-y-3">
              {footerLinks.platforms.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="text-slate-400 hover:text-white transition-colors inline-flex items-center gap-1"
                  >
                    {link.label}
                    {link.external && <ExternalLink className="w-3 h-3" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-semibold text-white mb-4">About</h4>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="text-slate-400 hover:text-white transition-colors inline-flex items-center gap-1"
                  >
                    {link.label}
                    {link.external && <ExternalLink className="w-3 h-3" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {currentYear} ThemeHub. All rights reserved.
          </p>
          <p className="text-sm text-slate-500 flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> for the GitHub Pages community
          </p>
        </div>
      </div>
    </footer>
  );
}
