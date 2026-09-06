import Link from "next/link";

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-white text-gray-900">

      <main className="max-w-3xl mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">
          Thank you for your message!
        </h1>
        <p className="text-gray-600 mb-6">
          We’ve received your inquiry and will get back to you soon.
        </p>
        <p className="text-gray-600 mb-8">
          If it’s urgent, you can also call or message us directly.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="bg-blue-600 text-white px-5 py-3 rounded hover:bg-blue-700"
          >
            Back to home
          </Link>
          <Link
            href="/contact"
            className="border border-blue-600 text-blue-600 px-5 py-3 rounded hover:bg-blue-50"
          >
            Send another message
          </Link>
        </div>
      </main>
    </div>
  );
}