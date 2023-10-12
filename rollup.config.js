// rollup.config.js
//
// This file configures the rollup tool.
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
import autoprefixer from 'autoprefixer';
import babel from "@rollup/plugin-babel";
import common from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import postcss from 'rollup-plugin-postcss';
import postcssImport from 'postcss-import';
import tailwindcss from 'tailwindcss';

export default [
  {
    input: "index.js",
    output: [
      {
        dir: "lib",
        format: "esm"
      }
    ],
    external: ["solid-js", "solid-js/web"],
    plugins: [
      postcss({
        config: {
          path: './postcss.config.cjs'
        },
        extract: 'bundle.css',
        sourceMap: true,
        plugins: [
          postcssImport(),
          tailwindcss(),
          autoprefixer()
        ],
        autoModules: true
      }),
      nodeResolve({ preferBuiltins: true, exportConditions: ["solid", "node"] }),
      babel({
        babelHelpers: "bundled",
        presets: [["solid", { generate: "ssr", hydratable: true }]]
      }),
      common()
    ]
  }
];
