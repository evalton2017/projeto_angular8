import {Routes, RouterModule} from '@angular/router';
import {ListarTarefaComponent} from './listar';
import { CadastrarTarefaComponent } from './cadastrar';
import { EditarTarefaComponent } from './editar';
import { NgModule } from '@angular/core';
import {TarefasRoutingComponment} from './tarefas-routing.component'

export const TarefasRoutes:Routes = [
    {
        path:'tarefas',
        component:TarefasRoutingComponment,
        children: [
            {
                path:'',
                component:ListarTarefaComponent
            },
            {
                path:'cadastrar',
                component:CadastrarTarefaComponent
            },
            {
                path:'editar/:id',
                component:EditarTarefaComponent
            }
        ]
        
    },
   
];

@NgModule({
    imports:[
        RouterModule.forChild(TarefasRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class TarefasRoutingModule{}

