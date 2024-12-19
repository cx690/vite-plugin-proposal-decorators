`A Vite plugin for @babel/plugin-proposal-decorators.`

## Install
- npm
`npm install vite-plugin-proposal-decorators -D`
- yarn 
`yarn add vite-plugin-proposal-decorators --dev`
- pnpm
`pnpm add vite-plugin-proposal-decorators --D`

## Usage

```javascript
// vite.config.ts
import { defineConfig } from 'vite';
import decorator from 'vite-plugin-proposal-decorators';

export default defineConfig({
    plugins: [
        decorator({
            options: {
                version: '2023-11'
            }
        }),
    ],
    ...
})

```
## Note

Please disable typescript `experimentalDecorators` and `emitDecoratorMetadata`.
``` jsonc
// tsconfig.json
{
 "compilerOptions":{
    "experimentalDecorators": false,                 
    "emitDecoratorMetadata": false, 
 }
 ...
}
```
