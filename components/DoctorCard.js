import Link from "next/link";

export default function DoctorCard({ doctor }) {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="font-bold text-xl">{doctor.name}</h2>
      <p className="text-gray-600">{doctor.specialization}</p>
      <p>Experience: {doctor.experience} years</p>
      <p>Fees: ₹{doctor.fees}</p>

      <Link 
        href={`/doctors/${doctor.id}`} 
        className="btn mt-2 block text-center"
      >
        Book Appointment
      </Link>
    </div>
  );
}
