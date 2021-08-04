import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  contactUsValue:FormGroup

  constructor(private fb: FormBuilder) {
    this.contactUsValue=this.fb.group({
      name:['',[Validators.required,Validators.maxLength(40)]],
      email:['',[Validators.required,Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]],
      number:['',[Validators.required,Validators.pattern('[7-9]{1}[0-9]{9}')]],
      message:['',[Validators.required]]
   })

  }

  ngOnInit(): void {
  }
 register(): void{
   console.log(this.contactUsValue.value);
 }
}
