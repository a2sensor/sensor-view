// SensorGrid.js
import { createSignal } from 'solid-js';
import t from '../translations';

function SensorGrid(props) {
  const [sensors] = createSignal(props.sensors);

  return (
    <>
    <section class="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-10 gap-4 p-4">
      {sensors().map(sensor => (
        <div key={sensor.id} class="bg-white shadow-lg rounded p-4" title={sensor['last-modified']}>
          <h2 class="text-x1 font-medium text-center mb-2">{sensor.name}</h2>
          <div class="flex flex-col items-center">
            <p class={`text-center w-28 px-4 py-2 rounded-full shadow hover:shadow-md sensor ${getStatusClass(sensor.value.status)}`}>
              <span className="font-medium">{t(sensor.value.status)}</span>
            </p>
            <time class="text-center text-xs w-28 px-3 py-2 text-gray-500">{formatTimeString(sensor.value.timestamp)}</time>
          </div>
        </div>
      ))}
    </section>
    </>
  );
}

function formatTimeString(dateString) {
    const date = new Date(dateString);
    let hours = date.getUTCHours();
    let minutes = date.getUTCMinutes();
    let seconds = date.getUTCSeconds();

    // Ensure double-digit formatting
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return `${hours}:${minutes}:${seconds}`;
}

function getStatusClass(value) {
  switch(value) {
    case 'empty':
      return 'bg-blue-500';
    case 'stuck':
      return 'bg-red-500';
    case 'ok':
      return 'bg-green-500';
    default:
      return '';
  }
}

export default SensorGrid;
