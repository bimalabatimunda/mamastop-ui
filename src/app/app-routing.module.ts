import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { TeamComponent } from './team/team.component';
import { ProductComponent } from './product/product.component';
import { CoreservicesComponent } from './coreservices/coreservices.component';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'about-us',
    component:AboutusComponent
  },
  {
    path:'team',
    component:TeamComponent
  },
  {
    path:'product',
    component:ProductComponent
  },
  {
    path:'coreservice',
    component:CoreservicesComponent
  },
  {
    path:'contact-us',
    component:ContactusComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
