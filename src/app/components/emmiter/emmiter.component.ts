import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emmiter',
  templateUrl: './emmiter.component.html',
  styleUrls: ['./emmiter.component.css']
})
export class EmmiterComponent implements OnInit {
  number: number = 0
  constructor() { }

  ngOnInit(): void {
  }

  onChangeNumber() {
    this.number = Math.floor(Math.random() * 10)
  }

}
