import json from "@rollup/plugin-json"
import {terser} from 'rollup-plugin-terser'
import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'


export default{
    input:"src/main.js",
    output:[{
        file:"dist/bundle.esm.js",
        format:"esm"
    },{
        file:"dist/bundle.cjs.js",
        format:"cjs",
    }],
    plugin:[json(),nodeResolve(),commonjs(),terser()],
    external:["vue"]
}