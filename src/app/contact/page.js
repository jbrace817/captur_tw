import Contact from '@/components/Contact';
import Hero from '@/components/Hero';

function contact() {
  return (
    <div>
      <Hero
        heading="Contact"
        message="Submit the form below for more work and quotes."
      />
      <Contact />
    </div>
  );
}

export default contact;
