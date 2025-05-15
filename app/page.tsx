import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Projects from '@/components/sections/projects';
import Experience from '@/components/sections/experience';
import Contact from '@/components/sections/contact';
import LatestWork from '@/components/sections/latest-work';

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20 py-16">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <LatestWork />
      <Contact />
    </div>
  );
}