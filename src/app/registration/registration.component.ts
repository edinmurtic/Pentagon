import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { nameValidator } from './name.validator';
import {CustomValidationService} from '../services/custom-validation.service'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
public checkoutForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private customValidator: CustomValidationService)
  {
    this.checkoutForm= this.formBuilder.group(
      {
        name:['',[Validators.required,nameValidator()]],
        email: ['',[Validators.required,Validators.email]],
        password: ['',Validators.required],
        confirmPassword: ["", Validators.required]
      },
      {
        validator: this.customValidator.passwordMatchValidator("password","confirmPassword")
      }
    )
   }

  ngOnInit(): void {
  }
public get name()
{
  return this.checkoutForm.get('name');
}
public get email()
{
  return this.checkoutForm.get('email');
}
get confirmPassword() {
  return this.checkoutForm.get("confirmPassword");
}

get password() {
  return this.checkoutForm.get("password");
}
public submitForm(data)
{
  console.log(data);
  if(!this.checkoutForm.valid)
  {
    window.alert('not valid!');
    return;
  }
}
}
