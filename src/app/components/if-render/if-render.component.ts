import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-render',
  templateUrl: './if-render.component.html',
  styleUrls: ['./if-render.component.css']
})
export class IfRenderComponent implements OnInit {
  canShow: boolean = true
  name: string = 'Gabriel'
  mensagem: string = ''

  
  constructor() { }

  changeText(): void {
    this.canShow = !this.canShow
  }

  ngOnInit(): void {
    this.verificarNome()
  }

  verificarNome() {
    if(this.name === 'Gabriel') {
      this.mensagem = 'Meu nome é Gabriel'
    }else {
      this.mensagem = 'Nome não encontrado'
    }
  }

}
