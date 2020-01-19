import { BrowserModule, Title, Meta } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { NgtUniversalModule } from '@ng-toolkit/universal';
import { FlexLayoutModule, BREAKPOINT } from '@angular/flex-layout';
import { CookieService } from 'ngx-cookie-service';
import { HeaderComponent } from './header-part/header/header.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';

const EXTRA_BREAKPOINTS = [{
  alias: 'xs.landscape',
  suffix: 'XsLandscape',
  mediaQuery: 'screen and (orientation: landscape) and (max-width: 559px)',
  priority: 1000,
  overlapping: false
}];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    CommonModule,
    NgtUniversalModule,
    // https://github.com/angular/flex-layout
    FlexLayoutModule.withConfig({
      useColumnBasisZero: false,
      ssrObserveBreakpoints: ['xs', 'lt-md'],
      printWithBreakpoints: ['md', 'lt-lg', 'lt-xl', 'gt-sm', 'gt-xs']
    }),
    AngularSvgIconModule,
    HttpClientModule,
  ],
  providers: [Title, CookieService,
    {
      provide: BREAKPOINT,
      useValue: EXTRA_BREAKPOINTS,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
