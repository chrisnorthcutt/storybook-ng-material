import { Component, Inject, OnInit } from '@angular/core';
  import { MAT_DIALOG_DATA } from '@angular/material/dialog';
 
  interface DialogData {
    title: string;
    description: string;
  }
@Component({
  selector: 'app-notification',
    template: `
    <div class="mat-typography">
    <h1>{{data.title}}</h1>
    <p>{{data.description}}</p>
    <button mat-stroked-button color="primary" mat-dialog-close label="Okay">Okay</button>
</div>`
})
export class DialogComponent implements OnInit  {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  ngOnInit(): void {
  }
}




  
 
  
