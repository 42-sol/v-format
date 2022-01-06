import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  input: 'src/index.js',
  plugins: [
    nodeResolve(),
    babel()
  ],
  output: [
    {
      format: 'umd',
      name: 'VueFormat',
      exports: 'named',
      file: 'dist/v-format.js'
    },
    {
      format: 'esm',
      file: 'dist/v-format.esm.js'
    }
  ]
};
