// /**
//  * Created by s.t.o.k.a.t.o on 27.01.2017.
//  */
(function (global) {
  System.config({
    paths: {
      // псевдомним для пути к модулям
      'npm:': 'node_modules/'
    },
    // где ищем модули
    map: {
      // наше приложение здесь
      app: 'app',
      // пакеты Ангуляр
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      // дополнительные пакеты
      'rxjs': 'npm:rxjs',
      'moment': 'npm:moment/moment.js'
      // 'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js'
    },
    // пакеты, уазывающие правила загрузки файлов без имени и разширений
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      }
    }
  });
})(this);
