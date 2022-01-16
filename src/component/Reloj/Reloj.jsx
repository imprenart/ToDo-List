import React, { useState } from "react";

import "../Reloj/Reloj.css";

export default function Reloj() {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());

  setInterval(() => {
    setHora(new Date().toLocaleTimeString());
  }, 1000);

  return <div className="reloj">{hora}</div>;
}
