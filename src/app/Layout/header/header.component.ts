import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private store: StorageService, private router: Router) { }

  ngOnInit(): void {
  }
  onclicklogout(){
    this.store.removeToke()
    this.router.navigate(['/signin'])

  }

}
