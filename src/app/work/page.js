'use client';
import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';

function Work() {
  return (
    <div>
      <Hero
        heading="My Work"
        message="This is some of my recent work from traveling the world."
      />
      <Portfolio />
    </div>
  );
}

export default Work;
