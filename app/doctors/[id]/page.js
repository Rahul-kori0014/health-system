import Link from "next/link";

export default function DoctorPage({ params }) {
  return (
    <div>
      <h1 className="text-2xl font-bold">Doctor ID: {params.id}</h1>

      <div className="mt-4">
        <p className="text-lg">Specialization: Cardiologist</p>
        <p>Experience: 10 years</p>
        <p>Fees: ₹500</p>

        <Link href="/appointment">
          <button className="btn mt-4">Book Appointment</button>
        </Link>
      </div>
    </div>
  );
}
