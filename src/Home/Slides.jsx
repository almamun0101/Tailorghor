import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "./banner.jpg",
  "https://source.unsplash.com/random/800x400?city",
  "https://source.unsplash.com/random/800x400?technology",
];

export default function Slides() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-screen m-10 max-w-3xl mx-auto overflow-hidden rounded-2xl shadow-lg">
      <div className="relative w-full h-30">
        <AnimatePresence>
          <motion.img
            key={images[index]}
            src={images[index]}
            alt="Slideshow"
            className="absolute w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>
      </div>
      <div className="flex justify-center space-x-2 mt-2">
        {images.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full ${index === i ? 'bg-gray-800' : 'bg-gray-400'}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
