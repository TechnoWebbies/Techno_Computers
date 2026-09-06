import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-2xl font-extrabold bg-linear-to-r from-indigo-400 to-teal-300 bg-clip-text text-transparent"
            >
              Techno Computers
            </Link>
            <p className="text-gray-400 mt-3 text-sm leading-relaxed">
              Fast, affordable laptop repair in Turku. Student-run, pro quality,
              with clear prices and quick turnaround.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-gray-400 mb-3">
              Quick links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white hover:underline"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-white hover:underline"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white hover:underline"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-gray-400 mb-3">
              Contact
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-300">Turku, Finland</li>
              <li>
                <a
                  href="tel:+358401234567"
                  className="text-gray-300 hover:text-white hover:underline"
                >
                  Call: +358 40 123 4567
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@turkulaptopfix.fi"
                  className="text-gray-300 hover:text-white hover:underline"
                >
                  Email: technocomputers.fi@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Techno Computers. All rights reserved.
        </div>
      </div>
    </footer>
  );
}