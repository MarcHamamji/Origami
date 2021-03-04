module.exports = {
  publicPath: 'https://marchamamji.github.io/origami/',
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "~@/styles/variables.scss";',
      },
    },
  },
};
