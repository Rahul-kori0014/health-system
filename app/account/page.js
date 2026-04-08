"use client";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function AccountPage() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className="flex items-center justify-center h-screen text-xl font-semibold">
        Please login first
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-purple-700 via-indigo-600 to-blue-500 flex items-center justify-center p-6">

      <div className="w-full max-w-6xl bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl p-10 grid md:grid-cols-2 gap-10 border border-white/30">

        {/* LEFT PANEL – PROFILE SIDE */}
        <div className="flex flex-col items-center gap-6 border-r border-white/40 pr-6">

          {/* Profile Picture With Badge */}
          <div className="relative w-44 h-44 group transition">
            <Image
              src={session.user.image || "/default.jpg"}
              alt="Profile"
              fill
              className="rounded-full border-4 border-white shadow-2xl object-cover group-hover:scale-105 transition"
            />

            <div className="absolute -bottom-2 -right-3 px-3 py-1 bg-yellow-500 text-black text-xs rounded-full shadow-lg border border-white/30">
              Verified User
            </div>
          </div>

          {/* Name */}
          <h1 className="text-4xl font-extrabold text-white text-center drop-shadow-lg tracking-wide">
            {session.user.name}
          </h1>

          {/* Email */}
          <p className="text-white/80 text-center -mt-2 drop-shadow text-lg">
            {session.user.email}
          </p>

          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-4 w-full mt-4">

            <div className="bg-white/20 backdrop-blur-lg p-4 rounded-2xl text-center border border-white/40 hover:bg-white/30 transition shadow-lg">
              <p className="text-3xl font-black text-white">12</p>
              <p className="text-white/90 text-sm font-medium">Appointments</p>
            </div>

            <div className="bg-white/20 backdrop-blur-lg p-4 rounded-2xl text-center border border-white/40 hover:bg-white/30 transition shadow-lg">
              <p className="text-3xl font-black text-white">5</p>
              <p className="text-white/90 text-sm font-medium">Doctors</p>
            </div>

            <div className="bg-white/20 backdrop-blur-lg p-4 rounded-2xl text-center border border-white/40 hover:bg-white/30 transition shadow-lg">
              <p className="text-3xl font-black text-white">9</p>
              <p className="text-white/90 text-sm font-medium">Reports</p>
            </div>

          </div>
        </div>

        {/* RIGHT PANEL – DETAILS & BUTTONS */}
        <div className="flex flex-col justify-between gap-6 pl-4">

          <div className="p-6 bg-white/10 border border-white/30 rounded-2xl shadow-lg backdrop-blur-xl">
            <h2 className="text-3xl font-bold text-white mb-3 drop-shadow">
              Account Details
            </h2>
            <p className="text-white/90 leading-relaxed text-lg">
              Welcome to your dashboard. Here you can manage all your medical
              activities including appointments, medical reports, and doctor
              profiles. Keep track of your monthly updates, profile logs, and
              upcoming schedules.  
              <br /><br />
              Stay organized, stay healthy 🌿
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-4">

            <Link href="/appointment">
              <button className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-300 to-white text-indigo-800 font-bold text-lg shadow-lg hover:scale-[1.03] transition">
                View Appointments
              </button>
            </Link>

          

            <button
              onClick={() => signOut()}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-red-500 to-red-600 text-white font-bold text-lg shadow-lg hover:scale-[1.03] transition"
            >
              Logout
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}
