import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})
export class SingInComponent implements OnInit {
singInValue:FormGroup;
formValue;

  constructor(private fb: FormBuilder,private authService:AuthenticationService) { 
    this.singInValue=this.fb.group({
      email:['',[Validators.required,Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]],
      password:['',[Validators.required,Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]]
  })

  }
  ngOnInit(): void {
  }
  loginForm(): void{
   console.log(this.singInValue.value);
   this.formValue=this.singInValue.value
   this.authService.postSingIn(this.formValue).subscribe((response)=>{
     console.log(response);
   })
 }
}
