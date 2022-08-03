import { LightningElement } from 'lwc';

export default class Workshop1 extends LightningElement {
    firstName;
    lastName;

    firstname(event){
        this.firstName= event.target.value;
    }
    lastname(event){
        this.lastName= event.target.value;
    }

    tikla(){
        alert("hosgeldin"+this.firstName +" "+ this.lastName+"sen cok kasli ve yakisiklisin!");
    }
}