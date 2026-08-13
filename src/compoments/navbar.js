
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
   
 <nav className="flex gap-6 bg-[#3b2418] p-5 text-[#f1e5cf]">

      <Link href="/">
        Home
      </Link>

      <Link href="/user">
        User
      </Link>

      <Link href="/register">
        Register
      </Link>
       

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link href="/" className="text-xl font-bold">
            ITDEV
          </Link>

          {/* Menu */}
          <div className="flex gap-6">
            <Link
              href="/"
              className="hover:text-yellow-300 transition"
            >
              หน้าแรก
            </Link>

            <Link
              href="/about"
              className="hover:text-yellow-300 transition"
            >
              เกี่ยวกับ
            </Link>

            <Link
              href="/service"
              className="hover:text-yellow-300 transition"
            >
              บริการของเรา
            </Link>

            <Link
              href="/contact"
              className="hover:text-yellow-300 transition"
            >
              ติดต่อเรา
            </Link>

                        <Link
              href="/register"
              className="hover:text-yellow-300 transition"
            >
              สมัครสมาชิก
            </Link>

          </div>

        </div>
      </div>
    </nav>
  );
}