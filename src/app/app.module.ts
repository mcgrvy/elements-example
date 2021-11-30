import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { LQuotesComponent } from './l-quotes/l-quotes.component';

@NgModule({
  declarations: [LQuotesComponent],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [HttpClientModule],
  bootstrap: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {
  constructor(private injector : Injector) { }

    ngDoBootstrap() {
        const el = createCustomElement(LQuotesComponent, { injector : this.injector });
        customElements.define('leighton-quotes', el);
    }
}
