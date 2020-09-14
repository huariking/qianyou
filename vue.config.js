const px2vw = require('postcss-px-to-viewport')
module.exports = {
  devServer: {
    proxy: {
      '/hbsearch': {
        target: 'https://ihotel.meituan.com/',
        changeOrigin: true
      },
      '/ajax': {
        target: 'https://m.maoyan.com/',
        changeOrigin: true
      }
    },

  },
  css: {
    loaderOptions: {
      css: {
      },
      postcss: {
        plugins: [new px2vw({
          unitToConvert: 'px',
          viewportWidth: 375,
          unitPrecision: 5,
          propList: ['*'],
          viewportUnit: 'vw',
          fontViewportUnit: 'vw',
          selectorBlackList: [],
          minPixelValue: 1,
          mediaQuery: false,
          replace: true,
          exclude: /node_modules/,
          landscape: false,
          landscapeUnit: 'vw',
          landscapeWidth: 568
        })]

      }
    }
  }
}