"use client";
import React, { useState } from 'react';
import axios from 'axios';
import { BiMailSend } from 'react-icons/bi';

export default function Sub() {
  const [formData, setFormData] = useState({
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
  
    axios.post('https://formsubmit.co/akhanmustafaeren@gmail.com', formData)
      .then((response) => {
        console.log(response.data);
        // Başarılı işleme
      })
      .catch((error) => {
        console.error(error);
        // Hata durumunda
      });
  };

  return (
    <div className="w-full m-auto h-60 bg-last grid items-center p-8">
      <h2 className="text-lg md:text-2xl text-white m-auto">
        Numaranızı Bizimle Paylaşın Sizi Arıyalım...
      </h2>

      <form onSubmit={handleSubmit} className="m-auto">
        <input
          type="email"
          name="email"
          className="max-w-[400px] min-w-[303px] h-12 m-auto rounded-lg bg-white p-3"
          placeholder="example@hotmail.com"
          onChange={handleChange}
        />
        <div className="flex flex-row mt-2">
          <input
            type="text"
            name="phone"
            className="max-w-[300px] mr-3 h-12 m-auto rounded-lg bg-white p-3"
            placeholder="0(555) 555 5555"
            onChange={handleChange}
          />
          <button className="min-w-[50px] max-w-[90px] h-12 m-auto rounded-lg bg-white hover:text-primary hover:scale-110 text-sm md:text-md md:p-0">
            <BiMailSend className="w-[27px] h-[27px] m-auto" />
          </button>
        </div>
      </form>
      <hr className="md:mt-0 mt-2" />
    </div>
  );
}
