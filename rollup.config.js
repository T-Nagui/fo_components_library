import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import { terser } from 'rollup-plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const packageJson = require('./package.json');
export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/cjs/index.js',
        format: 'cjs',
        sourcemap: true,
         name: 'fo-components'
      },
      {
        file: 'dist/esm/index.js',
        format: 'esm',
        sourcemap: true,
          name: 'fo-components'
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        typescript: require('typescript'),
        tsconfig: './tsconfig.json',
        exclude: ["**/__tests__", "**/*.test.ts", 'stories/*.tsx', 'jest.config.ts', 'stories/*.ts'],

      }),
      terser(),
    ],
    external: ['react', 'react-dom'],
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: "esm" }],
    external: [/\.scss$/],
     plugins: [dts.default()],
  },
];
