import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm !: FormGroup;



  constructor(private formBuilder: FormBuilder , private HTTPClinet: HttpClient , private router: Router) { }

  model: any = {};

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      email: ['' , Validators.required],
      password: ['' , Validators.required]
    })

   
    
  }

  login(){
     this.HTTPClinet.get<any>("http://localhost:3000/signUpUsers")
     .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      });
      if(user){
        //alert("Login Success!!");
        this.loginForm.reset();
        this.router.navigate(['EmployeeDashboard'])
      }else{
        alert("User not found!")
      }
     }, err=>{
      alert("Something went wrong!!")
     }
     )
  }

  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model, null, 4));
  }
}
