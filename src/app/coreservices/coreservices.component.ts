import { Component } from '@angular/core';

@Component({
  selector: 'app-coreservices',
  templateUrl: './coreservices.component.html',
  styleUrls: ['./coreservices.component.scss']
})
export class CoreservicesComponent {
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
