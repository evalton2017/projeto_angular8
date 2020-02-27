import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversorComponent } from './components/conversor.component';
import { MoedaService, ConversorService } from './service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NumeroDirective } from './directives';
import { ConversorRoutingModule } from './conversor-routing.module';
import { ConversorRoutingComponent } from "./conversor-routing.component";



@NgModule({
  declarations: [
    ConversorComponent,
    ConversorRoutingComponent,
    NumeroDirective],
  imports: [
    CommonModule,
    HttpClientModule,
    ConversorRoutingModule,
    FormsModule    
  ],
  exports:[
    ConversorComponent,
  ],
  providers:[
    MoedaService,
    ConversorService
  ]
})
export class ConversorModule { }
