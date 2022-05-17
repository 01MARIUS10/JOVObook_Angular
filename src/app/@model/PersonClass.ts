export class Person{
    ID!:number;
    name!:string;
    age!:number;
    adress!:string;
    reset(){
        this.ID=0;
        this.name='';
        this.age=0;
        this.adress='';
    }
    copy(person:Person){
        this.ID=person.ID;
        this.name=person.name;
        this.age=person.age;
        this.adress=person.adress;
    }
}