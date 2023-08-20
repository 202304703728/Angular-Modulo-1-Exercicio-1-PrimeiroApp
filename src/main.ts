/*
A partir do Angular 15 não é mais necessário chamarm a enableProdMode() função.
O modo de produção é selecionado automaticamente construindo co o parâmetro de 
otimização (consultar https://angular.io/api/core/enableProdMode#description )

Consultar:
https://angular.io/cli/serve
https://www.devmedia.com.br/angular-cli-como-gerar-builds-de-projetos-angular/38249
https://stackoverflow.com/questions/74558182/angular-15-cli-does-not-create-environments-folder-when-creating-an-angular-proj
https://www.youtube.com/watch?v=3IXwN4XJywQ
https://blog.ninja-squad.com/2022/11/16/angular-cli-15.0/
*/

// import { enableProdMode } from '@angular/core';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// import { environment } from './environments/environment';

/* if (environment.production) {
  enableProdMode();
 } */
 
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
