export default function BookPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">

      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4">Book an appointment</h1>
        <p className="text-gray-600 mb-8">
          Choose a time that works for you. Drop-off and pick-up at our
          Turku location.
        </p>

        {/* Calendly inline widget */}
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/sdevshan10/laptop-diagnostic-turku"
          style={{ minWidth: "320px", height: "700px" }}
        />
        <script
          async
          src="https://assets.calendly.com/assets/external/widget.js"
        />
      </main>
    </div>
  );
}