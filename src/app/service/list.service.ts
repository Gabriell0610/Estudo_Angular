import { Injectable } from '@angular/core';
import { Animal } from '../Animal';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiUrl = 'http://localhost:3000/animals'

  constructor(private http: HttpClient ) { }

  remove(id:number) {
    return this.http.delete<Animal>(`${this.apiUrl}/${id}`)
  }      

  ageAnimal(animal: Animal) {
    return `O pet ${animal.name} tem ${animal.age} anos!`
  }

  getAll():Observable <Animal[]> {
    return this.http.get<Animal[]>(this.apiUrl)
  }

  //esse função recebe o id que vem da url do item-details
  getItem(id: number):Observable<Animal> {
    //Ela então retorna o fetch da URL junto do id, ou seja, 
    //retorna os valores do animal de acordo com o id
    return this.http.get<Animal>(`${this.apiUrl}/${id}`)
  }
  
  
}
