import { ExternalLink, Github, Star, Calendar, Tag } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { platformLabels } from '@/data/themes';
import type { Theme } from '@/data/themes';

interface ThemeCardProps {
  theme: Theme;
}

export function ThemeCard({ theme }: ThemeCardProps) {
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
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className="group relative bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-300 transition-all duration-300">
      {/* Platform Badge */}
      <div className="absolute top-4 left-4 z-10">
        <Badge 
          className={`${platform.bgColor} ${platform.textColor} border ${platform.borderColor} font-medium text-xs px-2.5 py-1`}
        >
          {platform.label}
        </Badge>
      </div>

      {/* Preview Image Placeholder */}
      <div className="relative h-48 bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div 
              className="w-16 h-16 mx-auto mb-3 rounded-2xl flex items-center justify-center text-2xl font-bold"
              style={{ 
                backgroundColor: platform.color + '15',
                color: platform.color 
              }}
            >
              {theme.name.charAt(0)}
            </div>
            <span className="text-sm text-slate-500 font-medium">{theme.name}</span>
          </div>
        </div>
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          {theme.previewUrl && (
            <a
              href={theme.previewUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                size="sm" 
                variant="secondary"
                className="gap-2 bg-white/90 hover:bg-white text-slate-900"
              >
                <ExternalLink className="w-4 h-4" />
                Preview
              </Button>
            </a>
          )}
          <a
            href={theme.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              size="sm"
              className="gap-2 bg-indigo-600 hover:bg-indigo-700 text-white"
            >
              <Github className="w-4 h-4" />
              View Code
            </Button>
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title & Stars */}
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-semibold text-slate-900 text-lg leading-tight group-hover:text-indigo-600 transition-colors">
            {theme.name}
          </h3>
          <div className="flex items-center gap-1 text-amber-500 shrink-0">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm font-semibold text-slate-700">
              {formatStars(theme.stars)}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-600 text-sm mb-4 line-clamp-2">
          {theme.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {theme.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-xs font-medium"
            >
              <Tag className="w-3 h-3" />
              {tag}
            </span>
          ))}
          {theme.tags.length > 3 && (
            <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-500 text-xs">
              +{theme.tags.length - 3}
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <div className="flex items-center gap-1.5 text-slate-500 text-xs">
            <Calendar className="w-3.5 h-3.5" />
            <span>Updated {formatDate(theme.lastUpdated)}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <a
              href={theme.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-slate-700 transition-colors"
              title="View on GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            {theme.previewUrl && (
              <a
                href={theme.previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-slate-700 transition-colors"
                title="Live Preview"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
