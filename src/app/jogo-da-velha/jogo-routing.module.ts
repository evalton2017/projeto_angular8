import {NgModule} from '@angular/core';
import {RouterModule, Router, Routes} from '@angular/router';

import {JogoDaVelhaComponent} from './jogo-da-velha.component';
import {JogoRoutingComponent} from './jogo-routing.component';

export const JogoDaVelhaRoutes: Routes = [
    {
        path:'jogo-da-velha',
        component:JogoRoutingComponent,
        children:[
            {
               path: '',
               component:JogoDaVelhaComponent 
            }
        ]
    }
];

@NgModule({
    imports:[
        RouterModule.forChild(JogoDaVelhaRoutes)
    ],
    exports:[
        RouterModule
    ]
})

export class JogoRoutingModule{}