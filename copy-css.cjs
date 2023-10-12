// copy-css.cjs
//
// This file defines a script to copy css files to the public/ folder.
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
const fs = require('fs');
const path = require('path');

fs.copyFile(path.join(__dirname, 'lib', 'bundle.css'), path.join(__dirname, 'public', 'bundle.css'), (err) => {
  if (err) throw err;
  console.log('bundle.css was copied to public/');
});

fs.copyFile(path.join(__dirname, 'lib', 'bundle.css.map'), path.join(__dirname, 'public', 'bundle.css.map'), (err) => {
  if (err) throw err;
  console.log('bundle.css.map was copied to public/');
});
