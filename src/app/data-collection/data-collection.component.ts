import { Component, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-data-collection',
  templateUrl: './data-collection.component.html',
  styleUrls: ['./data-collection.component.css']
})
export class DataCollectionComponent{
  @Output() formSubmit: EventEmitter<any> = new EventEmitter<any>();

  formData: {
    userId: string;
    jobTitle: string;
    firstName: string;
    lastName: string;
    employeeCode: string;
    region: string;
    phoneNumber: string;
    emailAddress: string;
    // Add more properties corresponding to the form fields
  };

  constructor(private http: HttpClient) {
    this.formData = {
      userId: '',
      jobTitle: '',
      firstName: '',
      lastName: '',
      employeeCode: '',
      region: '',
      phoneNumber: '',
      emailAddress: ''
      // Initialize other form fields as empty strings
    };
  }

  submitForm() {
    this.http.post<any>('http://localhost:3000/api/update-json', this.formData).subscribe(
      data => {
        // Notify the parent component that the form has been submitted
        this.formSubmit.emit();
        // Reset the form
        this.formData = {
          userId: '',
          jobTitle: '',
          firstName: '',
          lastName: '',
          employeeCode: '',
          region: '',
          phoneNumber: '',
          emailAddress: ''
          // Reset other form fields
        };
      },
      error => {
        console.error('Error updating data:', error);
      }
    );
  }
}
