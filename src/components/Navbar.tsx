import { siteConfig } from "@/config/site";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <h1 className="text-lg md:text-xl font-bold tracking-tight">
          {siteConfig.companyName}
        </h1>

        <div className="hidden md:flex gap-10 text-sm md:text-base font-medium">
          <a href="#services" className="hover:text-blue-600 transition">Services</a>
          <a href="#about" className="hover:text-blue-600 transition">About</a>
          <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
        </div>

        <a
          href={`tel:${siteConfig.phone}`}
          className="bg-blue-600 text-white px-5 py-2.5 rounded-xl text-sm md:text-base font-semibold shadow-sm hover:bg-blue-700 transition"
        >
          Call Now
        </a>
      </div>
    </nav>
  );
}
