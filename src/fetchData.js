// fetchData.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

export function fetchData() {
  const currentDir = path.dirname(fileURLToPath(import.meta.url));
  const dataPath = path.join(currentDir, '../sensors.json'); // Adjust path if you place the JSON elsewhere.
  const rawData = fs.readFileSync(dataPath, 'utf-8');
  return JSON.parse(rawData);
}
