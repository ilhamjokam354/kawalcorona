module.exports = {
  devServer: {
    proxy : 'https://api.kawalcorona.com/'
  },
  css: {
    loaderOptions: {
      css: {
        sourceMap: process.env.NODE_ENV !== "production" ? true : false
      }
    }
  }
  
};
