// SensorGrid.js
import { createSignal } from 'solid-js';

function SensorGrid(props) {
  const [sensors] = createSignal(props.sensors);

  return (
    <div className="grid grid-cols-1 md:grid-colos-2 lg:grid-cols-3 gap-4 p-4">
      {sensors().map(sensor => (
        <div key={sensor.id} className="border p-2 rounded shadow">
          <h2 className="text-x1 font-bold mb-2">{sensor.id}</h2>
          <p className="mb-1">Value: <span className="font-medium">{sensor.value}</span></p>
          <p>Last Modified: <span className="text-sm text-gray-600">{sensor['last-modified']}</span></p>
        </div>
      ))}
    </div>
  );
}

export default SensorGrid;
