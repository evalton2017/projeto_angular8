import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaService } from './shared';
import { ListarTarefaComponent } from './listar';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CadastrarTarefaComponent } from './cadastrar';
import { EditarTarefaComponent } from './editar/editar-tarefa.component';
import { TarefaConcluidaDirective } from './shared/tarefa-concluida.directive';
import { TarefasRoutingComponment } from './tarefas-routing.component';
import { TarefasRoutingModule } from './tarefas-routing.module';

@NgModule({
  declarations: [
    ListarTarefaComponent,
    CadastrarTarefaComponent,
    EditarTarefaComponent,
    TarefaConcluidaDirective,
    TarefasRoutingComponment

  ],
  providers:[
    TarefaService
  ],
  imports: [
    CommonModule,
    RouterModule,
    TarefasRoutingModule,
    FormsModule
  ]
})
export class TarefasModule { }
