'use client'

import { useEffect, useState } from "react";
import ShadeInput from "./components/ShadeInput";
import MoonSvg from "./components/svg/MoonSvg";
import { moonPhaseToDescription, moonPhaseToShadeDirection, moonPhaseToShadePercentage } from "./lib/utils";
import styles from "./page.module.css";

export default function Home() {
  const [moonPhase, setMoonPhase] = useState<number>(0.1)

  const [shadeSide, setShadeSide] = useState<'left' | 'right'>( moonPhaseToShadeDirection(moonPhase) )
  const [shadePercentage, setShadePercentage] = useState<number>( moonPhaseToShadePercentage(moonPhase) )

  useEffect(() => {
    setShadeSide( moonPhaseToShadeDirection(moonPhase) )
    setShadePercentage( moonPhaseToShadePercentage(moonPhase) )
  }, [moonPhase])

  return (
    <main className={styles.main}>
      <h1>Moon Phase</h1>
      <p>{moonPhase}</p>
      <p>{moonPhaseToDescription(moonPhase)}</p>
      <ShadeInput value={moonPhase} setValue={setMoonPhase}/>
      <div className={styles.center}>
        <MoonSvg shadeSide={shadeSide} shadePercentage={shadePercentage}/>
      </div>
    </main>
  );
}
