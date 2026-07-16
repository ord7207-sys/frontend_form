"use client";

import React from 'react'
import { useState } from "react";


export default function FormRegister() {

  const [form, setForm] = useState({
        txt_firstname: "",
        password_password: "",
        txt_email: "",
      });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form.txt_firstname);
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-md border">
       
        {/* Header */}
        <div className="border-b px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-800">
            ฟอร์มสมัครสมาชิก
          </h1>
        </div>

      <form onSubmit={handleSubmit} className='p-6 space-y-5'>

        <label className="text-black">กรุณาระบุชื่อ {form.txt_firstname}</label>
        <input type="text" name="txt_firstname" defaultValue={form.txt_firstname} onChange={handleChange} className='w-full border text-black border-black rounded-md px-4 py-2' placeholder='firstname' />

        <label className="text-black">Password {form.password_password}</label>
        <input type="password" name="password_password" defaultValue={form.password_password} onChange={handleChange} className='w-full border text-black border-black rounded-md px-4 py-2' placeholder='password' />

        <label className="text-black">Email {form.txt_email}</label>
        <input type="email" name="txt_email" defaultValue={form.txt_email} onChange={handleChange} className='w-full border text-black border-black rounded-md px-4 py-2' placeholder='email' />
        
        <button type="submit" className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">บันทึกข้อมูล</button>
      </form>
    </div>
    </div>
  )
}