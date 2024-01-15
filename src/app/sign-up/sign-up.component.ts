import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder , Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  
  public signUpform !: FormGroup;
  constructor(private formBuilder: FormBuilder , private HTTPClient: HttpClient , private router: Router) { }

  ngOnInit(): void {

    this.signUpform = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      mobile: ['', Validators.required]
    })
    
  

  }
  
  signUp(){
      this.HTTPClient.post<any>("http://localhost:3000/signUpUsers" , this.signUpform.value)
      .subscribe(res=>{
        //alert("Sign Up Successfully!!");
        this.signUpform.reset();
        this.router.navigate(['login'])           //to navigate on login page
      }, err=>{
        alert("Something went wrong!")
      }
      )
      
  }
}
