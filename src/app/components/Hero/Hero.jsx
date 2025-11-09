import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="hero" className={styles.hero} aria-label="Hero">
      <div className={styles.logoOverlayWrap}>
        <Image
          src="/assets/Hero_Mandala.svg"
          width={420}
          height={420}
          alt="mandala"
          aria-hidden="true"
          className={styles.mandala}
        />
        <Image
          src="/assets/logo.png"
          width={150}
          height={100}
          alt="Logo overlay"
          aria-hidden="true"
          className={styles.overlayLogo}
        />
      </div>

      <div className={styles.inner}>
        <h1 className={styles.title}>
          Varnan is where stories find <br /> their voice and form
        </h1>
        <p className={styles.kicker}>Films . Brands . Art</p>
        <p className={styles.story}>
          Since 2009, V’ve been telling stories - stories of people, their
          journeys, and the places that shape them. Some begin in polished
          boardrooms, others in humble village squares. But every story starts
          the same way - by listening with intention. V believes it takes trust,
          patience, and an eye for the unseen to capture what truly matters. V
          doesn’t just tell stories - V honors them.
        </p>
      </div>
    </section>
  );
}


