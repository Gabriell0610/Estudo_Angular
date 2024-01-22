import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Animal';
import { ListService } from 'src/app/service/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = []

  animalsDetails: string = ''
  
  constructor(private listService: ListService) { 
    this.getAnimals()
  }

  ngOnInit(): void {
  }

  showAge(animal: Animal) {
    this.animalsDetails = this.listService.ageAnimal(animal)
  }

  removeAnimal(animal: Animal) {
    //Removendo animal visualmente -FRONTEND
    this.animals = this.animals.filter((a) => animal.name !== a.name)
    
    //Removend oanimal da API - BACKEND
    this.listService.remove(animal.id).subscribe()
  }


  //Pegando a resposta da URL da API
  getAnimals():void {
     this.listService.getAll().subscribe((data) => {
      this.animals = data
      console.log(this.animals)
     }) 
    
  }
}
