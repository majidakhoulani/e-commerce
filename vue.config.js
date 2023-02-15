module.exports = {
  // publicPath: process.env.NODE_ENV === "production" ? "/e-commerce/" : "/",
  publicPath: process.env.NODE_ENV === 'development' ? '/e-commerce/dev/baseurl/' : '/e-commerce/prod/baseurl/'
};
