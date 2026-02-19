import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-12 text-center text-base text-gray-600">
        <div className="space-y-2">
          <p>{siteConfig.companyName}</p>
          <p>{siteConfig.phone}</p>
          <p>{siteConfig.location}</p>
        </div>
        <p className="mt-6 text-sm text-gray-500">
          © {new Date().getFullYear()} {siteConfig.companyName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
