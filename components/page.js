"use client";

export default function AppointmentForm() {
  return (
    <div className="max-w-md mx-auto p-4 border rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Book Appointment</h1>

      <input type="text" className="input" placeholder="Full Name" />

      <input type="email" className="input" placeholder="Email" />

      <input type="date" className="input" />

      <select className="input">
        <option>Select Time Slot</option>
        <option>10:00 - 10:30 AM</option>
        <option>11:00 - 11:30 AM</option>
      </select>

      <button className="btn w-full mt-4">Confirm Appointment</button>
    </div>
  );
}
