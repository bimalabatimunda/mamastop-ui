import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
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
