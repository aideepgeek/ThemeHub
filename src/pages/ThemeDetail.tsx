import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Github, 
  ExternalLink, 
  Star, 
  Calendar, 
  Tag, 
  Check,
  Sparkles,
  Globe
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { themes, platformLabels } from '@/data/themes';
import { Navbar } from '../sections/Navbar';
import { Footer } from '../sections/Footer';

export function ThemeDetail() {
  const { themeId } = useParams<{ themeId: string }>();
  const navigate = useNavigate();
  
  const theme = themes.find(t => t.id === themeId);
  
  if (!theme) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Theme not found</h1>
          <Button onClick={() => navigate('/')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  const platform = platformLabels[theme.platform];
  
  const formatStars = (stars: number) => {
    if (stars >= 1000) {
      return `${(stars / 1000).toFixed(1)}k`;
    }
    return stars.toString();
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <><Navbar />
    <main className="relative mt-16">

      {/* Hero Section */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
            {/* Left: Info */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <Badge 
                  className={`${platform.bgColor} ${platform.textColor} border ${platform.borderColor} font-medium`}
                >
                  {platform.label}
                </Badge>
                <div className="flex items-center gap-1 text-amber-500">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-sm font-semibold text-slate-700">
                    {formatStars(theme.stars)} stars
                  </span>
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                {theme.name}
              </h1>
              
              <p className="text-lg text-slate-600 mb-6 max-w-2xl">
                {theme.longDescription || theme.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                {theme.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 text-sm font-medium"
                  >
                    <Tag className="w-3.5 h-3.5" />
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 text-sm text-slate-500 mb-8">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  <span>Last updated {formatDate(theme.lastUpdated)}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={theme.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="gap-2 bg-slate-900 hover:bg-slate-800">
                    <Github className="w-5 h-5" />
                    View on GitHub
                  </Button>
                </a>
                {theme.previewUrl && (
                  <a
                    href="#preview"
                    rel="noopener noreferrer"
                  >
                    <Button size="lg" variant="outline" className="gap-2">
                      <Globe className="w-5 h-5" />
                      Live Preview
                    </Button>
                  </a>
                )}
                  <a
                    href="#related"
                    rel="noopener noreferrer"
                  >
                    <Button size="lg" variant="outline" className="gap-2">
                      <Sparkles className="w-5 h-5" />
                      Similar Themes
                    </Button>
                  </a>
              </div>
            </div>

            {/* Right: Preview Image */}
            {theme.image ? (
              <div className="lg:w-[400px] shrink-0">
                <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                  <img 
                    src={theme.image} 
                    alt={theme.name}
                    className="w-full h-auto object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>
              </div>
            ) : (
              <div className="lg:w-[400px] shrink-0">
                <div 
                  className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 h-[250px] flex items-center justify-center"
                  style={{ backgroundColor: platform.color + '10' }}
                >
                  <div className="text-center">
                    <div 
                      className="w-20 h-20 mx-auto mb-3 rounded-2xl flex items-center justify-center text-3xl font-bold"
                      style={{ 
                        backgroundColor: platform.color + '20',
                        color: platform.color 
                      }}
                    >
                      {theme.name.charAt(0)}
                    </div>
                    <span className="text-slate-500 font-medium">{theme.name}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      {theme.features && theme.features.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {theme.features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-200"
                >
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-slate-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Full Preview Section */}
      {theme.previewUrl && (
        <section id="preview" className="py-16 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-slate-900">Live Preview</h2>
              <a
                href={theme.previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-700 font-medium inline-flex items-center gap-1"
              >
                Open in new tab
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-slate-100">
              <div className="bg-slate-800 px-4 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-slate-700 rounded-md px-3 py-1.5 text-sm text-slate-300 truncate">
                    {theme.previewUrl}
                  </div>
                </div>
              </div>
              <iframe
                src={theme.previewUrl}
                className="w-full h-[600px] bg-white"
                title={`${theme.name} Preview`}
                sandbox="allow-same-origin allow-scripts"
              />
            </div>
          </div>
        </section>
      )}

      {/* Related Themes */}
      <section id="related" className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Similar Themes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {themes
              .filter(t => t.platform === theme.platform && t.id !== theme.id)
              .slice(0, 4)
              .map(relatedTheme => (
                <button
                  key={relatedTheme.id}
                  onClick={() => navigate(`/theme/${relatedTheme.id}`)}
                  className="text-left group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg hover:border-slate-300 transition-all"
                >
                  <div className="h-32 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                    {relatedTheme.image ? (
                      <img 
                        src={relatedTheme.image} 
                        alt={relatedTheme.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold"
                        style={{ 
                          backgroundColor: platform.color + '15',
                          color: platform.color 
                        }}
                      >
                        {relatedTheme.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
                      {relatedTheme.name}
                    </h3>
                    <p className="text-sm text-slate-500 mt-1 line-clamp-1">
                      {relatedTheme.description}
                    </p>
                  </div>
                </button>
              ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
}
