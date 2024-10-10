import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormControlName, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formreactive',
  standalone: true,
  imports: [FormsModule , ReactiveFormsModule , CommonModule],
  templateUrl: './formreactive.component.html',
  styleUrls: ['./formreactive.component.css']
})
export class FormreactiveComponent {

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required , Validators.minLength(5)]),
    password : new FormControl('', Validators.required),
    item : new FormControl('' , Validators.required),
    gender : new FormControl('' , Validators.required),
    Address : new FormArray([
      new FormControl('', Validators.required),
      new FormControl('', Validators.required),
      new FormControl('', Validators.required),
    ]),
    checkbox : new FormControl('' , Validators.requiredTrue)
  });
  get addressControls() {
    return this.loginForm.get('Address') as FormArray;
  }
  loginuser(){
    
    console.log(this.loginForm);
    }

}
