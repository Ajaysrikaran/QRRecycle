import { useState } from "react";
import DeviceCard from "./components/DeviceCard";

export default function App() {
  const [isScanned, setIsScanned] = useState(false);

  return (
      <div className="app">
        <div className="container">
          <h1>QRRecycle</h1>
          <p className="subtitle">
            Einfacher Prototyp für einen digitalen Materialpass
          </p>

          <div className="qr-box">
            <p>QR-Code Bereich</p>
            <div className="qr-icon">▣</div>
            <p className="small">Scan Simulation</p>
          </div>

          <button className="scan-button" onClick={() => setIsScanned(true)}>
            QR-Code scannen
          </button>

          {isScanned && (
              <DeviceCard
                  name="Smartphone X1"
                  materials={["Aluminium", "Kunststoff", "Glas"]}
                  parts={["Akku", "Display", "Kamera"]}
                  repair="Akku ist austauschbar."
                  recycling="Bei einer Elektronik-Sammelstelle abgeben."
              />
          )}
        </div>
      </div>
  );
}