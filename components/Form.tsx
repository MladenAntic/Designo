"use client";

import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const validateName = (name: string) => /^[A-Za-z\s]+$/.test(name);
  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone: string) => /^[+]?[0-9\s\-()]+$/.test(phone);
  const validateMessage = (message: string) => message.trim().length > 0;

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    let valid = true;
    const newErrors = { name: "", email: "", phone: "", message: "" };

    if (!validateName(name)) {
      newErrors.name = "Invalid name.";
      valid = false;
    }

    if (!validateEmail(email)) {
      newErrors.email = "Invalid email address.";
      valid = false;
    }

    if (!validatePhone(phone)) {
      newErrors.phone = "Invalid phone number.";
      valid = false;
    }

    if (!validateMessage(message)) {
      newErrors.message = "Message cannot be empty.";
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      // Handle the form submission here
      console.log("Form submitted:", { name, email, phone, message });
    }
  };

  return (
    <form
      className="flex flex-col gap-10 max-lg:pb-16 lg:pr-16 xl:pr-0"
      onSubmit={handleSubmit}
    >
      <div className="relative w-[380px] max-sm:w-[250px] lg:w-[280px] xl:w-[380px]">
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className={`input-field ${errors.name && "border-red"}`}
        />
        {errors.name && (
          <p className="absolute top-12 text-red">{errors.name}</p>
        )}
      </div>
      <div className="relative w-[380px] max-sm:w-[250px] lg:w-[280px] xl:w-[380px]">
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className={`input-field ${errors.email && "border-red"}`}
        />
        {errors.email && (
          <p className="absolute top-12 text-red">{errors.email}</p>
        )}
      </div>
      <div className="relative w-[380px] max-sm:w-[250px] lg:w-[280px] xl:w-[380px]">
        <input
          type="text"
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone"
          className={`input-field ${errors.phone && "border-red"}`}
        />
        {errors.phone && (
          <p className="absolute top-12 text-red">{errors.phone}</p>
        )}
      </div>
      <div className="relative w-[380px] max-sm:w-[250px] lg:w-[280px] xl:w-[380px]">
        <textarea
          placeholder="Message"
          onChange={(e) => setMessage(e.target.value)}
          className={`h-[102px] resize-none border-b text-lightgray outline-none placeholder:text-lightgray placeholder:opacity-50 focus:border-b-2 ${errors.message && "border-red"} w-full`}
        />
        {errors.message && (
          <p className="absolute top-28 text-red">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="h-[56px] w-[152px] self-end rounded-lg bg-white text-[15px] font-medium uppercase tracking-[1px] transition-colors duration-200 hover:bg-light-peach hover:text-white max-lg:w-full max-lg:self-center"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
