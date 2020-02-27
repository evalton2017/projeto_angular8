import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JogoDaVelhaComponent } from './jogo-da-velha.component';
import { JogoDaVelhaService } from './shared';
import { JogoRoutingModule } from './jogo-routing.module';
import { JogoRoutingComponent } from './jogo-routing.component';

@NgModule({
  declarations: [
    JogoDaVelhaComponent,
    JogoRoutingComponent
  ],
  imports: [
    CommonModule,
    JogoRoutingModule
  ],
  exports:[
    JogoDaVelhaComponent
    
  ], 
  providers:[
    JogoDaVelhaService 
  ]
})
export class JogoDaVelhaModule { }

