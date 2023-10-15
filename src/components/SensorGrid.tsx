// src/components/SensorGrid.js
//
// This file defines the SensorGrid component.
//
// Copyright (C) 2023-today a2sensor's a2sensor/sensor-view
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.
import { fetchDataOnline } from "../fetchDataOnline";
import { createSignal, createEffect } from 'solid-js';
import t, { TranslationKey } from '../translations';

interface Sensor {
  id: string;
  name: string;
  value: {
    status: string;
    timestamp: string;
  };
}

interface SensorGridProps {
  sensors: Sensor[];
}

const SensorGrid: React.FC<SensorGridProps> = (props) => {
  const [sensors, setSensors] = createSignal<Sensor[]>([]);

  createEffect(() => {
    const fetchSensors = async () => {
      const fetchedSensors = await fetchDataOnline();
      setSensors(fetchedSensors);
    };

    fetchSensors();
    const intervalId = setInterval(fetchSensors, 1000);
    return () => clearInterval(intervalId);
  });

  return (
    <>
    <section class="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-10 gap-4 p-4">
      {sensors().map(sensor => {
        const status = sensor.value as TranslationKey;
        return (
          <div id={sensor.id} class="bg-white shadow-lg rounded p-4" title={t(safeStatus(status))}>
            <h2 class="text-x1 font-medium text-center mb-2 h-[50px]">{sensor.name}</h2>
            <div class={`flex flex-col items-center justify-center ${getBackgroundStatusClass(status)}`}>
              <div class="pt-4">
                <p class={`text-center w-auto px-4 py-2 rounded-full shadow hover:shadow-md sensor ${getStatusClass(status)}`}>
                  <img src={`images/${safeStatus(status)}.png`} alt={t(safeStatus(status))} class="w-20 h-auto"/>
                </p>
              </div>
              <time class="text-center text-xs w-28 px-3 py-2 text-gray-500 min-h-5">{formatTimeString(sensor.timestamp)}</time>
            </div>
          </div>
        )})}
    </section>
    </>
  );
}

function safeStatus(status: string): TranslationKey {
  return ((status === undefined) ? "unknown" : status) as TranslationKey;
}

function formatTimeString(dateString: string): string {
  if (dateString === undefined) {
    return "";
  }

  // Extract time and timezone
  const [_, result] = dateString.split(' ');

  return result;
}

function getStatusClass(value: TranslationKey): string {
  switch(safeStatus(value)) {
    case 'empty':
      return 'bg-blue-500';
    case 'stuck':
      return 'bg-red-500';
    case 'ok':
      return 'bg-green-500';
    default:
      return 'bg-gray-200';
  }
}

function getBackgroundStatusClass(value: TranslationKey): string {
  switch(safeStatus(value)) {
    case 'empty':
      return 'bg-blue-100';
    case 'stuck':
      return 'bg-red-100';
    case 'ok':
      return 'bg-green-100';
    default:
      return 'bg-gray-100';
  }
}

// testing stuff
/*
   function randomStatus() {
   switch (Math.floor(Math.random() * 4)) {
   case 0:
   return "empty";
   case 1:
   return "stuck";
   case 2:
   return "ok";
   default:
   return "unknown";
   }
   }
 */

export default SensorGrid;