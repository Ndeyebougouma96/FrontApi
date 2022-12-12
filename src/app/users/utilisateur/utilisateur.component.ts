import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgModel, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})

export class UtilisateurComponent implements OnInit { 
users: any;
userEditForm : FormGroup;
showForm = false; 
p: number= 1;
itemsperpage: number= 5;
totalUser:any; 
searchText:any;
user = []; userActif:any = [];

  constructor(private userService : UsersService, private formBuilder : FormBuilder){
    this.userEditForm = this.formBuilder.group({
      id:[''],
      prenom: ['', [Validators.required]],
      nom: ['', [Validators.required]],
      email: ['', [Validators.required]],
    });
  }

ngOnInit(): void {

  this.userService.getUsers().subscribe( 
      data =>{

        this.users = data;

        this.userActif = this.users.filter((e:any)=> e.etat == true)
        console.log(this.userActif)
      }
); 

}

retrieveData(){
  this.userService.getUsers().subscribe((data:any)=>{
    this.users = data;
     this.totalUser = data.length; 
  })
}


changeRole=(id:any,roles:any)=> {
 roles == "admin" ? roles ="utilisateur": roles = "admin"

 const user ={
  roles : roles

 }
/* /observer les changement/ */
 this.userService.changeRole(id,user).subscribe(

  data=>{
    this.ngOnInit();
  }
 );
}


deleteId=(id:any,etat:any)=> {
  
etat == "false" ? etat = true : etat = false

 const user ={
 etat : etat

 }

 this.userService.modifUsers(id,user).subscribe(

  data=>{
    this.ngOnInit();
  }
 );
}

getUserData(id:any,email:any,prenom:any,nom:any){
  this.showForm = true;
  this.userEditForm = this.formBuilder.group({
      id:[id],
      prenom: [prenom, [Validators.required]],
      nom: [nom, [Validators.required]],
      email: [email, [Validators.required]],
    });
  console.log(id)
}


modifUsers (){

const id =  this.userEditForm.value.id;
 const user ={
  nom : this.userEditForm.value.nom,
  prenom: this.userEditForm.value.prenom,
  email: this.userEditForm.value.email
 }
console.log(user)

 this.userService.changeRole(id,user).subscribe(

  data=>{
    this.ngOnInit();
    this.showForm = false
  }
 );
}

}



