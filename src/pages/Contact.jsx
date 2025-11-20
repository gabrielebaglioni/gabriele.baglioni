import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";

import { Fox } from "../models";
import useAlert from "../hooks/useAlert";
import { Alert, Loader } from "../components";
import { StarsCanvas } from "../components/index2.js";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");

  // Log iniziale per verificare configurazione EmailJS
  console.log("📧 [Contact] Componente montato");
  console.log("📧 [Contact] Ambiente:", import.meta.env.MODE);
  console.log("📧 [Contact] EmailJS Environment Variables:");
  const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;
  console.log("  - VITE_APP_EMAILJS_SERVICE_ID:", serviceId ? `✅ Caricato (${serviceId.substring(0, 10)}...)` : "❌ Non trovato");
  console.log("  - VITE_APP_EMAILJS_TEMPLATE_ID:", templateId ? `✅ Caricato (${templateId.substring(0, 10)}...)` : "❌ Non trovato");
  console.log("  - VITE_APP_EMAILJS_PUBLIC_KEY:", publicKey ? `✅ Caricato (${publicKey.substring(0, 10)}...)` : "❌ Non trovato");
  
  // Avviso se le variabili non sono caricate (solo in produzione)
  if (import.meta.env.MODE === 'production' && (!serviceId || !templateId || !publicKey)) {
    console.error("❌ [Contact] ATTENZIONE: Variabili EmailJS non configurate in produzione!");
    console.error("❌ [Contact] Configura le variabili d'ambiente su Vercel:");
    console.error("   - VITE_APP_EMAILJS_SERVICE_ID");
    console.error("   - VITE_APP_EMAILJS_TEMPLATE_ID");
    console.error("   - VITE_APP_EMAILJS_PUBLIC_KEY");
  }

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleFocus = () => setCurrentAnimation("walk");
  const handleBlur = () => setCurrentAnimation("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("📧 [Contact] Form submit iniziato");
    console.log("📧 [Contact] Form data:", form);
    
    setLoading(true);
    setCurrentAnimation("hit");

    const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

    console.log("📧 [Contact] EmailJS Config:");
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

    console.log("📧 [Contact] Template params:", templateParams);
    console.log("📧 [Contact] Invio email in corso...");

    emailjs
      .send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      )
      .then(
        (response) => {
          console.log("✅ [Contact] Email inviata con successo!");
          console.log("📧 [Contact] Response:", response);
          console.log("📧 [Contact] Status:", response.status);
          console.log("📧 [Contact] Text:", response.text);
          
          setLoading(false);
          showAlert({
            show: true,
            text: "Thank you for your message 😃",
            type: "success",
          });

          setTimeout(() => {
            hideAlert(false);
            setCurrentAnimation("idle");
            setForm({
              name: "",
              email: "",
              message: "",
            });
            console.log("📧 [Contact] Form resettato");
          }, [3000]);
        },
        (error) => {
          console.error("❌ [Contact] Errore invio email:", error);
          console.error("❌ [Contact] Error details:", {
            status: error.status,
            text: error.text,
            message: error.message,
          });
          
          setLoading(false);
          setCurrentAnimation("idle");

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: "danger",
          });
        }
      );
  };

  return (
    <section className='animated-bg min-h-screen relative'>
        <StarsCanvas />
        <div className='relative flex lg:flex-row flex-col max-container' >
      {alert.show && <Alert {...alert} />}

      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get in Touch</h1>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='w-full flex flex-col gap-7 mt-14'
        >
          <label className='text-white-100 font-semibold'>
            Name
            <input
              type='text'
              name='name'
              className='input'
              placeholder='John'
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-white-100 font-semibold'>
            Email
            <input
              type='email'
              name='email'
              className='input'
              placeholder='John@gmail.com'
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-white-100 font-semibold'>
            Your Message
            <textarea
              name='message'
              rows='4'
              className='textarea'
              placeholder='Write your thoughts here...'
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <button
            type='submit'
            disabled={loading}
            className='btn'
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>

      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight position={[0, 0, 1]} intensity={2.5} />
          <ambientLight intensity={1} />
          <pointLight position={[5, 10, 0]} intensity={2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />

          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.629, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
        </div>
    </section>
  );
};

export default Contact;
