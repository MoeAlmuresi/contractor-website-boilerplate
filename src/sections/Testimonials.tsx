import { siteConfig } from "@/config/site";

export default function Testimonials() {
  return (
    <section className="py-28 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            What Our Clients Say
          </h2>
          <p className="mt-5 text-lg text-gray-600">
            Trusted by homeowners and businesses alike.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {siteConfig.testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 lg:p-10 border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition"
            >
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                “{testimonial.quote}”
              </p>

              <div>
                <h3 className="text-lg font-semibold">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-500">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
