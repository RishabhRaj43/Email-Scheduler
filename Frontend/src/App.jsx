import React, { useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    fromMail: "",
    subject: "",
    email: "",
    intro: "",
    message: "",
    footer: "",
  });

  const handleChange = async (e) => {
    const { value, name } = e.target;
    
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/sendEmail", formData);
      console.log(res);
      toast.success("Email sent successfully");
      
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }

  };

  return (
    <div>
      <h1 className="text-5xl font-semibold text-cyan-200 ml-3">
        Gmail Composer
      </h1>
      <form
        className="form p-6 max-w-full mx-auto text-white rounded-xl"
        onSubmit={handleSubmit}
      >
        <h2 className="text-lg text-cyan-400 mb-4">Send a Mail to anyone</h2>
        <div className="flex gap-4 mb-3">
          <label className="relative w-full">
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="input w-full p-3 bg-neutral-700 text-white rounded-lg border border-neutral-600 focus:border-cyan-400 outline-none mb-1"
            />
          </label>
          <label className="relative w-full">
            <input
              type="email"
              placeholder="Your Email"
              required
              name="fromMail"
              value={formData.fromMail}
              onChange={handleChange}
              className="input w-full p-3 bg-neutral-700 text-white rounded-lg border border-neutral-600 focus:border-cyan-400 outline-none"
            />
          </label>
          <p className="text-cyan-400 mt-3 text-lg">To</p>
          <label className="relative w-full">
            <input
              type="email"
              placeholder="Receiver Email"
              required
              name="email"
              value={formData.toMail}
              onChange={handleChange}
              className="input w-full p-3 bg-neutral-700 text-white rounded-lg border border-neutral-600 focus:border-cyan-400 outline-none"
            />
          </label>
        </div>
        <div className="flex gap-4">
          <p className="text-cyan-400 mt-2 text-lg">Subject</p>
          <label className="relative mb-4 w-full">
            <input
              type="text"
              placeholder="Subject"
              required
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="input w-full p-3 bg-neutral-700 text-white rounded-lg border border-neutral-600 focus:border-cyan-400 outline-none"
            />
          </label>
        </div>
        <div className="flex gap-4">
          <p className="text-cyan-400 mt-2 text-lg">Intro</p>
          <label className="relative mb-3 w-full">
            <input
              type="text"
              placeholder="Email"
              required
              name="intro"
              value={formData.intro}
              onChange={handleChange}
              className="input w-full p-3 bg-neutral-700 text-white rounded-lg border border-neutral-600 focus:border-cyan-400 outline-none"
            />
          </label>
        </div>
        <div className="flex gap-4">
          <p className="text-cyan-400 mt-2 text-lg">Body</p>
          <label className="relative mb-3 w-full">
            <textarea
              type="text"
              placeholder="Email"
              required
              name="message"
              value={formData.body}
              onChange={handleChange}
              className="textarea w-full p-3 bg-neutral-700 text-white rounded-lg border border-neutral-600 focus:border-cyan-400 outline-none textarea-lg"
              rows={3}
            ></textarea>
          </label>
        </div>
        <div className="flex gap-4">
          <p className="text-cyan-400 mt-2 text-lg">Footer</p>
          <label className="relative mb-3 w-full">
            <input
              type="text"
              placeholder="Email"
              required
              name="footer"
              value={formData.footer}
              onChange={handleChange}
              className="imput w-full p-3 bg-neutral-700 text-white rounded-lg border border-neutral-600 focus:border-cyan-400 outline-none"
            />
          </label>
        </div>
        <button
          type="submit"
          className="submit w-full p-3 bg-cyan-400 text-white rounded-lg hover:bg-cyan-500 transition-transform duration-300 ease-in-out transform  active:scale-95 active:shadow-lg"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default App;
