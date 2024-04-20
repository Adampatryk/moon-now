import Image from "next/image";
import MoonSvg from "../../public/moon.svg";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
      <Image
          className={styles.moon}
          src={MoonSvg}
          alt="Moon"
          width={500}
          height={500}
          priority
        />
      </div>
    </main>
  );
}
