import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

loginForm : FormGroup = new FormGroup({});
  constructor( private formBuilder: FormBuilder, private http: HttpClient, private route: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      'email': new FormControl(''),
      'password': new FormControl('')
    })
  }
  login(){
    this.http.get<any>("http://localhost:3000/signup")
    .subscribe(res =>{
      const user = res.find((a:any)=>{
        return a.email ===this.loginForm.value.email && this.loginForm.value.password
      })
      if(user){
        alert("Login Successfully");
        this.loginForm.reset();
        this.route.navigate(['dashboard'])
      }else{
        alert("User not found");
      }
    },err =>{
      alert("Somthing went Worng");
    })
  }
}
