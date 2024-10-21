import Image from 'next/image';
import { Raleway } from 'next/font/google';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <div className="">
      <Hero
        heading="Captur Photography"
        message="I capture moments in nature and keep them alive."
      />
    </div>
  );
}
