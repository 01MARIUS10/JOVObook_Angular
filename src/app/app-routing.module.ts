import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImgSectionComponent } from './component/img-section/img-section.component';
import { ListComponent } from './component/list/list.component';
import { MessageComponent } from './features/message/message.component';
import { ProfilComponent } from './features/profil/profil.component';

const routes: Routes = [
  {path:"",component:ImgSectionComponent},
  {path:"message",component:MessageComponent},
  {path:"profil",component:ProfilComponent},
  {path:"other",component:ListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
