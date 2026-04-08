export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-6">
      
      {/* Container */}
      <div className="max-w-5xl mx-auto bg-white/70 backdrop-blur-xl border border-white/40 shadow-xl rounded-3xl p-10">
        
        {/* Title */}
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 text-center">
          About <span className="text-indigo-600">Healthcare+</span>
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed mb-10 text-center max-w-3xl mx-auto">
          Healthcare+ is a modern digital healthcare platform built to connect 
          patients with experienced doctors, provide online consultations, and 
          create a smooth medical experience from home.
        </p>


        {/* Section 1 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            🌟 Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our mission is to make healthcare accessible, fast, transparent, and
            affordable for everyone. We aim to use technology to reduce waiting times,
            provide digital medical records, and offer quick access to specialists 
            regardless of location.
          </p>
        </section>


        {/* Section 2 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            🏥 What We Offer
          </h2>
          <ul className="space-y-3 text-gray-700 leading-relaxed">
            <li>✔ Online doctor consultations</li>
            <li>✔ Appointment booking with real-time availability</li>
            <li>✔ Secure digital medical history and prescriptions</li>
            <li>✔ Access to expert certified specialists</li>
            <li>✔ Smooth and professional user experience</li>
          </ul>
        </section>


        {/* Section 3 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            💡 Why We Started
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Millions of patients struggle daily with long waiting lines, lack of 
            specialist access, confusion in medical records, and high consultation fees.
            We built Healthcare+ to remove these barriers and provide a reliable digital 
            solution that patients can trust.
          </p>
        </section>


        {/* Section 4 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            🌍 Vision for the Future
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We dream of a world where healthcare is not difficult, slow, or limited by 
            distance. Healthcare+ is continuously evolving with advanced digital tools,
            AI-based appointment systems, and advanced health record management.
          </p>
        </section>


        {/* Team Section */}
        <section className="text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Healthcare+ is developed by a passionate team of healthcare professionals, 
            developers, designers, and innovators who believe technology can change the 
            future of medical support and patient experience.
          </p>
        </section>
      </div>
    </div>
  );
}
