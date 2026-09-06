"use client";

type Review = {
  name: string;
  text: string;
  rating: number; // 1–5
};

const reviews: Review[] = [
  {
    name: "Matti K.",
    text:
      "Super fast screen replacement! My laptop looks like new again. Highly recommend.",
    rating: 5,
  },
  {
    name: "Laura P.",
    text:
      "Very friendly service and clear pricing. They explained everything in simple terms.",
    rating: 5,
  },
  {
    name: "Jussi M.",
    text:
      "Brought my laptop for virus removal and it’s much faster now. Great student-run business.",
    rating: 5,
  },
  {
    name: "Emma L.",
    text:
      "Battery replacement done quickly and at a good price. Will come back if anything else breaks.",
    rating: 5,
  },
  {
    name: "Aleksi R.",
    text:
      "Honest diagnostics and fair quote. Repair took one day as promised.",
    rating: 5,
  },
];

export default function Reviews() {
  return (
    <section className="border-t border-b bg-gray-50 pb-8">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <h2 className="text-2xl font-bold mb-2 text-center">
          What customers say
        </h2>
        <p className="text-gray-600 mb-3 text-center">
          Real Google reviews from our customers in Turku.
        </p>
      </div>

      {/* Scrolling track */}
      <div className="relative w-full pb-10">
        <div className="flex gap-4 animate-scroll">
          {/* First set */}
          {reviews.map((r, i) => (
            <div
              key={`a-${i}`}
              className="min-w-65 max-w-65 border rounded-lg p-4 bg-white shadow-sm"
            >
              <div className="flex items-center gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <span
                    key={idx}
                    className={
                      idx < r.rating ? "text-yellow-500" : "text-gray-300"
                    }
                  >
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-700 text-sm mb-3 line-clamp-3">
                “{r.text}”
              </p>
              <p className="text-sm font-medium text-gray-900">– {r.name}</p>
            </div>
          ))}

          {/* Second set (clone for seamless loop) */}
          {reviews.map((r, i) => (
            <div
              key={`b-${i}`}
              className="min-w-65 max-w-65 border rounded-lg p-4 bg-white shadow-sm"
            >
              <div className="flex items-center gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <span
                    key={idx}
                    className={
                      idx < r.rating ? "text-yellow-500" : "text-gray-300"
                    }
                  >
                    ★
                  </span>
                ))}
              </div> 
              <p className="text-gray-700 text-sm mb-3 line-clamp-3">
                “{r.text}”
              </p>
              <p className="text-sm font-medium text-gray-900">– {r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}