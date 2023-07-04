import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent {
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
