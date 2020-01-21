
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';
import { ListComponent } from './list/list.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'home',component: HomeComponent },
    { path: 'products',component: ListComponent, children: [
            // { path: 'details/:id', component: DetailComponent },
            { path: 'new',component: NewComponent },
            { path: 'edit/:id', component: EditComponent },
        ]},
    // { path: 'products/new',component: NewComponent },
    // { path: 'products/edit/:id', component: EditComponent },
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }


// const routes: Routes = [
//     { path: 'product',component: ProductComponent, children: [
//         { path: 'details/:id', component: ProductDetailComponent },
//     ]},
//     { path: 'review',component: ReviewComponent, children: [
//         { path: 'details/:id', component: ReviewDetailComponent },
//     ]},
//     { path: '', pathMatch: 'full', redirectTo: '/product' },
// ];
