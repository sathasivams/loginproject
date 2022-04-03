import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm : FormGroup = new FormGroup({});
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private route: Router) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      'name' : new FormControl(''),
      'email': new FormControl(''),
      'mobile': new FormControl(''),
      'password': new FormControl('')
    })
  }
  signupuser() {
    this.http.post<any>("http://localhost:3000/signup", this.signupForm.value)
    .subscribe( res =>{
      alert("Signup Successfull");
      this.signupForm.reset();
      this.route.navigate(['login']);
      }, err =>{
          alert("Sonthing went wrong");
        })
  }

}
