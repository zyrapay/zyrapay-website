"use client";
import React, { useEffect, useRef, useState } from "react";
import style from "./styles/ConverterSlider.module.scss";

import driver from "./assets/driver.webp";
import individual from "./assets/individual.webp";
import tailor from "./assets/tailor.webp";
import trader from "./assets/trader.webp";

const slides = [
  {
    id: "cs1",
    num: "01",
    heading: ["Borderless Money", "Transfers"],
    bg: driver,
    orb: "#3d6fff",
  },
  {
    id: "cs2",
    num: "02",
    heading: ["Instant", "Conversions"],
    bg: trader,
    orb: "#b5ff4d",
  },
  {
    id: "cs3",
    num: "03",
    heading: ["Smart", "Wallets"],
    bg: individual,
    orb: "#c77dff",
  },
  {
    id: "cs4",
    num: "04",
    heading: ["Effortless", "Payments"],
    bg: tailor,
    orb: "#ff6b6b",
  },
];

const ConverterSlider = () => {
  const [cur, setCur] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (i: number) => setCur(i);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCur((prev) => (prev + 1) % slides.length);
    }, 3000);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const s = slides[cur];

  return (
    <div className={style.wrapper}>
      <div
        className={style.card}
        style={{
          backgroundImage: `url(${s.bg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        <div className={style.overlay} />

        <div className={style.scene}>
          <div />
          <div className={style.bottom}>
            <span className={style.label}>[{s.num}]</span>
            <div className={style.headingRow}>
              <h2 className={style.heading}>
                {s.heading[0]}
                <br />
                {s.heading[1]}
              </h2>
              {/* <Global
                size="32"
                color="#c1ff40"
                variant="Broken"
                className="animate-spin"
              /> */}
            </div>
          </div>
        </div>
      </div>

      <div className={style.track} role="tablist" aria-label="Slide navigation">
        {slides.map((slide, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === cur}
            aria-label={`Slide ${i + 1}: ${slide.heading.join(" ")}`}
            className={`${style.tick} ${i === cur ? style.active : ""}`}
            onClick={() => {
              goTo(i);
              resetTimer();
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ConverterSlider;
