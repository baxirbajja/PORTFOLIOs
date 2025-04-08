import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedWorks from './components/FeaturedWorks';
import BlogPosts from './components/BlogPosts';
import Contact from './components/Contact';

function App() {
  return (
    <main className="min-h-screen bg-dark text-white">
      <Navbar />
      <Hero />
      <About />
      <FeaturedWorks />
      <BlogPosts />
      <Contact />
    </main>
  );
}

export default App
