import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { PreloadingStrategyService } from 'src/services/PreloadStrategyService';

export const routes: Routes = [

  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
    data: { preloading: false, title: 'Login', description: 'Login into account.' }
  },
  {
    path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    data: { title: 'Home', description: 'App from route description' }
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // https://codinglatte.com/posts/angular/lazy-loading-modules-preloading-strategy-in-angular-8/
      preloadingStrategy: PreloadingStrategyService,
      // PreloadAllModules, TODO: Check on render
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
  providers: [PreloadingStrategyService,
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }
  ],
})
export class AppRoutingModule { }
