import { siteConfig } from "@/config/site";

export default function About() {
  return (
    <section id="about" className="py-28 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left Image Placeholder */}
        <div className="bg-gray-200 h-[420px] lg:h-[480px] rounded-xl flex items-center justify-center">
          <span className="text-gray-500">
            About Image Placeholder
          </span>
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            {siteConfig.about.heading}
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            {siteConfig.about.description}
          </p>

          <div className="mt-10 grid grid-cols-2 gap-8 text-center">
            <div>
              <h3 className="text-3xl font-bold">10+</h3>
              <p className="text-gray-600 text-sm uppercase tracking-wide">Years Experience</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">500+</h3>
              <p className="text-gray-600 text-sm uppercase tracking-wide">Projects Completed</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
