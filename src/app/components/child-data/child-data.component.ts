import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-child-data',
  templateUrl: './child-data.component.html',
  styleUrls: ['./child-data.component.css']
})
export class ChildDataComponent implements OnInit {
  @Input() name2: string = ''
  
  constructor() { }

  ngOnInit(): void {
  }

}
