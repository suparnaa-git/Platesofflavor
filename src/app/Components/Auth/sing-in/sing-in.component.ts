import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})
export class SingInComponent implements OnInit {
  loginResponse;

  constructor(private fb: FormBuilder,private authService:AuthenticationService,private router:Router) { }
  ngOnInit(): void {
  }
  loginForm(formValue): void{
  //  console.log(this.singInValue.value);
   const formValueget=formValue.value
       console.log(formValueget)

   this.authService.postSingIn(formValueget).subscribe((response)=>{ 
     this.loginResponse=response
     console.log(response);
     this.router.navigate(['/home'])
   })
 }
}



//   ngOnInit(): void { }
//   loginForm(formValue: any) {
//     // console.log(formValue.value);
//     const formValueget = formValue.value;
//     console.log(formValueget)
//     this.authService.postSignin(formValueget).subscribe((respose) => {
//         this.loginResponse = respose
//         this.store.SetgetResponseFormLogin(this.loginResponse.token)
//         console.log(respose);
//         this.router.navigate(['/home'])
//     });
//   }
// }
