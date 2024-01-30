import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.css']
})
export class FormDataComponent implements OnInit {

  formData!: FormGroup
  constructor() { }

  ngOnInit(): void {
    this.formData = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.pattern(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)])
    }) 
  }

  get name() {
    return this.formData.get('name')!
  }

  get email() {
    return this.formData.get('email')!
  }

  submit() {
    if(this.formData.invalid) {
      return
    }else {
      console.log(this.formData.value)
    }
    
  }

}
