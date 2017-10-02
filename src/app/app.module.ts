import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './header/nav-bar/nav-bar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { ServicesComponent } from './main-content/services/services.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './main-content/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    MainContentComponent,
    ServicesComponent,
    FooterComponent,
    ContentComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
