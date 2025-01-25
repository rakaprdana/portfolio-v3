"use client";

import axios, { AxiosResponse } from "axios";
import { FormEvent, useState } from "react";
import Button from "../button";
import Modal from "../modal";
interface ContactData {
  name: string;
  email: string;
  message: string;
}
const ContactMe = () => {
  const [formData, setFormData] = useState<ContactData>({
    name: "",
    email: "",
    message: "",
  });
  const [isModal, setIsModal] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response: AxiosResponse<ContactData[]> = await axios.post(
        "http://localhost:5000/api/contact",
        formData
      );
      console.log("Data submitted successfully, ", response.data);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.log("Error post data: ", error);
    }
  };
  // const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   if (
  //     formData.name.trim() == "" ||
  //     formData.email.trim() == "" ||
  //     formData.message.trim() == ""
  //   ) {
  //     alert("Please fill in all the fields before sending message");
  //     return;
  //   }
  //   console.log(formData);
  //   setIsModal(true);
  //   setFormData({ name: "", email: "", message: "" });
  // };
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-800 flex flex-col w-full lg:w-[55%] space-y-4 text-black p-8 rounded-t-xl shadow-2xl hover:shadow-cyan-500 duration-500 mx-auto"
    >
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your name"
        className="p-4 bg-gray-800 text-white rounded-lg border border-gray-700 focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-all duration-200"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Your email"
        className="p-4 bg-gray-800 text-white rounded-lg border border-gray-700 focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-all duration-200"
        required
      />
      <textarea
        name="message"
        id="message"
        value={formData.message}
        onChange={handleChange}
        rows={6}
        placeholder="Your message"
        className="p-4 bg-gray-800 text-white rounded-lg border border-gray-700 focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-all duration-200"
        required
      />
      <Button bgColor="slate-50" textColor="black" label="Send this message" />
      <Modal isOpen={isModal} onClose={() => setIsModal(false)} />
    </form>
  );
};

export default ContactMe;
