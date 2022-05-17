import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() login = new EventEmitter();

  boutontext!:string;
  boutoncolor!:string;
  displaytext:string="my JovoBOOK";
  text!:string;
  correct!:boolean;

  connexion(){
    this.login.emit();
  }
  
  changedisplay(){
    this.displaytext=this.text;
    if(this.displaytext=="J"){
      this.correct=true;
      this.boutontext="QUIT";
      this.boutoncolor="green";
      this.connexion();
      
    }
    else{
      this.boutoncolor="darkred";
    }
    // this.connexion();
  }
  taketext(value:string){
    this.text=value;
  }

  constructor() {

    
   }

  ngOnInit(): void {
    this.text=' ';
    this.displaytext="my JovoBOOK";
    this.correct=false;
    this.boutontext='try';
    this.boutoncolor="green";
  }
  

}
