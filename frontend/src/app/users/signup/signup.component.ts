import { Component, NgZone, OnInit } from '@angular/core';
import { FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private ngZone:NgZone,private router:Router) {  }
    errmsg : any;
    errmsgshow = false;
    signupForm = new FormGroup({
    firstName : new FormControl('',Validators.required),
    lastName : new FormControl('',Validators.required),
    email : new FormControl('',Validators.required),
    pwd : new FormControl('',Validators.required),
    confPwd : new FormControl('',Validators.required)
  });

  ngOnInit(): void {
  }

  signupSubmit()
  {
    if(this.signupForm.valid)
    {
      console.log(this.signupForm.value,'Signupform####');
      this.errmsgshow = false;
      this.ngZone.run(()=>this.router.navigateByUrl('/login'))
    }
    else
    {
      this.errmsgshow = true;
      this.errmsg = "All fields are mandatory!!!";
    }
  }

}
