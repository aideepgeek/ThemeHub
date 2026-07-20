
export function About() {

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            About Us
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            ThemeHub is made by <a href="https://github.com/aideepgeek" className="text-indigo-600 hover:text-indigo-800 font-medium">DeepGeekAI</a> with ❤️ and with the help of <a href="https://www.kimi.com/" className="text-indigo-600 hover:text-indigo-800 font-medium">Kimi</a>. <br />
            See more about me on <a href="https://aideepgeek.github.io/about/" className="text-indigo-600 hover:text-indigo-800 font-medium">my personal page</a>.
          </p>
        </div>

      </div>
    </section>
  );
}
