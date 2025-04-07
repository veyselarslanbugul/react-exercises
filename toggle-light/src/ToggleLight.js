import React, { useState } from 'react';
import './ToggleLight.css'; // CSS dosyasını dahil ediyoruz

const ToggleLight = () => {
  const [isLightOn, setIsLightOn] = useState(false); // Işık başlangıçta kapalı

  // Işık durumunu değiştiren fonksiyon
  const toggleLight = () => {
    setIsLightOn(!isLightOn); // State'i tersine çeviriyoruz
  };

  const text = isLightOn ? 'Light On 💡' : 'Light Off 🌑'; // Işığın durumuna göre metin

  return (
    <div className={`toggle-light-container ${isLightOn ? 'light-on' : 'light-off'}`}>
      <h1>{text}</h1>
      <button onClick={toggleLight} className="toggle-button">
        {isLightOn ? 'Off' : 'On'} {/* Buton metni ışığın durumuna göre değişiyor */}
      </button>
    </div>
  );
};

export default ToggleLight;
