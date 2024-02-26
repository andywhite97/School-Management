import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { TopComponent } from './layout/navbar/top/top.component';
import { SideComponent } from './layout/navbar/side/side.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TopComponent,
    SideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
