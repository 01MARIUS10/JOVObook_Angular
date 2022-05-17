import { Component, OnInit } from '@angular/core';
import { Person } from '../../@model/PersonClass'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  

  listsOfPerson: Person[]=[];
  person: Person = new Person;
  
  IDlisting!:number;
  IDdel!:number;

  boutonaddlistcolor!:string;
  boutonaddlisttext!:string;

  boutondellistcolor!:string;
  boutondellisttext!:string;

  
  
  addName(n:string){
    this.person.name=n;
  }
  addAge(a:string){
    this.person.age=parseInt(a);
  }
  addAdress(adr:string){
    this.person.adress=adr;
  }

  addTheNewPerson(){
    let personne:Person=new Person;
    this.IDlisting++;
    this.person.ID=this.IDlisting;
    personne.copy(this.person);
    this.listsOfPerson.push(personne);

    this.person.reset();
    console.log(this.listsOfPerson);
    
  }
  
  removeID(ID:number) {
    let counter:number=0;
    this.listsOfPerson.forEach(ps => {
      if(ps.ID==ID){
        this.listsOfPerson.splice(counter,1);
      }
      counter++;
    });
  }
  
  deltolist(theID:number){
    // this.listsOfPerson=this.listsOfPerson.splice(theID,1);
    console.log(this.listsOfPerson);
    console.log(theID);
    this.removeID(theID);
  }
  constructor() {
   }

  ngOnInit(): void {
    this.boutonaddlistcolor="blue";
    this.boutonaddlisttext="add";

    this.boutondellistcolor="darkred";
    this.boutondellisttext='Delete';

    this.IDlisting=0;
    this.IDdel=-1;
    this.person.reset();

  }

}
