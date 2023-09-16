import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})

//  deixando o card inteligente 
export class BigCardComponent  implements OnInit{
  @Input()
  photoCover : string =""
  @Input()
  cardTitle:string =" "
  @Input()
  cardDescripition: string =""
  
  @Input()
  Id:string="1"

  constructor(){

  }


ngOnInit(): void {
}
}
