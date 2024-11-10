import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-patient-mange',
  standalone: true,
  imports: [NgFor],
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

  deletePatient(id:any){
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.http.delete(`http://localhost:8080/patient/delete-by-id/${id}`).subscribe(() => {
          this.loadPatientList();
        });
        Swal.fire({
          title: "Deleted!",
          text: "Patient has been deleted.",
          icon: "success"
        });
      }
    });
    
    
  }

}
