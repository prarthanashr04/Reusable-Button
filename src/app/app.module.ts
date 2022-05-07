import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ButtonComponent } from './button/button.component';
import { HeroComponent } from './hero/hero.component';
import { AeroComponent } from './aero/aero.component';
import { ZeroComponent } from './zero/zero.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    HeroComponent,
    AeroComponent,
    ZeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
