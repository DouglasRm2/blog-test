import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Action } from 'rxjs/internal/scheduler/Action';
import {dataFake} from '../data/dataFake'
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit{

 
  photoCover : string =''

  contentTitle:string =''

  contentDiscription:string =''

  private id: string | null  ="0"

constructor(
private route: ActivatedRoute
){}

  ngOnInit(): void {
 this.route.paramMap.subscribe( value =>
  this.id = value.get ("id"))

this.setValuestoComponent(this.id)

  }


setValuestoComponent(id:string | null){
  const result = dataFake.filter( 
                 article => article.id == id)[0]
this.contentTitle = result.title
this.contentDiscription = result.description
this.photoCover = result.photoCover

                }
   
}
