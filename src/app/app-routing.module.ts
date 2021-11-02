import { ProductsResolver } from './products/products.resolver';
import { AuthorizedGuard } from './authorized.guard';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {
    path: 'signup',
    component: SignUpComponent,
  },
  {
path:'login', component:LoginComponent
  },
  {path:'cart', loadChildren:()=>import('./cart/cart.module').then(m => m.CartModule), canActivate:[AuthorizedGuard] },
  {
    path: 'products',
    // canActivate:[AuthorizedGuard],
    resolve:{resolvedProducts: ProductsResolver},
    loadChildren: () =>
      import('./products/products.module').then((m) => m.ProductsModule),

  },
  {path:'**', redirectTo:'', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
