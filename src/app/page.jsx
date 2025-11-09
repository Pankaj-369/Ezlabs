import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Team from "./components/Team/Team";
import Services from "./components/Services/Services";
import Portfolio from "./components/Portfolio/Portfolio";
import ContactForm from "./components/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      {/* <Hero />
      <About />
      <Team />
      <Services />
      <Portfolio /> */}
      <ContactForm />
      {/* <Footer /> */}
    </main>
  );
}

