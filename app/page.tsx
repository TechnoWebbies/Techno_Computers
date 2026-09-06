import Link from "next/link";
import Reviews from "@/components/Reviews"; 

const PHONE_NUMBER = "358414918473";

type ServicePreview = {
  title: string;
  description: string;
};

const servicesPreview: ServicePreview[] = [
  {
    title: "Screen replacement",
    description:
      "Cracked screen? We replace laptop screens quickly and affordably.",
  },
  {
    title: "Battery & charging",
    description:
      "Short battery life or not charging? We test and replace faulty parts.",
  },
  {
    title: "Virus removal",
    description:
      "Slow or suspicious behavior? We clean infections and secure your system.",
  },
];

export default function Home() {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero */}
      <section className="border-b bg-linear-to-b from-indigo-50 to-white">
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-28">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-gray-900">
            Fast, affordable laptop repair in Turku
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl">
            Student-run, pro quality. We fix screens, batteries, keyboards,
            viruses, and more – with clear prices and quick turnaround.
          </p>
          <div className="flex flex-wrap gap-3">
            {/* Call now */}
            <a
              href={`tel:+${PHONE_NUMBER}`}
              className="bg-teal-500 text-white px-6 py-3 rounded-xl text-sm md:text-base font-semibold hover:bg-teal-600 shadow-md"
            >
              Call now
            </a>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${PHONE_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-600 text-white px-6 py-3 rounded-xl text-sm md:text-base font-semibold hover:bg-indigo-700 shadow-md"
            >
              Text on WhatsApp
            </a>

            {/* Contact form */}
            <Link
              href="/contact"
              className="border-2 border-indigo-600 text-indigo-700 px-6 py-3 rounded-xl text-sm md:text-base font-semibold hover:bg-indigo-50"
            >
              Get a free quote
            </Link>
          </div>
        </div>
      </section>
      <Reviews />

      {/* Services preview */}
      <section className="border-b bg-white">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <h2 className="text-3xl font-extrabold mb-2 text-gray-900">
            What we fix
          </h2>
          <p className="text-gray-700 mb-8 max-w-2xl">
            Most repairs done within 1–3 days. See all services for more
            details.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {servicesPreview.map((s) => (
              <div
                key={s.title}
                className="border rounded-2xl p-6 hover:shadow-lg transition bg-white"
              >
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {s.title}
                </h3>
                <p className="text-gray-700">{s.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/services"
              className="text-blue-700 font-medium hover:underline"
            >
              View all services →
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-b bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <h2 className="text-3xl font-extrabold mb-2 text-gray-900">
            How it works
          </h2>
          <p className="text-gray-700 mb-8 max-w-2xl">
            Simple, transparent process from drop-off to pickup.
          </p>

          <div className="grid gap-6 md:grid-cols-4">
            <div>
              <div className="text-4xl font-extrabold text-indigo-600 mb-2">
                1
              </div>
              <h3 className="font-bold mb-1 text-gray-900">Book or drop in</h3>
              <p className="text-gray-700">
                Book a time on Call or bring your laptop to our Turku location.
              </p>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-indigo-600 mb-2">
                2
              </div>
              <h3 className="font-bold mb-1 text-gray-900">diagnostics</h3>
              <p className="text-gray-700">
                We check your laptop and explain the issue in plain language.
              </p>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-indigo-600 mb-2">
                3
              </div>
              <h3 className="font-bold mb-1 text-gray-900">Quote & approval</h3>
              <p className="text-gray-700">
                You get a clear price before we start any repair.
              </p>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-indigo-600 mb-2">
                4
              </div>
              <h3 className="font-bold mb-1 text-gray-900">Repair & pickup</h3>
              <p className="text-gray-700">
                We fix your laptop and notify you when it’s ready to collect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-linear-to-b from-white to-indigo-50">
        <div className="max-w-6xl mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-extrabold mb-3 text-gray-900">
            Need your laptop fixed today?
          </h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Call or message us now for a quick quote.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {/* Call now */}
            <a
              href={`tel:+${PHONE_NUMBER}`}
              className="bg-teal-500 text-white px-6 py-3 rounded-xl text-sm md:text-base font-semibold hover:bg-teal-600 shadow-md"
            >
              Call now
            </a>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${PHONE_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-600 text-white px-6 py-3 rounded-xl text-sm md:text-base font-semibold hover:bg-indigo-700 shadow-md"
            >
              Text on WhatsApp
            </a>

            {/* Contact form */}
            <Link
              href="/contact"
              className="border-2 border-indigo-600 text-indigo-700 px-6 py-3 rounded-xl text-sm md:text-base font-semibold hover:bg-indigo-50"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
