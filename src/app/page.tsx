'use client'

import { useEffect, useState } from "react";
import ShadeInput from "./components/ShadeInput";
import MoonSvg from "./components/svg/MoonSvg";
import styles from "./page.module.css";

export default function Home() {
  const [shadePercentage, setShadePercentage] = useState<number>(0.1)

  useEffect(() => {
    console.log("shadePercentage:", shadePercentage);
  }, [shadePercentage]);

  return (
    <main className={styles.main}>

      <ShadeInput value={shadePercentage} setValue={setShadePercentage}/>
      <div className={styles.center}>
        <MoonSvg shadeSide="left" shadePercentage={shadePercentage}/>
      </div>
    </main>
  );
}
