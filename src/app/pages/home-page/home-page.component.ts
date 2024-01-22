import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  userName = 'Mylla'

  userData = {
    email: 'mylla@gmail.com',
    role: 'admin'
  }

  dados1 = ''
  dados2 = ''

  constructor() { }

  ngOnInit(): void {
  }

  enviarDados() {
    this.dados1 = 'Gabriel'
    this.dados2 = 'João'
  }
}
