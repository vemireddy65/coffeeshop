import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DishesComponent } from './dishes/dishes.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { OrdersComponent } from './orders/orders.component';
import { ReviewsComponent } from './reviews/reviews.component';


const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'/home'},
  {
    path:'home',component:HomeComponent
  },
  {
    path:'dishes',component:DishesComponent
  },
  {path:'about',component:AboutComponent},
  {path:'menu',component:MenuComponent},
  {path:'review',component:ReviewsComponent},
  {path:'order',component:OrdersComponent},
  // {path:'contact',component:ContactComponent},
  // {path:'',redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
