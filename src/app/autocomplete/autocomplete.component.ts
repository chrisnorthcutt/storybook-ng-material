import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';


export interface State {
 
  name: string;
  population: string;
  flag: string;
}
@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {

  basicCtrl= new FormControl('');
  stateCtrl = new FormControl('');

  


  options: string[] = ['Bananas', 'Apple', 'Orange'];

  @Input()
  Type: string = 'basic'

  states: State[] = [
    {
      name: 'Arkansas',
      population: '2.978M',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg',
    },
    {
      name: 'California',
      population: '39.14M',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg',
    },
    {
      name: 'Florida',
      population: '20.27M',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg',
    },
    {
      name: 'Texas',
      population: '27.47M',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg',
    },
  ];

  filteredOptions: Observable<string[]>;


 
  filteredStates: Observable<State[]>;

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  private _filterStates(value: string): State[] {
    const filterValue = value.toLowerCase();

    return this.states.filter(state => state.name.toLowerCase().includes(filterValue));
  }

  ngOnInit() {
    // this.filteredStates = this.stateCtrl.valueChanges.pipe(
    //   startWith(''),
    //   map(state => (state ? this._filterStates(state) : this.states.slice())),
    // )
    // this.filteredOptions = this.basicCtrl.valueChanges.pipe(
    //   startWith(''),
    //   //@ts-ignore
    //   map(value => this._filter(value)),
    // )

  

  }

  constructor() {
    this.filteredStates = this.stateCtrl.valueChanges.pipe(
      startWith(''),
      map(state => (state ? this._filterStates(state) : this.states.slice())),
    )

    this.filteredOptions = this.basicCtrl.valueChanges.pipe(
      startWith(''),
      //@ts-ignore
      map(value => this._filter(value)),
    )
  }
    
  }







  

