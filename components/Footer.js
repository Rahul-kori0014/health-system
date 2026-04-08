import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

        {/* About Section */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-white">Healthcare+</h3>
          <p className="text-gray-400">
            Providing trusted medical services and consultations with experienced doctors. Your health is our priority.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-white">Quick Links</h3>
          <ul>
            <li className="mb-2">
              <Link href="/" className="hover:text-indigo-400 transition">Home</Link>
            </li>
            <li className="mb-2">
              <Link href="/about" className="hover:text-indigo-400 transition">About</Link>
            </li>
            <li className="mb-2">
              <Link href="/appointment" className="hover:text-indigo-400 transition">Appointment</Link>
            </li>
            <li className="mb-2">
              <Link href="/contact" className="hover:text-indigo-400 transition">Contact</Link>
            </li>
            <li className="mb-2">
              <Link href="/account" className="hover:text-indigo-400 transition">Account</Link>
            </li>
          </ul>
        </div>

        {/* Contact + Social Media */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-white">Contact Us</h3>
          <p className="text-gray-400">123 Healthcare Street, Unchehra, Distt Satna India</p>
          <p className="text-gray-400">Phone: +91 9098441788</p>
          <p className="text-gray-400">Email: info@healthcareplus.com</p>

          {/* Social Media Icons */}
          <div className="flex mt-4 space-x-4">
            <Link href="https://www.facebook.com/profile.php?id=100095482126562" target="_blank" className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full text-white transition">
              <FaFacebookF size={16} />
            </Link>
            <Link href="https://x.com/rahul37800?t=K5kVssApKQzfgks7lCD9lg&s=08" target="_blank" className="bg-blue-400 hover:bg-blue-500 p-2 rounded-full text-white transition">
              <FaTwitter size={16} />
            </Link>
            <Link href="https://www.instagram.com/rahul_bunkar_2003?utm_source=qr&igsh=MWZtM2theTk1YnY2eg%3D%3D" target="_blank" className="bg-pink-500 hover:bg-pink-600 p-2 rounded-full text-white transition">
              <FaInstagram size={16} />
            </Link>
            <Link href="https://www.linkedin.com/in/rahul-742a29291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="bg-blue-700 hover:bg-blue-800 p-2 rounded-full text-white transition">
              <FaLinkedinIn size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Healthcare+. All rights reserved.
      </div>
    </footer>
  );
}
