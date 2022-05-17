import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title :string = 'JOVOtech';
  needlePage:string="message";
  isPasswdfalse:boolean=true;
  isLogin:boolean=false;

  goLogin(){
    this.isLogin=true;
    console.log(this.isLogin);
  }


  
}
