import { siteConfig } from "@/config/site";

export default function Contact() {
  return (
    <section id="contact" className="py-28 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            {siteConfig.contact.heading}
          </h2>
          <p className="mt-5 text-lg text-gray-600">
            {siteConfig.contact.description}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">

          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">Phone</h3>
              <p className="text-lg text-gray-700">{siteConfig.phone}</p>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">Email</h3>
              <p className="text-lg text-gray-700">{siteConfig.email}</p>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">Location</h3>
              <p className="text-lg text-gray-700">{siteConfig.location}</p>
            </div>
          </div>

          {/* Simple Form */}
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-300 px-4 py-3.5 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-blue-500/30"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 px-4 py-3.5 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-blue-500/30"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border border-gray-300 px-4 py-3.5 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-blue-500/30"
            />

            <textarea
              placeholder="Tell us about your project"
              rows={4}
              className="w-full border border-gray-300 px-4 py-3.5 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-blue-500/30"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3.5 rounded-xl text-base font-semibold shadow-sm hover:bg-blue-700 transition"
            >
              Submit Request
            </button>
          </form>

        </div>

      </div>
    </section>
  );
}
