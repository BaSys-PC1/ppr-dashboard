import { defineConfig, loadEnv } from 'vite';
import createVuePlugin from '@vitejs/plugin-vue';
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill';
import nodePolyfills from 'rollup-plugin-polyfill-node';

const path = require('path');
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '');
  return {
    server: {
      port: 3000,
      hmr: true, // enable hot module replacement
      // https://medium.com/js-dojo/how-to-deal-with-cors-error-on-vue-cli-3-d78c024ce8d3
      proxy: {
        '^/engine-rest': env.VITE_CAMUNDA_REST_URL,
      },
    },
    plugins: [createVuePlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
        'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
        util: 'util/',
      },
    },
    //https://github.com/mqttjs/MQTT.js#vite
    optimizeDeps: {
      esbuildOptions: {
        // Node.js global to browser globalThis
        define: {
          global: 'globalThis',
        },
        // Enable esbuild polyfill plugins
        plugins: [
          NodeGlobalsPolyfillPlugin({
            buffer: true, //https://github.com/mqttjs/MQTT.js/issues/1656
            process: true,
          }),
          NodeModulesPolyfillPlugin(),
        ],
      },
    },
    build: {
      rollupOptions: {
        // Enable rollup polyfills plugin
        // used during production bundling
        plugins: [nodePolyfills()],
      },
    },
    define: {
      mxLoadResources: {},
      mxForceIncludes: {},
      mxResourceExtension: {},
      mxLoadStylesheets: {},
    },
  };
});
