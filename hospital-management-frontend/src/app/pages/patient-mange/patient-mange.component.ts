import { NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-mange',
  standalone: true,
  imports: [NgFor,HttpClientModule],
  templateUrl: './patient-mange.component.html',
  styleUrl: './patient-mange.component.css'
})
export class PatientMangeComponent {
  public patientList: any[] = [];

  constructor(private readonly http: HttpClient){
    this.loadPatientList();
  }
  loadPatientList() {
    this.http.get('http://localhost:8080/patient/get-all').subscribe((data:any) => {
      this.patientList = data;
    });
  }

}
