// index.js
//
// This file defines the home page.
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
import { renderToStringAsync } from "solid-js/web";
import { fetchDataOffline } from "./src/fetchData";
import SensorGrid from "./src/components/SensorGrid";
import { language, setLanguage } from './src/store';
import t from './src/translations';
import './styles/styles.css';

// entry point for server render
export default async req => {
  const sensorsData = await fetchDataOffline();
  const sensorGrid = await renderToStringAsync(() => <SensorGrid sensors={sensorsData} />);
  return `
    <!doctype html>
    <html lang="es">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="apple-touch-icon" sizes="180x180" href="./images/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="./images/favicon-16x16.png"/>
        <link rel="manifest" href="./images/site.webmanifest"/>
        <link rel="stylesheet" href="bundle.css"/>
        <title>a2sensor - ${t('home.title')}</title>
      </head>
      <body class="bg-gray-100">
         <header class="flex items-center bg-black p-4 text-white shadow-md mx-auto">
            <img src="./images/logo-small.png" alt="Logo" class="w-40 h-auto mr-4"/>
          <h1 class="text-4xl font-bold text-center flex-grow">${t('home.title')}</h1>
          <img src="./images/logo-small.png" alt="Spacer Logo" class="w-40 h-auto opacity-0"/>
        </header>
        <main class="container mx-auto mt-8 p-0">
          ${sensorGrid}
        </main>
        <footer class="bg-gray-800 text-white p-4">
          <div class="container mx-auto">
            <h3 class="text-xl font-bold mb-4">${t('references.header')}</h3>
            <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <li class="flex items-center">
                <img src="./images/unknown.png" class="w-10 h-10 mr-2 bg-white p-1" alt="${t('reference.unknown.alt')}"/>
                <a href="https://www.flaticon.com/free-icons/disconnected" title="${t('reference.unknown.alt')}">${t('reference.unknown')}</a>
              </li>
              <li class="flex items-center">
                <img src="./images/stuck.png" class="w-10 h-10 mr-2 bg-white p-1" alt="${t('reference.stuck.alt')}"/>
                <a href="https://www.flaticon.com/free-icons/accident" title="${t('reference.stuck.alt')}">${t('reference.stuck')}</a>
              </li>
              <li class="flex items-center">
                <img src="./images/empty.png" class="w-10 h-10 mr-2 bg-white p-1" alt={t('reference.empty.alt')}/>
                <a href="https://www.flaticon.com/free-icons/empty-set" title="${t('reference.empty.alt')}">${t('reference.empty')}</a>
              </li>
              <li class="flex items-center">
                <img src="./images/ok.png" class="w-10 h-10 mr-2 bg-white p-1" alt="${t('reference.ok.alt')}"/>
                <a href="https://www.flaticon.com/free-icons/wind" title="${t('reference.ok.alt')}">${t('reference.ok')}</a>
              </li>
            </ul>
          </div>
        </footer>
      </body>
    </html>
  `;
};
