import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    DashboardModule
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
