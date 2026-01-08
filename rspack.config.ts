import * as path from "node:path";
import { defineConfig } from "@rspack/cli";
import { rspack, DefinePlugin } from "@rspack/core"; // ✅ Add DefinePlugin
import * as RefreshPlugin from "@rspack/plugin-react-refresh";
import { ModuleFederationPlugin } from "@module-federation/enhanced/rspack";

import { mfConfig } from "./module-federation.config";
import * as Dotenv from "dotenv-webpack";

const isDev = process.env.NODE_ENV === "development";

// Target browsers, see: https://github.com/browserslist/browserslist
const targets = ["chrome >= 87", "edge >= 88", "firefox >= 78", "safari >= 14"];

export default defineConfig({
  context: __dirname,
  entry: {
    main: "./src/index.ts",
  },
  resolve: {
    extensions: ["...", ".ts", ".tsx", ".jsx"],
    alias: {
      "@": path.resolve(__dirname, "src"),
      // or '.' if your components are at project root
    },
  },

  devServer: {
    port: 3001,
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, "public"),
    },
    watchFiles: [path.resolve(__dirname, "src")],
  },

  output: {
    // You need to set a unique value that is not equal to other applications
    uniqueName: "auth_app",
    publicPath: "auto", // ✅ REQUIRED for Vercel & MF
  },

  experiments: {
    css: true,
  },

  module: {
    rules: [
      {
        test: /\.svg$/,
        type: "asset",
      },
      {
        test: /\.css$/,
        use: ["postcss-loader"],
        type: "css",
      },
      {
        test: /\.(jsx?|tsx?)$/,
        use: [
          {
            loader: "builtin:swc-loader",
            options: {
              jsc: {
                parser: {
                  syntax: "typescript",
                  tsx: true,
                },
                transform: {
                  react: {
                    runtime: "automatic",
                    development: isDev,
                    refresh: isDev,
                  },
                },
              },
              env: { targets },
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new Dotenv(),
    new DefinePlugin({
      "process.env.DEVMODE": JSON.stringify(process.env.DEVMODE),
      "process.env.API": JSON.stringify(process.env.API),
      "process.env.GOOGLE_CLIENT_ID": JSON.stringify(
        process.env.GOOGLE_CLIENT_ID
      ),
      "process.env.GITHUB_CLIENT_ID": JSON.stringify(
        process.env.GITHUB_CLIENT_ID
      ),
      "process.env.GITHUB_REDIRECT_URI": JSON.stringify(
        process.env.GITHUB_REDIRECT_URI
      ),
      "process.env.LINKEDIN_CLIENT_ID": JSON.stringify(
        process.env.LINKEDIN_CLIENT_ID
      ),
      "process.env.LINKEDIN_REDIRECT_URI": JSON.stringify(
        process.env.LINKEDIN_REDIRECT_URI
      ),
    }),
    // keep dotenv ONLY for local
    isDev && new Dotenv(),
    // ✅ IMPORTANT FIX: Inject env vars into browser build
    new DefinePlugin({
      "process.env": JSON.stringify(process.env),
    }),

    new rspack.HtmlRspackPlugin({
      template: "./index.html",
    }),

    new ModuleFederationPlugin(mfConfig),

    isDev ? new RefreshPlugin() : null,
  ].filter(Boolean),

  optimization: {
    minimizer: [
      new rspack.SwcJsMinimizerRspackPlugin(),
      new rspack.LightningCssMinimizerRspackPlugin({
        minimizerOptions: { targets },
      }),
    ],
  },
});
