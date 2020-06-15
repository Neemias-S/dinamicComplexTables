import { Component, OnInit } from '@angular/core';
import { Table } from './model/tabela';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 
  // Dados Novos
  verticais: Set<String> = new Set<String>();
  horizontais : Set<String> = new Set<String>();

  quadroDeEnfermagem = new Table(this.horizontais,this.verticais);
  
  // Dados dos Itens
  enunciados = ["Quadro atual: Gestão",
  "Quadro atual: Assistência",
  "Quadro atual: Enfermeiro Obstétrico",
  "Quadro atual: OBSTETRIZ",
  "Quadro atual: Técnico de Enfermagem",
  "Quadro atual: Auxiliar de Enfermagem",
  "Quadro atual: Atendentes de Enfermagem",
  "Quadro atual: Parteiras",
  "Afastados/licença > 6 meses: Gestão",
  "Afastados/licença > 6 meses: Assistência",
  "Afastados/licença > 6 meses: Enfermeiro Obstétrico",
  "Afastados/licença > 6 meses: OBSTETRIZ",
  "Afastados/licença > 6 meses: Auxiliar de Enfermagem",
  "Afastados/licença > 6 meses: Atendentes de Enfermagem",
  "Afastados/licença > 6 meses: Parteiras",
  "Em desvio de função: Gestão",
  "Em desvio de função: Enfermeiro Obstétrico",
  "Em desvio de função: Assistência",
  "Afastados/licença > 6 meses: Técnico de Enfermagem",
  "Em desvio de função: OBSTETRIZ",
  "Em desvio de função: Técnico de Enfermagem",
  "Em desvio de função: Auxiliar de Enfermagem",
  "Em desvio de função: Atendentes de Enfermagem",
  "Em desvio de função: Parteiras",
  "Carga horária semanal/categoria: Gestão",
  "Carga horária semanal/categoria: Assistência",
  "Carga horária semanal/categoria: Enfermeiro Obstétrico",
  "Carga horária semanal/categoria: Parteiras",
  "Equipe de Enfermagem",
  "Carga horária semanal/categoria: Atendentes de Enfermagem",
  "Carga horária semanal/categoria: Auxiliar de Enfermagem",
  "Carga horária semanal/categoria: Técnico de Enfermagem",
  "Carga horária semanal/categoria: OBSTETRIZ"]

  numeroItens : Array<String> = [ "3.0.1.1","3.0.1.2","3.0.1.3","3.0.1.4","3.0.1.5","3.0.1.6","3.0.1.7","3.0.1.8",
  "3.0.2.1","3.0.2.2","3.0.2.3","3.0.2.4","3.0.2.5","3.0.2.6","3.0.2.7","3.0.2.8",
  "3.0.3.1","3.0.3.2","3.0.3.3","3.0.3.4","3.0.3.5","3.0.3.6","3.0.3.7","3.0.3.8",
  "3.0.4.1","3.0.4.2","3.0.4.3","3.0.4.4","3.0.4.5","3.0.4.6","3.0.4.7","3.0.4.8",
  "3.0.5.1","3.0.5.2","3.0.5.3","3.0.5.4","3.0.5.5","3.0.5.6","3.0.5.7","3.0.5.8",
  "3.0.6.1","3.0.6.2","3.0.6.3","3.0.6.4","3.0.6.5","3.0.6.6","3.0.6.7","3.0.6.8"]

  ngOnInit(){
    this.setHeaders().then(() => this.separateItemsinRows());
  }

  // Criação das linhas
  tableRows = new Map();//dado novo

  public separateItemsinRows(){

    //verticais.size OU numeroLinhas (dado novo)

    for (let i = 1; i < this.verticais.size+1; i++) {

      let linha = new RegExp(".("+i+"{1})..$")
      let tableRow = this.numeroItens.filter(numero => numero.match(linha));
      
      this.tableRows.set(i ,  tableRow );
      
    }
    console.log(this.tableRows);
    console.log(this.tableRows.keys())
  }

  // Criação dos Cabeçalhos
  public async setHeaders(){
    this.enunciados.forEach(enunciado => {
      this.verticais.add(enunciado.split(":")[0]);
      this.horizontais.add(enunciado.split(":")[1]);
    });
  }

  public getCellsOfRow(row : number){
    return Array.from(this.tableRows.get(row));
  }

  public getNumberOfRows(){
    return Array.from(this.tableRows.keys());
  }

}
