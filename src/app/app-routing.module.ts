import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { MainlayoutComponent } from './modules/layout/mainlayout/mainlayout.component';
import { ShowtableComponent } from './modules/layout/showtable/showtable.component';

const ROUTES: Routes = [
    {
        path: '',
        component: MainlayoutComponent,
        children:[
            {
                path:'showtable',
                component: ShowtableComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})

export class AppRoutingModule{ }