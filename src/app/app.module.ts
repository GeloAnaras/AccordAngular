import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccordionDirective } from './directives/accordion.directive';
import { AnotherComponent } from './components/another/another.component';

@NgModule({
  declarations: [
    AppComponent,
    AccordionDirective,
    AnotherComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
