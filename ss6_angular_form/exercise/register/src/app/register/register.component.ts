import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {from} from "rxjs";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  countryList = [
    {id: 1, name: 'Việt Nam'},
    {id: 2, name: 'Nhật Bản'},
    {id: 3, name: 'American'},
    {id: 4, name: "Đức"}
  ];
  registerFormGroup: FormGroup;


  constructor() {
    this.registerFormGroup = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      passwordGroup: new FormGroup({
        password: new FormControl("", [Validators.required, Validators.minLength(6)]),
        confirmPassword: new FormControl("", Validators.required)

      }, this.checkConfirmPassword),
      country: new FormControl("", [Validators.required]),
      age: new FormControl("", [Validators.required, Validators.min(18)]),
      gender: new FormControl("", [Validators.required]),
      phone: new FormControl("", [Validators.required, Validators.pattern('[+]84[0-9]{9,10}')])
    });
  }

  ngOnInit(): void {
  }

  checkConfirmPassword(abstractControl: AbstractControl): any {
    const formPassword = abstractControl.value;
    return formPassword.password === formPassword.confirmPassword ? null : {passwordNotSame: true};
  }

  getRegisterInfo(): void {

    console.log('thong tin dang ky');
    console.log(this.registerFormGroup.value);

  }
}
