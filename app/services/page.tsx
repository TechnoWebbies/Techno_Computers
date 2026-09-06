type Service = {
  title: string;
  description: string;
  priceFrom: string;
};

const services: Service[] = [
  {
    title: "Screen replacement",
    description:
      "Cracked or broken laptop screen? We replace screens for most models quickly and affordably.",
    priceFrom: "from €80",
  },
  {
    title: "Battery replacement",
    description:
      "Short battery life or not charging? We test and replace faulty batteries.",
    priceFrom: "from €50",
  },
  {
    title: "Keyboard repair",
    description:
      "Sticky, broken, or non-working keys? We fix or replace laptop keyboards.",
    priceFrom: "from €60",
  },
  {
    title: "Virus & malware removal",
    description:
      "Slow or suspicious behavior? We clean infections and secure your system.",
    priceFrom: "from €40",
  },
  {
    title: "SSD / HDD upgrade",
    description:
      "Make your laptop faster with a new SSD. We also recover data from old drives.",
    priceFrom: "from €70 + drive",
  },
  {
    title: "Water damage repair",
    description:
      "Spilled liquid on your laptop? Bring it in as soon as possible for diagnostics and repair.",
    priceFrom: "diagnostics €20",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">

      <main className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4">Our services</h1>
        <p className="text-gray-600 mb-10">
          We repair most laptop brands and models. If you don’t see your issue
          listed, contact us anyway.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="border rounded-lg p-5 hover:shadow-sm transition"
            >
              <h2 className="text-xl font-semibold mb-2">{s.title}</h2>
              <p className="text-gray-600 mb-3">{s.description}</p>
              <p className="text-blue-700 font-medium">{s.priceFrom}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}