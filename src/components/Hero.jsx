import { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    // Add a class to the body for the dark theme
    document.body.classList.add('bg-dark');
    return () => document.body.classList.remove('bg-dark');
  }, []);

  return (
    <section className="min-h-screen relative overflow-hidden pt-20">
      {/* Orange border frame */}
      <div className="absolute inset-4 border-2 border-primary rounded-3xl pointer-events-none" />
      
      {/* Floating 3D elements */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-primary/20 rounded animate-float delay-100" />
      <div className="absolute bottom-20 left-10 w-16 h-16 bg-primary/20 rounded animate-float delay-300" />
      <div className="absolute top-1/2 right-20 w-24 h-24 bg-primary/20 rounded animate-float delay-500" />

      <div className="max-w-7xl mx-auto px-4 py-20 flex flex-col lg:flex-row items-center justify-between">
        {/* Left side content */}
        <div className="lg:w-1/2 space-y-8 text-left">
          <div className="flex items-center space-x-4 text-white/80">
            <span className="w-8 h-[2px] bg-primary"></span>
            <span>Hello</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold text-white">
            I'm <span className="text-primary">Joseph Lawrence</span>
          </h1>
          
          <p className="text-xl text-white/80">
            A full stack developer based in Toronto.
          </p>
          
          <button className="px-8 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors">
            Learn more
          </button>

          {/* Social links */}
          <div className="flex space-x-6">
            <a href="#" className="text-white/60 hover:text-primary transition-colors">
              <span className="sr-only">Instagram</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
              </svg>
            </a>
            <a href="#" className="text-white/60 hover:text-primary transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Right side - 3D Character */}
        <div className="lg:w-1/2 mt-12 lg:mt-0 relative">
          <div className="relative w-full aspect-square">
            <img
              src="/3d-character.png"
              alt="3D Character"
              className="w-full h-full object-contain animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;