import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  // Define the properties
  tableData: any[] = [];
  filterValue: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // Fetch the initial data
    this.fetchData();
  }

  // Method to fetch data from the server
  fetchData() {
    this.http.get<any[]>('http://localhost:3000/api/get-json')
      .subscribe(data => {
        this.tableData = data;
      });
  }

  // Method to filter the table data
  applyFilter() {
    // Filter the tableData based on the filterValue
    // Implementation logic goes here
  }
}
