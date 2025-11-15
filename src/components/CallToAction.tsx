export default function CallToAction () {
  return (
    <section id="updates" className="py-20 bg- text-black">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text leading-tight">
          Ready to supercharge your workflow?
        </h2>
        <p className="mt-4 text-lg md:text-xl text-[#010D3E]">
          Start free today and experience the future of productivity.  
          Upgrade anytime as your team grows.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#"
            className="px-6 py-3 rounded-xl font-semibold bg-black text-white shadow hover:bg-gray-800 transition"
          >
            Get Started Free
          </a>
          <a
            href="#pricing"
            className="px-6 py-3 rounded-xl font-semibold bg-transparent border border-black hover:bg-white hover:text-black transition"
          >
            View Pricing
          </a>
        </div>
      </div>
    </section>
  );
};
