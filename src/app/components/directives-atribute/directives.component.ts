import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  size = 23
  font = 'Arial'
  color = 'green'

  estilo = 'ligado'
  estilos = ['blue-title', 'small-title']

  ligandoTexto() {
    if(this.estilo === 'desligado') {
      this.estilo = 'ligado'
    }else {
      this.estilo ='desligado'
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
