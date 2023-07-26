import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  formData: any = {};

  updateFormData(formData: any) {
    this.formData = formData;
  }
}
