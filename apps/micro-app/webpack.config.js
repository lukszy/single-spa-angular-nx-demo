const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack')
  .default;

module.exports = (angularWebpackConfig, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(
    angularWebpackConfig,
    options
  );

  singleSpaWebpackConfig.output.library = 'microApp';

  return {
    ...singleSpaWebpackConfig,
    externals: {
      rxjs: 'rxjs',
      '@angular/core': 'ng.core',
      '@angular/common': 'ng.common',
      '@angular/common/http': 'ng.common.http',
      '@angular/platform-browser': 'ng.platformBrowser',
      '@angular/platform-browser-dynamic': 'ng.platformBrowserDynamic',
      '@angular/compiler': 'ng.compiler',
      '@angular/animations': 'ng.animations',
      // '@angular/elements': 'ng.elements',
      // '@angular/router': 'ng.router',
      // '@angular/forms': 'ng.forms',
      'single-spa-angular': 'single-spa-angular',
    },
  };
};
