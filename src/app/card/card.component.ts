import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent  {

  @Input() 
  Title:string

  @Input()
  Action1:string

  @Input()
  Action2:string

  @Input()
  imageSrc:string
}

