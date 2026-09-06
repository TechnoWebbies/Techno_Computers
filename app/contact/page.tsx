const FORM_ENDPOINT = "https://formsubmit.co/technocomputers.fi@gmail.com";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4">Contact us</h1>
        <p className="text-gray-600 mb-8">
          Have a question or need a custom quote? Send us a message and we’ll
          get back to you as soon as possible.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact form */}
          <div>
            <form action={FORM_ENDPOINT} method="POST" className="space-y-4">
              {/* Optional: set subject line for emails */}
              <input
                type="hidden"
                name="_next"
                value="https://techno-computers.vercel.app/thank-you"
              />
              <input
                type="hidden"
                name="_subject"
                value="New inquiry from website"
              />

              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Send message
              </button>
            </form>
          </div>

          {/* Contact info */}
          <div>
            <h2 className="text-xl font-semibold mb-3">Our details</h2>
            <div className="space-y-2 text-gray-700">
              <p>
                <span className="font-medium">Email:</span>{" "}
                hello@turkulaptopfix.fi
              </p>
              <p>
                <span className="font-medium">Phone:</span> +358 40 123 4567
              </p>
              <p>
                <span className="font-medium">Location:</span> Turku, Finland
              </p>
              <p className="text-sm text-gray-500 mt-4">
                We’ll update this with our exact address and opening hours soon.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}