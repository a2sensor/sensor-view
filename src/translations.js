// src/translations.js
//
// This file provides text translations.
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
import { language } from './store';

const translations = {
  en: {
    empty: "Empty",
    stuck: "Stuck",
    ok: "OK",
    unknown: 'Disconnected',
    'home.title': 'Seeding',
    'references.header': 'References',
    'reference.unknown': '"Disconnected" icons created by Freepik - Flaticon',
    'reference.unknown.alt': 'Iconos "Disconnected"',
    'reference.stuck': '"Accident" icons created by Leremy - Flaticon',
    'reference.stuck.alt': '"Accident" icons',
    'reference.empty': '"Empty set" icons created by Freepik - Flaticon',
    'reference.empty.alt': '"Empty set" icons',
    'reference.ok': '"Wind" icons created by Mayor Icons - Flaticon',
    'reference.ok.alt': '"Wind" icons',
  },
  es: {
    empty: "Vacío",
    stuck: "Atascado",
    ok: "OK",
    unknown: "Desconectado",
    'home.title': 'Siembra',
    'references.header': 'Referencias',
    'reference.unknown': 'Iconos "Disconnected" creados por Freepik - Flaticon',
    'reference.unknown.alt': 'Iconos "Disconnected"',
    'reference.stuck': 'Iconos "Accident" creados por Leremy - Flaticon',
    'reference.stuck.alt': 'Iconos "Accident"',
    'reference.empty': 'Iconos "Empty set" creados por Freepik - Flaticon',
    'reference.empty.alt': 'Iconos "Empty set"',
    'reference.ok': 'Iconos "Wind" creados por Mayor Icons - Flaticon',
    'reference.ok.alt': 'Iconos "Wind"',
  }
};

export default function t(key) {
  return translations[language.lang][key] || key;
}
