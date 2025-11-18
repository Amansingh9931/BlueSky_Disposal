import React from "react";
import { motion } from "framer-motion";
import ImageWithFallback from "../../components/ImageWithFallback";

const Hero = () => {
  return (
    <div className="min-h-screen w-full">
      {/* PREMIUM HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image with Parallax + Zoom */}
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1600"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Dual Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-black/30"></div>
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>

        {/* Floating soft particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.span
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -40, 0],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        {/* HERO CONTENT */}
        <div className="relative z-10 h-full flex items-center justify-center px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="inline-block px-5 py-2 rounded-full bg-white/20 backdrop-blur-md text-sm uppercase tracking-widest"
            >
              Women-Owned • Michigan Proud
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-4xl md:text-6xl font-extrabold mt-6 leading-tight"
            >
              About <span className="text-sky-400">Blue Sky Disposal</span>
            </motion.h1>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "180px" }}
              transition={{ delay: 1, duration: 0.6 }}
              className="h-[3px] bg-sky-400 mx-auto mt-4"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="mt-6 text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
            >
              Empowering Michigan with affordable, reliable, and eco-friendly
              dumpster rentals.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="mt-4 text-3xl md:text-5xl font-semibold text-white"
            >
              Women-Led Company
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
              className="mt-4 text-xl text-gray-200"
            >
              Book your dumpster with a business that values honesty, speed, and
              community impact.
            </motion.p>
          </motion.div>
        </div>

        {/* Bottom Curved Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0 rotate-180">
          <svg
            className="relative block w-full h-20"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            viewBox="0 0 1200 120"
          >
            <path d="M1200 0L0 0 892.25 114.72 1200 0z" fill="#ffffff"></path>
          </svg>
        </div>
      </section>

      {/* Simple & Elegant Quote Section */}
      <section className="relative py-24 px-4 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          {/* Soft Watermark */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.05] pointer-events-none">
            <div className="w-80 h-80 rounded-full bg-green-200"></div>
          </div>

          {/* Quote */}
          <h2 className="relative font-serif text-4xl md:text-5xl italic leading-tight text-gray-800 mb-6">
            "The greatest threat to our planet is the belief that someone else
            will save it."
          </h2>

          {/* Author */}
          <p className="relative text-xl text-gray-600 tracking-wide">
            — Robert Swan
          </p>
        </div>
      </section>
    </div>
  );
};

export default Hero;
