import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  SetResponseFromLogin(token){
    window.sessionStorage.setItem('token',token);
  }
getToke(){
  window.sessionStorage.getItem('token')
}

removeToke(){
  window.sessionStorage.clear()
}


  constructor() { }
}
