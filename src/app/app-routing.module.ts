import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { OrderComponent } from './order/order.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CakeRequestsComponent } from './cake-requests/cake-requests.component';
import { CanDeactivateGuard } from './services/logout.guard';

const routes: Routes = [
  // { path: '', component: LandingComponent },
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent },
  { path: 'order/:id', component: OrderComponent,  canDeactivate : [CanDeactivateGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'cake-requests', component: CakeRequestsComponent },
  { path: "**", component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
