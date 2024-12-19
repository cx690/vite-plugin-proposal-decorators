import { Plugin } from 'vite';
import { transformSync } from '@babel/core';

function decorator(input?: {
    /** 
     * whitch file will be use
     * @default /\.(js|cjs|mjs|jsx|ts|mts|cts|tsx)$/
    */
    extensions?: RegExp | ((id: string, options?: { ssr?: boolean; }) => boolean | void),
    /** @babel/plugin-proposal-decorators options
     * see https://babeljs.io/docs/en/babel-plugin-proposal-decorators#options
     */
    options?: {
        version?: "2023-11" | "2023-05" | "2023-01" | "2022-03" | "2021-12" | "2018-09" | "legacy",
        decoratorsBeforeExport?: boolean,
    }
}): Plugin {
    const extensions = input?.extensions || /\.(js|cjs|mjs|jsx|ts|mts|cts|tsx)$/;
    return {
        name: 'vite-plugin-proposal-decorators',
        transform(src, id, options) {
            if (typeof extensions === 'function' ? extensions(id, options) : extensions.test(id)) {
                const code = transformSync(src, {
                    plugins: [
                        ["@babel/plugin-proposal-decorators", input?.options],
                    ]
                });
                return {
                    code: code?.code || '',
                    map: code?.map
                }
            }
        },
    }
}

export default decorator;
