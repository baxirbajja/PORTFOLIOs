const BlogPosts = () => {
  const posts = [
    {
      title: 'Black UI Front-end best practices',
      date: 'Mar 16, 2024',
      image: '/blog/black-ui.jpg',
      link: '#'
    },
    {
      title: 'Developing my first UI Style Guide',
      date: 'Mar 15, 2024',
      image: '/blog/style-guide.jpg',
      link: '#'
    },
    {
      title: 'Why I love a Dark Mode First Approach',
      date: 'Mar 14, 2024',
      image: '/blog/dark-mode.jpg',
      link: '#'
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12">Blog posts</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <a
              key={index}
              href={post.link}
              className="group block overflow-hidden rounded-xl bg-dark-lighter border border-dark-border hover:border-primary transition-colors"
            >
              {/* Post Image */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Post Info */}
              <div className="p-6 space-y-2">
                <span className="text-sm text-primary">{post.date}</span>
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;