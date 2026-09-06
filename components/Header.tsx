import Link from "next/link";

// Change this to your actual phone number (with country code, no spaces)
const PHONE_NUMBER = "358414918473";

export default function Header() {
  return (
    <header className="border-b bg-white">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo / site name */}
        <Link href="/" className="text-3xl font-bold text-blue-700">
          Techno Computers
        </Link>

        {/* Nav links + buttons */}
        <nav className="flex items-center gap-4 md:gap-6">
          <Link href="/" className="text-gray-700 hover:text-blue-700 hidden sm:block">
            Home
          </Link>
          <Link href="/services" className="text-gray-700 hover:text-blue-700 hidden sm:block">
            Services
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-700 hidden sm:block">
            Contact
          </Link>

          {/* Call now */}
          <a
            href={`tel:+${PHONE_NUMBER}`}
            className="bg-green-600 text-white px-3 py-2 rounded text-sm font-medium hover:bg-green-700"
            title="Call now"
          >
            Call now
          </a>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${PHONE_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-3 py-2 rounded text-sm font-medium hover:bg-blue-700"
            title="Text on WhatsApp"
          >
            Text on WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}