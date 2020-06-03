import { MainComponent } from './components/main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AuthGuardService } from './auth/auth-guard.service';
// import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AboutComponent } from './components/about/about.component';
import { ProductsComponent } from './components/products/products.component';
import { NewsComponent } from './components/news/news.component';
import { ContactsComponent } from './components/contacts/contacts.component';

const appRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: HomepageComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'news',
        component: NewsComponent
      },
      {
        path:'contacts',
        component: ContactsComponent
      }
    ],
    // canActivate: [AuthGuardService]
  },
  // {
  //   path: 'auth',
  //   loadChildren: './components/auth/auth.module#AuthModule'
  // },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      enableTracing: false,
      useHash: false,
      onSameUrlNavigation: 'reload'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
