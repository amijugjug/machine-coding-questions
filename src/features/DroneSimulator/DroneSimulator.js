import React, { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Polyline } from "react-leaflet";
import "./DroneSimulator.css";

const DroneSimulator = () => {
  const intervalId = useRef(null);
  const [pathData, setPathData] = useState([]);
  const [samplePath, setSamplePath] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dronePosition, setDronePosition] = useState({
    lat: 27.57,
    lng: 81.59,
  });
  const [isSimulationRunning, setIsSimulationRunning] = useState(false);

  useEffect(() => {
    const simulateDroneMotion = () => {
      let _currentIndex = currentIndex !== 0 ? currentIndex : 0;
      intervalId.current = setInterval(() => {
        setDronePosition(samplePath[_currentIndex]);
        setPathData(samplePath.slice(0, _currentIndex + 1));
        _currentIndex += 1;
        setCurrentIndex(_currentIndex);

        if (_currentIndex === samplePath.length) {
          clearInterval(intervalId.current);
          setIsSimulationRunning(false);
          setCurrentIndex(0);
        }
      }, 1000);
    };

    if (isSimulationRunning) {
      simulateDroneMotion();
    }

    return () => {
      clearInterval(intervalId.current);
    };
  }, [isSimulationRunning]);

  const handleStartSimulation = () => {
    setIsSimulationRunning(true);
    if (!samplePath.length) {
      const _samplePath = [];
      for (let i = 0; i < 1; i += 0.1) {
        _samplePath.push({
          lat: (dronePosition.lat + i).toFixed(2),
          lng: (dronePosition.lng + i / 10).toFixed(2),
        });
      }
      setSamplePath(_samplePath);
    }
  };

  const handlePauseSimulation = () => {
    setIsSimulationRunning(false);
  };

  const handleOnChangeLattitude = (e) => {
    setDronePosition({ ...dronePosition, lat: Number(e.target.value) });
  };
  const handleOnChangeLongitude = (e) => {
    setDronePosition({ ...dronePosition, lng: Number(e.target.value) });
  };

  return (
    <div className="app-container">
      <h1>Drone Simulator</h1>
      <div className="controls-container">
        <input
          placeholder="Enter the lattitude"
          type="number"
          onChange={(e) => handleOnChangeLattitude(e)}
          className="inputBox"
        />
        <input
          placeholder="Enter the longitude"
          type="number"
          onChange={(e) => handleOnChangeLongitude(e)}
          className="inputBox"
        />

        <button
          onClick={handleStartSimulation}
          disabled={isSimulationRunning}
          style={{ zIndex: "1" }}
          className="button"
        >
          Start Simulation
        </button>
        <button
          onClick={handlePauseSimulation}
          disabled={!isSimulationRunning}
          style={{ zIndex: "1" }}
          className="button"
        >
          Pause Simulation
        </button>
      </div>
      <div className="label">
        Current drone position : {dronePosition.lat}, {dronePosition.lng}
      </div>
      <div>
        <MapContainer
          center={[dronePosition.lat, dronePosition.lng]}
          zoom={7}
          id="map"
          style={{
            borderRadius: "12px",
            border: "2px dashed black",
          }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Polyline positions={pathData} color="blue" />
          {isSimulationRunning && <Marker position={dronePosition} />}
        </MapContainer>
      </div>
    </div>
  );
};

export default DroneSimulator;
