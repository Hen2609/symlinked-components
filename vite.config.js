import { defineConfig } from "vite";
// import { esbuildCommonjs , viteCommonjs} from '@originjs/vite-plugin-commonjs'
import marko from "@marko/vite";
//my import for defining alias
import path from 'path';


export default defineConfig({
  plugins: [marko()], //viteCommonjs()
  optimizeDeps: {
  },
  build: {
    target: "esnext",
    outDir: "dist", // Server and client builds should output assets to the same folder.
    // publicDir: "assets",
    emptyOutDir: false, // Avoid server / client deleting files from each other.
    assetsInlineLimit: 0, // This is currently a work around for loading the favicon since datauri does not work.
    optimizeDeps:{
      esbuildOptions:{
        plugins:[
          // esbuildCommonjs(['@ebay/ebayui-core']) 
        ]
      },
      
    },
    rollupOptions: {
      output: {
        // Output ESM for the server build also.
        // Remove when https://github.com/vitejs/vite/issues/2152 is resolved.
        format: "es",
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve('./src'),
    }
  },
});
