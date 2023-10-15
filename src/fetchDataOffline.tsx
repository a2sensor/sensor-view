// src/fetchDataOffline.tsx
//
// This file defines the function to access the sensors.json file locally.
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
let fetchDataOffline;
if (process.env.IS_SERVER) {
  fs = require('fs');
  path = require('path');
  url = require('url');

  fetchDataOffline = function() {
    const currentDir = path.dirname(url.fileURLToPath(import.meta.url));
    const dataPath = path.join(currentDir, '../../data/sensors.json');
    const rawData = fs.readFileSync(dataPath, 'utf-8');
    return JSON.parse(rawData);
  }
} else {
  fetchDataOffline = function() { return []; };
}

export default { fetchDataOffline: fetchDataOffline };
