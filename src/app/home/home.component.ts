import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  firstTime: any | null = localStorage.getItem('key');

  constructor(){}
  
  ngOnInit(): void {
  if (!this.firstTime) {
    localStorage.setItem('key', 'loaded');
    location.reload();
  } else {
    localStorage.removeItem('key');
  }
}
}
