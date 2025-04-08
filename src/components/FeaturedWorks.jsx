const FeaturedWorks = () => {
  const works = [
    {
      title: 'Brandon F.',
      description: 'A Toronto based Multimedia Producer',
      image: '/works/brandon-f.jpg',
      link: '#'
    },
    {
      title: 'Toned Magazine',
      description: 'A publication committed to Black Creatives',
      image: '/works/toned-magazine.jpg',
      link: '#'
    },
    {
      title: 'In The Mood',
      description: 'Film recommendation generator',
      image: '/works/in-the-mood.jpg',
      link: '#'
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12">Featured Works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-dark-lighter border border-dark-border hover:border-primary transition-colors"
            >
              {/* Project Image */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-2">
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                  {work.title}
                </h3>
                <p className="text-white/70">{work.description}</p>
                
                {/* View Link */}
                <a
                  href={work.link}
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mt-4"
                >
                  <span>View Live</span>
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorks;