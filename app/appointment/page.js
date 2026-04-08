
"use client";
import { useSession, signIn } from "next-auth/react";
import { useState } from "react";

export default function Appointment() {
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [gender, setGender] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [specialist, setSpecialist] = useState("");
  const [address, setAddress] = useState("");
  const [issue, setIssue] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      fullName,
      age,
      email,
      mobile,
      gender,
      appointmentDate,
      preferredTime,
      specialist,
      address,
      issue,
    };

    const res = await fetch("/api/appointment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    alert(result.message);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 py-16 px-6">
      <div className="max-w-5xl mx-auto bg-white/40 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] 
      border border-white/50 rounded-3xl p-12 transform hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition">

        {/* Title */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-extrabold text-gray-900">Book Appointment</h1>
          <p className="text-gray-600 mt-3 text-lg">
            Consult with trusted MBBS & specialist doctors anytime
          </p>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >

          {/* Name */}
          <div className="group">
            <label className="font-semibold text-gray-700 mb-2 block">Full Name</label>
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-5 py-3 rounded-2xl bg-white shadow-inner border focus:ring-2 focus:ring-indigo-400 outline-none transition"
              placeholder="Enter your full name"
            />
          </div>

          {/* Age */}
          <div className="group">
            <label className="font-semibold text-gray-700 mb-2 block">Age</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full px-5 py-3 rounded-2xl bg-white shadow-inner border focus:ring-2 focus:ring-indigo-400 outline-none"
              placeholder="Your age"
            />
          </div>

          {/* Email */}
          <div className="group">
            <label className="font-semibold text-gray-700 mb-2 block">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-3 rounded-2xl bg-white shadow-inner border focus:ring-2 focus:ring-indigo-400 outline-none"
              placeholder="example@gmail.com"
            />
          </div>

          {/* Mobile */}
          <div className="group">
            <label className="font-semibold text-gray-700 mb-2 block">Mobile Number</label>
            <input
              type="tel"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="w-full px-5 py-3 rounded-2xl bg-white shadow-inner border focus:ring-2 focus:ring-indigo-400 outline-none"
              placeholder="9876543210"
            />
          </div>

          {/* Gender */}
          <div className="group">
            <label className="font-semibold text-gray-700 mb-2 block">Gender</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full px-5 py-3 rounded-2xl bg-white shadow-inner border focus:ring-2 focus:ring-indigo-400 outline-none"
            >
              <option>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          {/* Date */}
          <div className="group">
            <label className="font-semibold text-gray-700 mb-2 block">Appointment Date</label>
            <input
              type="date"
              value={appointmentDate}
              onChange={(e) => setAppointmentDate(e.target.value)}
              className="w-full px-5 py-3 rounded-2xl bg-white shadow-inner border focus:ring-2 focus:ring-indigo-400 outline-none"
            />
          </div>

          {/* Time */}
          <div className="group">
            <label className="font-semibold text-gray-700 mb-2 block">Preferred Time</label>
            <input
              type="time"
              value={preferredTime}
              onChange={(e) => setPreferredTime(e.target.value)}
              className="w-full px-5 py-3 rounded-2xl bg-white shadow-inner border focus:ring-2 focus:ring-indigo-400 outline-none"
            />
          </div>

          {/* Specialist */}
          <div className="md:col-span-2">
            <label className="font-semibold text-gray-700 mb-2 block">
              Department / Specialist
            </label>
            <select
              value={specialist}
              onChange={(e) => setSpecialist(e.target.value)}
              className="w-full px-5 py-3 rounded-2xl bg-white shadow-inner border focus:ring-2 focus:ring-indigo-400 outline-none"
            >
              <option>Select Specialist</option>
              <option>General Physician</option>
              <option>Cardiologist</option>
              <option>Dermatologist</option>
              <option>Gynecologist</option>
              <option>Neurologist</option>
              <option>Orthopedic</option>
              <option>Pediatrician</option>
            </select>
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <label className="font-semibold text-gray-700 mb-2 block">Address</label>
            <textarea
              rows={3}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full px-5 py-3 rounded-2xl bg-white shadow-inner border focus:ring-2 focus:ring-indigo-400 outline-none"
              placeholder="House number, street, city, pincode"
            />
          </div>

          {/* Issue */}
          <div className="md:col-span-2">
            <label className="font-semibold text-gray-700 mb-2 block">Describe Your Issue</label>
            <textarea
              rows={4}
              value={issue}
              onChange={(e) => setIssue(e.target.value)}
              className="w-full px-5 py-3 rounded-2xl bg-white shadow-inner border focus:ring-2 focus:ring-indigo-400 outline-none"
              placeholder="Describe your symptoms or medical concern"
            />
          </div>

          {/* Submit */}
          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="px-10 py-3 bg-indigo-600 hover:bg-indigo-700 text-white 
              text-lg font-semibold rounded-2xl shadow-lg transition transform hover:scale-105"
            >
              Confirm Appointment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
