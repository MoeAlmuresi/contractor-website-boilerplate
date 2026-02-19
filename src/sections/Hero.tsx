import { siteConfig } from "@/config/site";

export default function Hero() {
  return (
    <section className="bg-gray-50 py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            {siteConfig.companyName}
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed">
            Reliable, licensed, and professional contractor services for residential and commercial projects.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="bg-blue-600 text-white px-7 py-3.5 rounded-xl text-base font-semibold shadow-sm hover:bg-blue-700 transition"
            >
              Request a Quote
            </a>

            <a
              href={`tel:${siteConfig.phone}`}
              className="border border-gray-300 px-7 py-3.5 rounded-xl text-base font-semibold hover:border-gray-400 transition"
            >
              Call Now
            </a>
          </div>
        </div>

        {/* Right Placeholder Image */}
        <div className="bg-gray-200 h-[420px] lg:h-[480px] rounded-xl flex items-center justify-center">
          <span className="text-gray-500">
            Hero Image Placeholder
          </span>
        </div>

      </div>
    </section>
  );
}
