import { Injectable } from '@angular/core';
import { Moeda } from '../models';


@Injectable({
  providedIn: 'root'
})
export class MoedaService {

  private moedas:Moeda[];

  constructor(){ }

  private moedaObj = [
    {"sigla": "BRL", "descricao": "Real Brasileiro"},
    {"sigla": "USD-BRL", "descricao": "Dólar Comercial"},
    {"sigla": "CAD-BRL", "descricao": "Dólar Canadense"},
    {"sigla": "AUD-BRL", "descricao": "Dólar Australiano"},
    {"sigla": "EUR-BRL", "descricao": "EURO"},
    {"sigla": "GBP-BRL", "descricao": "Libra Esterlina"},
    {"sigla": "ARS-BRL", "descricao": "Peso Argentino"},
    {"sigla": "JPY-BRL", "descricao": "Iene Japonês"},
    {"sigla": "CHF-BRL", "descricao": "Franco Suíço"},
    {"sigla": "CNY-BRL", "descricao": "Yuan Chinês"},
    {"sigla": "YLS-BRL", "descricao": "Novo Shekel Israelense"},
    {"sigla": "BTC-BRL", "descricao": "Bitcoin"}  
  ];

  listarTodoas():Moeda[]{
    if(this.moedas){
      return this.moedas;
    }

    this.moedas= [];

    for(let moedaObj of this.moedaObj){
      let moeda: Moeda = new Moeda();
      Object.assign(moeda, moedaObj);
      this.moedas.push(moeda);
    }

      return this.moedas;
  }

 
}