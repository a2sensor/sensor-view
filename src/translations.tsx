// src/translations.tsx
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
import { Language, language } from './store';

export type TranslationKey =
  | 'empty'
  | 'stuck'
  | 'ok'
  | 'unknown'
  | 'home.title'
  | 'references.header'
  | 'reference.unknown'
  | 'reference.unknown.alt'
  | 'reference.stuck'
  | 'reference.stuck.alt'
  | 'reference.empty'
  | 'reference.empty.alt'
  | 'reference.ok'
  | 'reference.ok.alt';

export type Translations = {
  [key in Language['lang']]: {
    [key in TranslationKey]: string;
  }
};

const translations: Translations = {
    en: {
    empty: "Empty",
    stuck: "Stuck",
    ok: "OK",
    unknown: 'Disconnected',
    'home.title': 'Seeding',
    'references.header': 'Icons',
    'reference.unknown': '"Disconnected" icon created by Freepik - Flaticon',
    'reference.unknown.alt': '"Disconnected" icon',
    'reference.stuck': '"Accident" icon created by Leremy - Flaticon',
    'reference.stuck.alt': '"Accident" icon',
    'reference.empty': '"Empty set" icon created by Freepik - Flaticon',
    'reference.empty.alt': '"Empty set" icon',
    'reference.ok': '"Wind" icon created by Mayor Icons - Flaticon',
    'reference.ok.alt': '"Wind" icon',
  },
  es: {
    empty: "Vacío",
    stuck: "Atascado",
    ok: "OK",
    unknown: "Desconectado",
    'home.title': 'Siembra',
    'references.header': 'Iconos',
    'reference.unknown': 'Icono "Disconnected" creado por Freepik - Flaticon',
    'reference.unknown.alt': 'Icono "Disconnected"',
    'reference.stuck': 'Icono "Accident" creado por Leremy - Flaticon',
    'reference.stuck.alt': 'Icono "Accident"',
    'reference.empty': 'Icono "Empty set" creado por Freepik - Flaticon',
    'reference.empty.alt': 'Icono "Empty set"',
    'reference.ok': 'Icono "Wind" creado por Mayor Icons - Flaticon',
    'reference.ok.alt': 'Icono "Wind"',
  }
};

export default function t(key: TranslationKey): string {
  return translations[language.lang][key] || key;
}
