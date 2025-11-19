import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("📧 [Contact Component] Form submit iniziato");
    console.log("📧 [Contact Component] Form data:", form);
    
    setLoading(true);

    const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

    console.log("📧 [Contact Component] EmailJS Config:");
    console.log("  - Service ID:", serviceId ? "✅ Presente" : "❌ Mancante");
    console.log("  - Template ID:", templateId ? "✅ Presente" : "❌ Mancante");
    console.log("  - Public Key:", publicKey ? "✅ Presente" : "❌ Mancante");

    const templateParams = {
      from_name: form.name,
      to_name: "Gabriele Baglioni",
      from_email: form.email,
      to_email: "gabrielebaglioni55@gmail.com",
      message: form.message,
    };

    console.log("📧 [Contact Component] Template params:", templateParams);
    console.log("📧 [Contact Component] Invio email in corso...");

    emailjs
      .send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      )
      .then(
        (response) => {
          console.log("✅ [Contact Component] Email inviata con successo!");
          console.log("📧 [Contact Component] Response:", response);
          console.log("📧 [Contact Component] Status:", response.status);
          console.log("📧 [Contact Component] Text:", response.text);
          
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
          console.log("📧 [Contact Component] Form resettato");
        },
        (error) => {
          console.error("❌ [Contact Component] Errore invio email:", error);
          console.error("❌ [Contact Component] Error details:", {
            status: error.status,
            text: error.text,
            message: error.message,
          });
          
          setLoading(false);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
