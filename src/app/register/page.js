"use client";

import React, { useState } from "react";
import Swal from "sweetalert2";

export default function FormRegister() {
  const [form, setForm] = useState({
    txt_firstname: "",
    txt_lastname: "",
    txt_username: "",
    password_password: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://api.itdev.cmtc.ac.th/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstname: form.txt_firstname,
          lastname: form.txt_lastname,
          username: form.txt_username,
          password: form.password_password
        }),
      });

      const result = await response.json();

      if (response.ok) {
        await Swal.fire({
          icon: "success",
          title: `บันทึกสำเร็จ (status: ${response.status})`,
          text: "สมัครสมาชิกเรียบร้อย",
          confirmButtonText: "ตกลง",
          confirmButtonColor: "#3094d6",
        });
      } else if (response.status === 400) {
        await Swal.fire({
          icon: "warning",
          title: `เกิดข้อผิดพลาด (status: ${response.status})`,
          text: result.message || "ข้อมูลไม่ถูกต้อง",
          confirmButtonText: "ตกลง",
          confirmButtonColor: "#ed8c43",
        });
      }
    } catch (error) {
      await Swal.fire({
        icon: "warning",
        title: "เกิดข้อผิดพลาด",
        text: "ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้",
        confirmButtonText: "ตกลง",
        confirmButtonColor: "#900000",
      });
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-md border">
        <div className="border-b px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-800">ฟอร์มสมัครสมาชิก</h1>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          <label className="text-black">Firstname {form.txt_firstname}</label>
          <input
            type="text"
            name="txt_firstname"
            value={form.txt_firstname}
            onChange={handleChange}
            className="w-full border text-black border-black rounded-md px-4 py-2"
            placeholder="firstname"
          />

          <label className="text-black">Lastname {form.txt_lastname}</label>
          <input
            type="text"
            name="txt_lastname"
            value={form.txt_lastname}
            onChange={handleChange}
            className="w-full border text-black border-black rounded-md px-4 py-2"
            placeholder="lastname"
          />

          <label className="text-black">Username {form.txt_username}</label>
          <input
            type="text"
            name="txt_username"
            value={form.txt_username}
            onChange={handleChange}
            className="w-full border text-black border-black rounded-md px-4 py-2"
            placeholder="username"
          />

          <label className="text-black">Password {form.password_password}</label>
          <input
            type="password"
            name="password_password"
            value={form.password_password}
            onChange={handleChange}
            className="w-full border text-black border-black rounded-md px-4 py-2"
            placeholder="password"
          />

          <button type="submit" className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            บันทึกข้อมูล
          </button>
        </form>
      </div>
    </div>
  );
}
