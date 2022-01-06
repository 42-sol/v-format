import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.js',
  plugins: [
    nodeResolve(),
    babel(),
    terser()
  ],
  output: {
    format: 'umd',
    name: 'VueFormat',
    exports: 'named',
    file: 'dist/v-format.min.js'
  }
};
