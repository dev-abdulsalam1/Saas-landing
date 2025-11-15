import Product from "../assets/product-image.png";
import Pyramid from "../assets/pyramid.png";
import Tube from "../assets/tube.png";
import Image from "next/image";

export default function ProductShowcase  () {
  return (
    <section id="about" className="py-20 px-6">
      {/* --- Text content --- */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <p className="text-sm font-semibold text-[#010D3E] uppercase tracking-wide">
          Boost your productivity
        </p>

        <h2 className="md:text-6xl text-4xl font-bold tracking-tight bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text leading-tight py-4">
          A smarter, more effective way to track progress
        </h2>

        <p className="text-[#010D3E] leading-relaxed font-normal md:text-lg text-base mx-auto max-w-2xl">
          Our intuitive platform helps you stay organized, focused, and always
          moving forward toward what matters most—so you can work smarter, not
          harder.
        </p>
      </div>

      {/* --- Images --- */}
      <div className="flex justify-center">
        <div className="relative w-[600px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[900px] md:h-[600px]">
          {/* Main product image */}
          <Image
            src={Product}
            alt="Product Showcase"
            fill
            className="object-contain"
          />

          {/* Pyramid accent image */}
          <div className="absolute -top-10 -right-10 md:-top-20 md:-right-20 hidden sm:block w-[120px] h-[120px] md:w-[200px] md:h-[200px]">
            <Image
              src={Pyramid}
              alt="Pyramid accent"
              fill
              className="object-contain"
            />
          </div>
         <div className="absolute -bottom-10 -left-10 md:-bottom-[-100px] md:-left-20 hidden sm:block w-[120px] h-[120px] md:w-[200px] md:h-[200px]">
            <Image
              src={Tube}
              alt="Cylinder accent"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
