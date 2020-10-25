import { terser } from 'rollup-plugin-terser'
import { string } from 'rollup-plugin-string'


const dist = 'dist'
const bundle = 'bundle'
const production = !process.env.ROLLUP_WATCH

export default {
    input : 'src/index.js',
    output : [
        {
            file: `${dist}/${bundle}.cjs.js`,
            format: 'cjs'
        },
        {
            file: `${dist}/${bundle}.esm.js`,
            format: 'esm'
        },
        {
            name: 'ComponentX',
            file: `${dist}/${bundle}.umd.js`,
            format: 'umd'
        },
        {
            file: `${dist}/${bundle}.iife.js`,
            format: 'iife'
        }
    ],
    plugins: [
        string({
            include: '**/*.css'
        }),
        production && terser()
    ]

}
