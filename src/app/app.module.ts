import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { ButtonComponent } from './@shared/button/button.component';
import { ListComponent } from './component/list/list.component';
import { FooterComponent } from './component/footer/footer.component';
import { ImgSectionComponent } from './component/img-section/img-section.component';
import { MessageComponent } from './features/message/message.component';
import { ProfilComponent } from './features/profil/profil.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    ListComponent,
    FooterComponent,
    ImgSectionComponent,
    MessageComponent,
    ProfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
