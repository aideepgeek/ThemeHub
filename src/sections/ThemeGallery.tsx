import { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, Star, LayoutGrid, List, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ThemeCard } from '@/components/ThemeCard';
import { Pagination } from '@/components/Pagination';
import { themes, platformLabels, sortOptions, tagOptions } from '@/data/themes';

const ITEMS_PER_PAGE = 12;

export function ThemeGallery() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState<string>('all');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<string>('stars-desc');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const platforms = [
    { value: 'all', label: 'All Platforms', count: themes.length },
    { value: 'jekyll', label: 'Jekyll', count: themes.filter(t => t.platform === 'jekyll').length },
    { value: 'hugo', label: 'Hugo', count: themes.filter(t => t.platform === 'hugo').length },
    { value: 'octopress', label: 'Octopress', count: themes.filter(t => t.platform === 'octopress').length },
  ];

  const filteredThemes = useMemo(() => {
    let result = [...themes];

    // Filter by platform
    if (selectedPlatform !== 'all') {
      result = result.filter((theme) => theme.platform === selectedPlatform);
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (theme) =>
          theme.name.toLowerCase().includes(query) ||
          theme.description.toLowerCase().includes(query) ||
          theme.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    // Filter by tags
    if (selectedTags.length > 0) {
      result = result.filter((theme) =>
        selectedTags.some((tag) => theme.tags.includes(tag))
      );
    }

    // Sort
    result.sort((a, b) => {
      switch (sortBy) {
        case 'stars-desc':
          return b.stars - a.stars;
        case 'stars-asc':
          return a.stars - b.stars;
        case 'name-asc':
          return a.name.localeCompare(b.name);
        case 'name-desc':
          return b.name.localeCompare(a.name);
        case 'updated-desc':
          return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime();
        case 'updated-asc':
          return new Date(a.lastUpdated).getTime() - new Date(b.lastUpdated).getTime();
        default:
          return 0;
      }
    });

    return result;
  }, [selectedPlatform, searchQuery, selectedTags, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredThemes.length / ITEMS_PER_PAGE);
  const paginatedThemes = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredThemes.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredThemes, currentPage]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
    setCurrentPage(1); // Reset to first page when filter changes
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedPlatform('all');
    setSelectedTags([]);
    setSortBy('stars-desc');
    setCurrentPage(1);
  };

  const handlePlatformChange = (platform: string) => {
    setSelectedPlatform(platform);
    setCurrentPage(1);
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const handleSortChange = (value: string) => {
    setSortBy(value);
    setCurrentPage(1);
  };

  const hasActiveFilters = searchQuery || selectedPlatform !== 'all' || selectedTags.length > 0;

  return (
    <section id="themes" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Browse Themes
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Discover the perfect theme for your GitHub Pages site. 
            Filter by platform, sort by popularity, and preview before you choose.
          </p>
        </div>

        {/* Controls Bar */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <Input
                placeholder="Search themes, tags, or descriptions..."
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="pl-10 h-11"
              />
            </div>

            {/* Platform Tabs (Desktop) */}
            <div className="hidden lg:flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
              {platforms.map((platform) => (
                <button
                  key={platform.value}
                  onClick={() => handlePlatformChange(platform.value)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedPlatform === platform.value
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {platform.label}
                  <span className="ml-2 text-xs text-slate-400">{platform.count}</span>
                </button>
              ))}
            </div>

            {/* Sort & View Toggle */}
            <div className="flex items-center gap-2">
              <Select value={sortBy} onValueChange={handleSortChange}>
                <SelectTrigger className="w-[160px] h-11">
                  <Star className="w-4 h-4 mr-2 text-slate-400" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <div className="flex items-center bg-slate-100 rounded-xl p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2.5 rounded-lg transition-all ${
                    viewMode === 'grid'
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-500 hover:text-slate-700'
                  }`}
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2.5 rounded-lg transition-all ${
                    viewMode === 'list'
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-500 hover:text-slate-700'
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>

              <Button
                variant="outline"
                size="icon"
                className={`h-11 w-11 lg:hidden ${showFilters ? 'bg-slate-100' : ''}`}
                onClick={() => setShowFilters(!showFilters)}
              >
                <SlidersHorizontal className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Mobile Platform Select */}
          <div className="lg:hidden mt-4 pt-4 border-t border-slate-100">
            <div className="flex flex-wrap gap-2">
              {platforms.map((platform) => (
                <button
                  key={platform.value}
                  onClick={() => handlePlatformChange(platform.value)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                    selectedPlatform === platform.value
                      ? 'bg-indigo-50 text-indigo-700 border border-indigo-200'
                      : 'bg-slate-100 text-slate-600 border border-transparent'
                  }`}
                >
                  {platform.label}
                  <span className="ml-1.5 text-xs opacity-60">{platform.count}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tag Filters */}
          {showFilters && (
            <div className="mt-4 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm font-medium text-slate-700">Filter by tags:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {tagOptions.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                      selectedTags.includes(tag)
                        ? 'bg-indigo-100 text-indigo-700 border border-indigo-200'
                        : 'bg-slate-100 text-slate-600 border border-transparent hover:bg-slate-200'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Active Filters */}
          {hasActiveFilters && (
            <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-3">
              <span className="text-sm text-slate-500">Active filters:</span>
              <div className="flex flex-wrap gap-2">
                {selectedPlatform !== 'all' && (
                  <Badge 
                    variant="secondary" 
                    className="gap-1 cursor-pointer hover:bg-slate-200"
                    onClick={() => setSelectedPlatform('all')}
                  >
                    {platformLabels[selectedPlatform as keyof typeof platformLabels]?.label}
                    <X className="w-3 h-3" />
                  </Badge>
                )}
                {selectedTags.map((tag) => (
                  <Badge 
                    key={tag}
                    variant="secondary" 
                    className="gap-1 cursor-pointer hover:bg-slate-200"
                    onClick={() => toggleTag(tag)}
                  >
                    {tag}
                    <X className="w-3 h-3" />
                  </Badge>
                ))}
                {searchQuery && (
                  <Badge 
                    variant="secondary" 
                    className="gap-1 cursor-pointer hover:bg-slate-200"
                    onClick={() => setSearchQuery('')}
                  >
                    Search: {searchQuery}
                    <X className="w-3 h-3" />
                  </Badge>
                )}
              </div>
              <button
                onClick={clearFilters}
                className="text-sm text-indigo-600 hover:text-indigo-700 font-medium ml-auto"
              >
                Clear all
              </button>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-slate-600">
            Showing <span className="font-semibold text-slate-900">{paginatedThemes.length}</span> of{' '}
            <span className="font-semibold text-slate-900">{filteredThemes.length}</span> themes
          </p>
          {totalPages > 1 && (
            <p className="text-sm text-slate-500">
              Page {currentPage} of {totalPages}
            </p>
          )}
        </div>

        {/* Themes Grid */}
        {filteredThemes.length > 0 ? (
          <>
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                : 'grid-cols-1'
            }`}>
              {paginatedThemes.map((theme) => (
                <ThemeCard key={theme.id} theme={theme} />
              ))}
            </div>
            
            {/* Pagination */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </>
        ) : (
          <div className="text-center py-20">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-slate-100 flex items-center justify-center">
              <Search className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              No themes found
            </h3>
            <p className="text-slate-600 mb-6">
              Try adjusting your filters or search query
            </p>
            <Button onClick={clearFilters} variant="outline">
              Clear all filters
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
