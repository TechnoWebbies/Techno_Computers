import Link from "next/link";

// Change this to your actual phone number (with country code, no spaces)
const PHONE_NUMBER = "358401234567";

export default function Header() {
  return (
    <header className="border-b bg-white">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo / site name */}
        <Link
          href="/"
          className="text-2xl font-extrabold bg-linear-to-r from-indigo-600 to-teal-500 bg-clip-text text-transparent"
        >
          Techno Computers
        </Link>

        {/* Nav links + buttons */}
        <nav className="flex items-center gap-4 md:gap-6">
          <Link
            href="/"
            className="text-gray-700 hover:text-indigo-700 font-medium hidden sm:block"
          >
            Home
          </Link>
          <Link
            href="/services"
            className="text-gray-700 hover:text-indigo-700 font-medium hidden sm:block"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 hover:text-indigo-700 font-medium hidden sm:block"
          >
            Contact
          </Link>

          {/* Call now */}
          <a
            href={`tel:+${PHONE_NUMBER}`}
            className="bg-teal-500 text-white px-3 py-2 rounded-lg text-sm font-semibold hover:bg-teal-600 shadow-sm"
            title="Call now"
          >
            Call now
          </a>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${PHONE_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-600 text-white px-3 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700 shadow-sm"
            title="Text on WhatsApp"
          >
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}