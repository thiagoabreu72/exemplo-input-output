import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FilhoComponent } from './filho/filho.component';
import { FilhoOutputComponent } from './filho-output/filho-output.component';

@NgModule({
  declarations: [
    AppComponent,
    FilhoComponent,
    FilhoOutputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
