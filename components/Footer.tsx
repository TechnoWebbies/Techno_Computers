import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="font-semibold text-gray-800">
              Turku Laptop Repair
            </p>
            <p className="text-sm text-gray-600">
              Fast, affordable laptop repair in Turku – student-run, pro quality.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-gray-700">
            <Link href="/" className="hover:text-blue-700">
              Home
            </Link>
            <Link href="/services" className="hover:text-blue-700">
              Services
            </Link>
            <Link href="/contact" className="hover:text-blue-700">
              Contact
            </Link>
            <Link href="/book" className="hover:text-blue-700">
              Book now
            </Link>
          </div>

          <div className="text-sm text-gray-600">
            <p>hello@turkulaptopfix.fi</p>
            <p>+358 40 123 4567</p>
            <p>Turku, Finland</p>
          </div>
        </div>

        <p className="text-xs text-gray-500 mt-6">
          © {new Date().getFullYear()} Turku Laptop Repair. All rights reserved.
        </p>
      </div>
    </footer>
  );
}