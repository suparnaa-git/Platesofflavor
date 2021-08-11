import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { StorageService } from 'src/app/storage.service';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})
export class SingInComponent implements OnInit {
  loginResponse;

  constructor(private fb: FormBuilder,private authService:AuthenticationService,private router:Router, private store:StorageService) { }
  
  
  ngOnInit(): void {
  }
  loginForm(formValue): void{
  //  console.log(this.singInValue.value);
   const formValueget=formValue.value
       console.log(formValueget)

   this.authService.postSingIn(formValueget).subscribe((response)=>{ 
     this.loginResponse=response
     this.store.SetResponseFromLogin(this.loginResponse.token)
     console.log(response);
     this.router.navigate(['/home'])
   })
 }
}

