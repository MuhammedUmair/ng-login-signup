import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(){}
  ngOnInit(): void {
    const localData =localStorage.getItem('signUpUsers');
    if(localData !=null){
      this.signupUsers = JSON.parse(localData);

    }
  }
  signupUsers: any[] = [];
  loginObj: any = {
    username: ' ',
    password: ' '
  }

  onLogin() {
    debugger
   const isUserExist = this.signupUsers.find(m=> m.userName == this.loginObj.userName && m.password == this.loginObj.password);
   if(isUserExist != undefined){
    alert('User login Successfully');
   } else {
    alert('Wrong Credentials');
   }
  }
}
