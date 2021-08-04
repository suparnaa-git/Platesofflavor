import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {
singUpValue:FormGroup;
formValue;
  
  constructor(private fb: FormBuilder,private authService:AuthenticationService) { 
    this.singUpValue=this.fb.group({
      firstname:['',[Validators.required,Validators.maxLength(10)]],
      lastname:['',[Validators.required,Validators.maxLength(10)]],
      email:['',[Validators.required,Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]],
      password:['',[Validators.required,Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]]
    })

  }

  ngOnInit(): void {
  }
 register(): void{
   console.log(this.singUpValue.value);
   this.formValue=this.singUpValue.value
   this.authService.postSingup(this.formValue).subscribe((response)=>{
     console.log(response);
   })
 }
}
