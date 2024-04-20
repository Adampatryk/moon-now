import Image from "next/image";
import MoonSvg from "../../public/moon.svg";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
      <Image
          src={MoonSvg}
          alt="Moon"
          width={300}
          height={300}
          priority
        />
      </div>
    </main>
  );
}
