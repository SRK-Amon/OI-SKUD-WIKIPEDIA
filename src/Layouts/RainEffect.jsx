import { useEffect } from "react";
import "../assets/sass/common/RainEffect.scss";

const RainEffect = () => {
  useEffect(() => {
    const numberOfDrops = 100;
    const rain = document.getElementById("rain");

    if (rain) {
      rain.innerHTML = "";

      for (let i = 0; i < numberOfDrops; i++) {
        const drop = document.createElement("div");
        drop.className = "drop";
        drop.style.left = `${Math.random() * 100}%`;
        drop.style.animationDuration = `${0.5 + Math.random()}s`;
        drop.style.opacity = `${0.3 + Math.random() * 0.7}`;
        rain.appendChild(drop);
      }
    }
  }, []);

  return <div id="rain" />;
};

export default RainEffect;
