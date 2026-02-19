import { siteConfig } from "@/config/site";

export default function WhyChooseUs() {
  return (
    <section className="py-28 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Why Choose Us
          </h2>
          <p className="mt-5 text-lg text-gray-600">
            Professional service you can trust.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {siteConfig.whyChooseUs.map((item, index) => (
            <div
              key={index}
              className="p-7 lg:p-8 border border-gray-200 rounded-2xl hover:shadow-lg transition"
            >
              <h3 className="text-lg md:text-xl font-semibold mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
