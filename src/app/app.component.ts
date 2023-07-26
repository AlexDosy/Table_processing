import { Component } from '@angular/core';
import { JsonDataService } from './JsonDataService';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample';
  constructor(private jsonDataService: JsonDataService) {}

  updateJsonData(data: any): void {
    this.jsonDataService.updateJsonData(data)
      .subscribe(
        response => {
          // Handle successful response
          console.log('JSON data updated successfully');
        },
        error => {
          // Handle error response
          console.error('Error updating JSON data:', error);
        }
      );
  }
}
