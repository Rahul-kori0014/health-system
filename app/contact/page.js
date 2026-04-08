"use client";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    alert(data.message);

    // Reset form after submit
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 py-16 px-6">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900">
          Contact <span className="text-blue-600">Dr. Satyendra Prasad Clinic</span>
        </h1>

        <p className="text-center text-lg text-gray-700 mt-3 max-w-2xl mx-auto">
          Have questions or want to book a consultation? We’re here to help!
        </p>

        <div className="grid md:grid-cols-2 gap-10 mt-12">

          {/* Contact Info Card */}
          <div className="bg-white/60 backdrop-blur-xl shadow-xl rounded-3xl p-8 border border-white/30">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Clinic Information</h2>

            <div className="space-y-5 text-gray-700 text-lg">
              <p><strong>Phone:</strong> +91 9098441788</p>
              <p><strong>Email:</strong> rahulkumaruhr@gmail.com</p>
              <p>
                <strong>Address:</strong>  
                Satyendra Community Health Centre,  
                Near City Hospital, Unchehra, Distt. Satna India
              </p>
              <p><strong>Timing:</strong> Mon – Sat | 10 AM – 7 PM</p>
              <p><strong>Emergency:</strong> 24×7 Available</p>
            </div>

            <div className="mt-6">
              <iframe
                className="w-full h-56 rounded-xl border"
                allowFullScreen=""
                loading="lazy"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.21429!2d77.04!3d28.61"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/70 backdrop-blur-xl shadow-xl rounded-3xl p-8 border border-white/30">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Send Us a Message</h2>

            <form className="space-y-6" onSubmit={handleSubmit}>

              <div>
                <label className="text-gray-700 font-medium block">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-300"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="text-gray-700 font-medium block">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-300"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="text-gray-700 font-medium block">Phone Number</label>
                <input
                  type="text"
                  placeholder="Enter phone number"
                  className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-300"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="text-gray-700 font-medium block">Message</label>
                <textarea
                  placeholder="Write your message..."
                  rows="4"
                  className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-300"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                ></textarea>
              </div>

              <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold text-lg hover:bg-blue-700 transition">
                Send Message
              </button>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
