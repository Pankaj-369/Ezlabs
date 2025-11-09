"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";
import Image from "next/image";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  const validateEmail = (email) => {
    return /^\S+@\S+\.\S+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setError("Name, Email, and Message are required.");
      return;
    }

    if (!validateEmail(form.email)) {
      setError("Enter a valid email address.");
      return;
    }

    try {
      const res = await fetch("https://vernanbackend.ezlab.in/api/contact-us/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.status === 200 || res.status === 201) {
        setSuccess("Form Submitted");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setError("Something went wrong. Try again.");
      }

    } catch (err) {
      setError("Network error. Try again.");
    }
  };

  return (
    <section id="talk" className={styles.contactSection}>
      <div className={styles.contactLeft}>
        <h3>Join the Story</h3>
        <p>Ready to bring your vision to life? Let’s talk.</p>
        <p>
          Whether you have an idea, a question, or simply want to explore how V can work —
          we’re just a message away. Let’s catch up over coffee. Great stories begin with a good conversation.
        </p>
      </div>
       {/* <Image
          src="/assets/Footer_Vector.svg"
          width={220}
          height={220}
          alt="mandala"
          aria-hidden="true"
          className={styles.mandala}
        /> */}
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your name*"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your email*"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Your message*"
          value={form.message}
          onChange={handleChange}
          required
        ></textarea>

        {error && <p className={styles.error}>{error}</p>}
        {success && <p className={styles.success}>{success}</p>}

        <button type="submit" className={styles.submitBtn}>Submit</button>
      </form>
      
    </section>
  );
}
