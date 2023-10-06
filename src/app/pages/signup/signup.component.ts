import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  constructor(){

  }
  ngOnInit(): void {
    const localData =localStorage.getItem('SignUpUsers');
    if(localData !=null){
      this.signupUsers = JSON.parse(localData);
    }
  }
  signupUsers: any[] = [];
  signupObj: any = {
    username: ' ',
    email: ' ',
    password: ' '
  }

  onSignUp () {
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signUpUsers', JSON.stringify(this.
      signupUsers));
    this.signupObj  = {
      username: ' ',
      email: ' ',
      password: ' '
    }
  }
}
