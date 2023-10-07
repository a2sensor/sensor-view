import nodeResolve from "@rollup/plugin-node-resolve";
import common from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import copy from "rollup-plugin-copy";

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
      nodeResolve({ preferBuiltins: true, exportConditions: ["solid", "node"] }),
      babel({
        babelHelpers: "bundled",
        presets: [["solid", { generate: "ssr", hydratable: true }]]
      }),
      common()
    ]
  },
  {
    input: "src/index.js",
    output: [
      {
        dir: "public/js",
        format: "esm"
      }
    ],
    preserveEntrySignatures: false,
    plugins: [
      nodeResolve({ exportConditions: ["solid"] }),
      babel({
        babelHelpers: "bundled",
        presets: [["solid", { generate: "dom", hydratable: true }]]
      }),
      common(),
      copy({
        targets: [
          {
            src: ["static/*"],
            dest: "public"
          }
        ]
      })
    ]
  }
];
