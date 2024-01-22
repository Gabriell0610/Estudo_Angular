import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Animal } from 'src/app/Animal';
import { ListService } from 'src/app/service/list.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
  //Como vai vir só o objeto e não um array, é necessário por esse  ponto de interrogação
  animal?: Animal

  //O Service é chaamdo e a Rota ativa também
  constructor(private listService: ListService, private route: ActivatedRoute) {
    this.getAnimal()
   }

  ngOnInit(): void {
  }

  getAnimal() { 
    //Essa variável armazena o id que está sendo passado na URL
    const id = Number(this.route.snapshot.paramMap.get('id'))
    //O service chama o método que é responsável por fazer o fetch da API de acordo com o id que foi passado na URL
    //É preciso  então pegar esses dados com o subscribe e atribuir ao animal
    this.listService.getItem(id).subscribe((res) => {
      this.animal = res
      console.log(this.animal)
    })
  }

}
