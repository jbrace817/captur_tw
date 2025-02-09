import Image from 'next/legacy/image';
import { FaInstagram } from 'react-icons/fa';
function InstagramImg({ socialImg }) {
  return (
    <div className="relative">
      <Image
        src={socialImg}
        alt="/"
        className="w-full h-full"
        layout="responsive"
      />
      {/* Overlay */}
      <div className="flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/50 group">
        <p className="text-gray-300 hidden group-hover:block ">
          <FaInstagram size={30} />
        </p>
      </div>
    </div>
  );
}

export default InstagramImg;
