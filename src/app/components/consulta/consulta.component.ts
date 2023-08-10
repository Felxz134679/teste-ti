// consulta.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})

// Assim que inicializamos o componente ele pega todos os dados
// guardados no localStorage e passa para "clientes"


export class ConsultaComponent implements OnInit {

  clientes: any[] = [];

  ngOnInit() {
    const savedClientes = localStorage.getItem('clientes');
    if (savedClientes) {
      this.clientes = JSON.parse(savedClientes);
    }
  }



}
