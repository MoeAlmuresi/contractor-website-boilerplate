import { siteConfig } from "@/config/site";

export default function Services() {
  return (
    <section id="services" className="py-28 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-14 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Our Services
          </h2>
          <p className="mt-5 text-lg text-gray-600">
            Professional solutions tailored to your project needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {siteConfig.services.map((service, index) => (
            <div
              key={index}
              className="border border-gray-200 p-8 lg:p-10 rounded-2xl hover:shadow-lg transition"
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
