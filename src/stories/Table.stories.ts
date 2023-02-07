// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { moduleMetadata } from '@storybook/angular';
import {
  DEFAULT_ANGULAR_CODESANDBOX,
  previewTemplate,
} from 'storybook-addon-preview';
import {MatBadgeModule} from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { within } from '@storybook/testing-library';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatFormFieldControl } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AutocompleteComponent } from 'src/app/autocomplete/autocomplete.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { TableComponent } from 'src/app/table/table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Base Components/Table',
  component: TableComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
   
  },



  decorators: [
    moduleMetadata({
      imports: [
        MatListModule,
        MatIconModule,
        MatBadgeModule,
        MatButtonModule,
        MatAutocompleteModule,
        MatInputModule,
        MatFormFieldModule,
        BrowserAnimationsModule,
        FormsModule, ReactiveFormsModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule
      ],
    }),
  ],
} as Meta;




// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<TableComponent> = (args: TableComponent) => ({
  props: args,
});





export const Basic = Template.bind({});
Basic.args = {

};

Basic.parameters = {
  preview: [
    {
      tab: 'HTML',
      template: previewTemplate`
<mat-form-field appearance="standard">
<mat-label>Filter</mat-label>
<input matInput (keyup)="applyFilter($event)" placeholder="Ex. Mia" #input>
</mat-form-field>

<div class="mat-elevation-z8">
<table mat-table [dataSource]="dataSource" matSort>

  <!-- ID Column -->
  <ng-container matColumnDef="id">
    <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>
    <td mat-cell *matCellDef="let row"> {{row.id}} </td>
  </ng-container>

  <!-- Progress Column -->
  <ng-container matColumnDef="progress">
    <th mat-header-cell *matHeaderCellDef mat-sort-header> Progress </th>
    <td mat-cell *matCellDef="let row"> {{row.progress}}% </td>
  </ng-container>

  <!-- Name Column -->
  <ng-container matColumnDef="name">
    <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>
    <td mat-cell *matCellDef="let row"> {{row.name}} </td>
  </ng-container>

  <!-- Fruit Column -->
  <ng-container matColumnDef="fruit">
    <th mat-header-cell *matHeaderCellDef mat-sort-header> Fruit </th>
    <td mat-cell *matCellDef="let row"> {{row.fruit}} </td>
  </ng-container>

  <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
  <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>

  <!-- Row shown when there is no matching data. -->
  <tr class="mat-row" *matNoDataRow>
    <td class="mat-cell" colspan="4">No data matching the filter "{{input.value}}"</td>
  </tr>
</table>

<mat-paginator [pageSizeOptions]="[5, 10, 25, 100]" aria-label="Select page of users"></mat-paginator>
</div>
    
          `,
      language: 'html',
      copy: true,
      codesandbox: DEFAULT_ANGULAR_CODESANDBOX(['@egjs/infinitegrid']),
    },
    {
      tab: 'TS',
      template: previewTemplate`
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}

/** Constants used to fill up our data base. */
const FRUITS: string[] = [
  'blueberry',
  'lychee',
  'kiwi',
  'mango',
  'peach',
  'lime',
  'pomegranate',
  'pineapple',
];
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'table-overview-example',
  styleUrls: ['table-overview-example.css'],
  templateUrl: 'table-overview-example.html',
})
export class TableOverviewExample implements AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'progress', 'fruit'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    // Create 100 users
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
    '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
  };
}
      
          `,
      language: 'ts',
      copy: true,
      codesandbox: DEFAULT_ANGULAR_CODESANDBOX(['@egjs/infinitegrid']),
    },
  ],
};




