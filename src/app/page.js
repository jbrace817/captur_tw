import Image from 'next/image';
import { Raleway } from 'next/font/google';
const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

export default function Home() {
  return <div className="">test</div>;
}
