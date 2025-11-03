export const Features = () => {
  const featuresData = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-purple-500 size-8 mt-4"
        >
          <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
        </svg>
      ),
      title: "Lightning-fast setup",
      description:
        "Launch production-ready pages in minutes with prebuilt components.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-purple-500 size-8 mt-4"
        >
          <path d="M7 10v12" />
          <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" />
        </svg>
      ),
      title: "Pixel perfect",
      description: "Modern Figma-driven UI that translates to exact code.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-purple-500 size-8 mt-4"
        >
          <path d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <circle cx="17.5" cy="17.5" r="3.5" />
        </svg>
      ),
      title: "Highly customizable",
      description:
        "Tailwind utility-first classes make customization trivial.",
    },
  ];

  return (
    <section className="bg-black text-white py-16">
      {/* Header */}
      <div className="text-center">
        <p className="text-purple-400 px-10 py-1.5 rounded-full bg-purple-950/30 border border-purple-800 w-max mx-auto">
          Features
        </p>
        <h2 className="text-3xl font-semibold mt-4 bg-linear-to-r from-white to-purple-400 text-transparent bg-clip-text">
          Built for builders
        </h2>
        <p className="mt-2 text-slate-400 max-w-xl mx-auto">
          Components, patterns, and pages — everything you need to ship.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="flex flex-wrap items-center justify-center gap-8 mt-14 px-6">
        {featuresData.map((feature, index) => (
          <div
            key={index}
            className="group relative bg-[#0b0b0b] border border-slate-800 hover:border-purple-600 rounded-2xl p-6 max-w-80 w-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(168,85,247,0.3)]"
          >
            {/* Accent Glow on hover */}
            <div className="absolute inset-0 bg-linear-to-br from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>

            <div className="relative z-10 space-y-4">
              {feature.icon}
              <h3 className="text-lg font-medium text-white">
                {feature.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
