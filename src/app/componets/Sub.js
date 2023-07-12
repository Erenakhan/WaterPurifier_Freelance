"use client";
import React from 'react';
import axios from 'axios';
import {useState} from'react';

export default function Sub() {
        const [formData, setFormData] = useState({});
         const handleChange = (e) => {
           setFormData({ ...formData, [e.target.name]: e.target.value });
         }; 
       
         const handleSubmit = (e) => {
           e.preventDefault();
            axios
             .post('https://formsubmit.co/akhanmustafaeren@gmail.com', formData)
             .then((response) => {
               console.log(response.data);
               "success"
             })
             .catch((error) => {
               console.error(error);
               "error"
               }); 
         };  
  return (
  
    <div className="w-full m-auto h-60 bg-last grid items-center p-8">
      <h2 className=" text-lg md:text-2xl text-white m-auto">
        Numaranızı Bizimle Paylaşın Sizi Arıyalım...
      </h2>

      <form  onSubmit={handleSubmit} className="m-auto">
        <input
          type="email"
          name="email"
          className="max-w-[400px] min-w-[303px] h-12 m-auto rounded-lg bg-white p-3"
          placeholder="example@hotmail.com"
           onChange={handleChange} 
        />
        <div className="mt-2">
          <input
            type="text"
            name="phone"
            className="max-w-[300px]  mr-3 h-12 m-auto rounded-lg bg-white p-3"
            placeholder="0(555) 555 5555"
            onChange={handleChange} 
          />
          <button className="max-w-[90px] h-12 m-auto rounded-lg bg-white hover:text-primary hover:scale-110 text-sm md:text-md p-1 md:p-0">
            Gönder
          </button>
        </div>
      </form>
      <hr className='md:mt-0 mt-2 '></hr>
    </div>
  )
}



   
