export default function Register() {
  return (
    <div className="max-w-md mx-auto p-6 border rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Register</h1>

      <input type="text" className="input" placeholder="Full Name" />
      <input type="email" className="input" placeholder="Email" />
      <input type="password" className="input" placeholder="Password" />

      <select className="input">
        <option value="patient">Patient</option>
        <option value="doctor">Doctor</option>
      </select>

      <button className="btn w-full">Create Account</button>
    </div>
  );
}
