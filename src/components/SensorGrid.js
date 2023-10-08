// SensorGrid.js
import { createSignal } from 'solid-js';
import t from '../translations';

function SensorGrid(props) {
  const [sensors] = createSignal(props.sensors);

  return (
    <>
    <h1 class="text-3xl text-center my-4">{t('SensorGrid.title')}</h1>
    <div class="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-10 gap-4 p-4">
      {sensors().map(sensor => (
        <div key={sensor.id} class="flex flex-col items-center p-2" title={sensor['last-modified']}>
          <h2 class="text-center font-bold mb-2">{sensor.name}</h2>
          <p class={`text-center w-28 px-4 py-2 rounded-full shadow hover:shadow-md sensor ${getStatusClass(sensor.value)}`}>
            <span className="font-medium">{t(sensor.value)}</span>
          </p>
        </div>
      ))}
    </div>
    </>
  );
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
