import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private http: HttpClient){

  }

  tableHeaders: string[]=[];
  tableData: any[]=[];
  sortedTableData: any[]=[];
  sortDirection: string[]=[];


  ngOnInit(): void {
    this.http.get("../assets/data.json").subscribe(items => {
      this.tableData = items as any[];
      this.sortedTableData = [...this.tableData];
      this.tableHeaders = Object.keys(this.tableData[0]);
      this.sortDirection = this.tableHeaders.map(() => '');
    })
  }

  sortBy(header:string){
    const headerIndex = this.tableHeaders.indexOf(header);

    if (this.sortDirection[headerIndex] === '') {
      // Sort in ascending order
      this.sortedTableData.sort((a, b) => (a[header] > b[header] ? 1 : -1));
      this.sortDirection[headerIndex] = 'asc';
    } else if (this.sortDirection[headerIndex] === 'asc') {
      // Sort in descending order
      this.sortedTableData.sort((a, b) => (a[header] < b[header] ? 1 : -1));
      this.sortDirection[headerIndex] = 'desc';
    } else {
      // Reset the data to the initial order
      this.sortedTableData = [...this.tableData];
      this.sortDirection[headerIndex] = '';
    }
  }

}
