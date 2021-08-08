/* eslint-disable @typescript-eslint/no-var-requires */
const autoprefixer = require('autoprefixer')
const path = require('path')

module.exports = {
  pluginOptions: {
    autoRouting: {
      chunkNamePrefix: 'page-',
    },
    windicss: {
      // see https://github.com/windicss/vite-plugin-windicss/blob/main/packages/plugin-utils/src/options.ts
    },
  },
  devServer: {
    port: 8081,
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [autoprefixer()],
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
      extensions: ['.ts', '.tsx'],
    },
    module: {
      rules: [
        {
          test: /\.(jsx|tsx|ts)$/,
          loader: 'babel-loader',
        },
      ],
    },
  },
}
