import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '', 
      component: AppComponent,
      children: [
        {
          path: '',
          loadChildren: './login/login.module#LoginPageModule'
        },
        {
          path: 'bookings',
          loadChildren: './booking/booking.module#BookingPageModule'
        } 
      ]
    }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
