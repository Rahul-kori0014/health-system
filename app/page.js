import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Hero Section */}
      <section
        className="relative w-full min-h-screen bg-cover bg-center flex items-center"
        style={{ backgroundImage: "url('/pic1.jpg')" }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

        {/* Content Box */}
        <div className="relative max-w-4xl mx-6 md:ml-16 bg-white/20 backdrop-blur-lg p-10 rounded-3xl shadow-xl">
          <h1 className="text-5xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
            Your Health, Our Priority
          </h1>

          <p className="text-white text-lg mb-6 max-w-xl drop-shadow-md">
            Connect with trusted MBBS & specialist doctors anytime, anywhere.
            Book appointments online and get expert consultations from the comfort of your home.
          </p>

          <Link
            href="/appointment"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-indigo-700 transition font-semibold"
          >
            Book Appointment
          </Link>
        </div>
      </section>


      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:scale-105 transform transition">
            <h3 className="text-xl font-semibold mb-2">General Physician</h3>
            <p className="text-gray-600">
              Get expert consultations for common ailments and regular checkups.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:scale-105 transform transition">
            <h3 className="text-xl font-semibold mb-2">Cardiology</h3>
            <p className="text-gray-600">
              Advanced heart care services with top cardiologists at your convenience.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:scale-105 transform transition">
            <h3 className="text-xl font-semibold mb-2">Dermatology</h3>
            <p className="text-gray-600">
              Expert skin care and treatments from certified dermatologists.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
