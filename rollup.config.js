import nodeResolve from "@rollup/plugin-node-resolve";
import common from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import postcss from 'rollup-plugin-postcss';
import postcssImport from 'postcss-import';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

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
