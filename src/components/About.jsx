const About = () => {
  return (
    <section className="py-20 relative">
      {/* Orange border frame */}
      <div className="absolute inset-4 border-2 border-primary rounded-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 border-2 border-primary rounded-xl transform translate-x-4 translate-y-4" />
              <img
                src="/profile.jpg"
                alt="Profile"
                className="relative z-10 w-full h-auto rounded-xl"
              />
            </div>
          </div>

          {/* About Content */}
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold text-white">About me</h2>
            
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">
                I will <span className="text-primary">Design & Develop</span> the best websites
              </h3>
              <p className="text-white/70 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            {/* Skills Icons */}
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 pt-6">
              {[
                { icon: '/icons/html5.svg', name: 'HTML5' },
                { icon: '/icons/css3.svg', name: 'CSS3' },
                { icon: '/icons/javascript.svg', name: 'JavaScript' },
                { icon: '/icons/react.svg', name: 'React' },
                { icon: '/icons/node.svg', name: 'Node.js' },
                { icon: '/icons/wordpress.svg', name: 'WordPress' }
              ].map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center p-4 bg-dark-lighter rounded-lg hover:bg-primary/10 transition-colors"
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-12 h-12 mb-2"
                  />
                  <span className="text-sm text-white/70">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;