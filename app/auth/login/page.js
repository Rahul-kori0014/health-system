export default function Login() {
  return (
    <div className="max-w-md mx-auto p-6 border rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Login</h1>

      <input type="email" className="input" placeholder="Email" />
      <input type="password" className="input" placeholder="Password" />

      <button className="btn w-full">Login</button>
    </div>
  );
}
